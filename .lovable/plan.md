

# Connect Booking Form to Backend

## Overview
Connect the booking form to save reservation requests to the database and send you email notifications when someone submits a booking. This requires creating a database table, an edge function for sending emails, and updating the booking modal to submit data.

## What You'll Need to Provide
Before I can implement this, you'll need to provide a **Resend API key** for sending emails. Resend is a simple email service that will notify you when bookings come in.

1. Go to [resend.com](https://resend.com) and create a free account
2. Verify your email domain at [resend.com/domains](https://resend.com/domains) (or use their test email for development)
3. Create an API key at [resend.com/api-keys](https://resend.com/api-keys)
4. I'll prompt you to enter this key when implementing

You'll also need to tell me which email address should receive booking notifications.

## Implementation Steps

### 1. Create Database Table
Create a `booking_requests` table to store all reservation submissions:

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| retreat_id | TEXT | Which retreat (bali-bliss, costa-rica, etc.) |
| retreat_name | TEXT | Human-readable name |
| retreat_location | TEXT | Location details |
| retreat_dates | TEXT | Date range |
| retreat_price | INTEGER | Price per person |
| guest_name | TEXT | Guest's full name |
| guest_email | TEXT | Guest's email |
| guest_phone | TEXT | Guest's phone number |
| message | TEXT | Special requests (optional) |
| status | TEXT | pending, confirmed, cancelled |
| created_at | TIMESTAMP | When submitted |

RLS Policy: Public insert (anyone can submit a booking), but only authenticated admins can view/manage bookings.

### 2. Create Email Notification Edge Function
Create `supabase/functions/send-booking-notification/index.ts`:
- Receives booking data from the frontend
- Saves the booking to the database
- Sends an email notification to your specified address using Resend
- Returns success/error response

### 3. Update Booking Modal
Modify `src/components/BookingModal.tsx`:
- Replace simulated submission with actual API call
- Call the edge function with form data + retreat info
- Handle success/error states appropriately
- Show appropriate feedback to users

## Architecture

```text
User submits form
       │
       ▼
┌─────────────────────┐
│   BookingModal.tsx  │
│   (Form validation) │
└──────────┬──────────┘
           │ POST request
           ▼
┌─────────────────────────────┐
│  send-booking-notification  │
│     (Edge Function)         │
│                             │
│  1. Validate input          │
│  2. Save to database        │
│  3. Send email via Resend   │
└──────────┬──────────────────┘
           │
     ┌─────┴─────┐
     ▼           ▼
┌─────────┐  ┌─────────┐
│ Supabase│  │ Resend  │
│   DB    │  │  Email  │
└─────────┘  └─────────┘
```

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| Database migration | Create | New `booking_requests` table with RLS |
| `supabase/functions/send-booking-notification/index.ts` | Create | Edge function for saving + emailing |
| `supabase/config.toml` | Update | Register the new edge function |
| `src/components/BookingModal.tsx` | Update | Connect form to edge function |

## Technical Details

### Edge Function Logic
```typescript
// Pseudocode for the edge function
1. Parse incoming request (guest info + retreat info)
2. Validate all required fields
3. Insert into booking_requests table using service role
4. Send formatted email via Resend API
5. Return success response
```

### Email Template Content
The notification email will include:
- Retreat name, location, dates, and price
- Guest name, email, and phone
- Special requests/message if provided
- Timestamp of submission
- Quick action links (reply to guest email)

### Security Considerations
- Edge function handles database insert (bypasses need for public write RLS)
- Input validation on both client and server
- Rate limiting considerations for spam prevention
- Email addresses not exposed publicly

