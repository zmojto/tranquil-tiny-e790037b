import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Require a Bearer token (anon or user) — public booking form
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }


    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const NOTIFICATION_EMAIL = Deno.env.get('BOOKING_NOTIFICATION_EMAIL');

    if (!RESEND_API_KEY || !NOTIFICATION_EMAIL) {
      console.error('Missing RESEND_API_KEY or BOOKING_NOTIFICATION_EMAIL secret');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    const { full_name, email, phone, retreat_name, special_requests } = body;

    // Input validation
    if (!full_name || typeof full_name !== 'string' || full_name.length > 100) {
      return new Response(JSON.stringify({ error: 'Invalid name' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    if (!email || typeof email !== 'string' || email.length > 255) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    if (!phone || typeof phone !== 'string' || phone.length > 20) {
      return new Response(JSON.stringify({ error: 'Invalid phone' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    if (!retreat_name || typeof retreat_name !== 'string' || retreat_name.length > 200) {
      return new Response(JSON.stringify({ error: 'Invalid retreat name' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }
    if (special_requests && (typeof special_requests !== 'string' || special_requests.length > 500)) {
      return new Response(JSON.stringify({ error: 'Invalid special requests' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const htmlBody = `
      <h2>Nová rezervácia – ${escapeHtml(retreat_name)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Meno</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(full_name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">E-mail</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Telefón</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Retreat</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(retreat_name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Špeciálne požiadavky</td><td style="padding:8px;">${escapeHtml(special_requests || 'Žiadne')}</td></tr>
      </table>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: Deno.env.get('BOOKING_FROM_EMAIL') || 'onboarding@resend.dev',
        to: [NOTIFICATION_EMAIL],
        subject: `Nová rezervácia – ${escapeHtml(retreat_name)}`,
        html: htmlBody,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend error:', data);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Edge function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
