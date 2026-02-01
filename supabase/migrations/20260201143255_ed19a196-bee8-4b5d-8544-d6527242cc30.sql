-- Create articles table for blog posts
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image_url TEXT,
  category TEXT NOT NULL DEFAULT 'Wellness',
  author_name TEXT NOT NULL DEFAULT 'Serenity Team',
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to published articles
CREATE POLICY "Published articles are viewable by everyone" 
ON public.articles 
FOR SELECT 
USING (published = true);

-- Create index for faster slug lookups
CREATE INDEX idx_articles_slug ON public.articles(slug);

-- Create index for category filtering
CREATE INDEX idx_articles_category ON public.articles(category);

-- Create index for published articles sorted by date
CREATE INDEX idx_articles_published ON public.articles(published, published_at DESC);

-- Create function to update timestamps (if not exists)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates on articles
CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample articles for demonstration
INSERT INTO public.articles (slug, title, excerpt, content, cover_image_url, category, author_name, published, published_at) VALUES
(
  'morning-yoga-routine-beginners',
  '5 Morning Yoga Poses to Start Your Day Right',
  'Discover a simple yet powerful morning routine that will energize your body and calm your mind before the day begins.',
  '# 5 Morning Yoga Poses to Start Your Day Right

Starting your morning with yoga can transform your entire day. These five gentle poses are perfect for beginners and will help you:

- Wake up your body naturally
- Improve flexibility over time
- Reduce morning stiffness
- Set a positive intention for the day

## 1. Cat-Cow Stretch (Marjaryasana-Bitilasana)

This flowing movement warms up the spine and releases tension in the back and neck.

**How to do it:**
1. Start on hands and knees
2. Inhale, arch your back, lift your gaze (Cow)
3. Exhale, round your spine, tuck your chin (Cat)
4. Repeat 5-10 times

## 2. Downward-Facing Dog (Adho Mukha Svanasana)

One of yoga''s most recognized poses, this inversion stretches the entire body.

## 3. Standing Forward Fold (Uttanasana)

This pose releases tension in the hamstrings and lower back while calming the mind.

## 4. Warrior I (Virabhadrasana I)

Build strength and confidence with this powerful standing pose.

## 5. Child''s Pose (Balasana)

End your practice with this restorative pose to center yourself before the day ahead.

---

*Ready to deepen your practice? Join us at one of our [upcoming retreats](/retreats) for a transformative experience.*',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
  'Yoga',
  'Sarah Chen',
  true,
  NOW() - INTERVAL '2 days'
),
(
  'mindfulness-meditation-guide',
  'The Complete Guide to Mindfulness Meditation',
  'Learn the fundamentals of mindfulness meditation and discover how just 10 minutes a day can reduce stress and improve focus.',
  '# The Complete Guide to Mindfulness Meditation

Mindfulness meditation has been practiced for thousands of years, but modern science is only now catching up to what practitioners have always known: it works.

## What is Mindfulness?

Mindfulness is the practice of bringing your attention to the present moment, without judgment. It''s about observing your thoughts and feelings without getting caught up in them.

## Benefits of Regular Practice

- **Reduced stress and anxiety**
- **Improved focus and concentration**
- **Better emotional regulation**
- **Enhanced self-awareness**
- **Improved sleep quality**

## Getting Started

### Find Your Space

Choose a quiet spot where you won''t be disturbed. You don''t need a special meditation room—a corner of your bedroom works perfectly.

### Set a Timer

Start with just 5-10 minutes. As you build your practice, you can gradually increase this time.

### Focus on Your Breath

1. Sit comfortably with your spine straight
2. Close your eyes or soften your gaze
3. Notice your natural breathing rhythm
4. When your mind wanders, gently return to the breath

> "The present moment is the only moment available to us, and it is the door to all moments." — Thich Nhat Hanh

---

*Experience guided meditation at our [Bali Retreat](/retreats) and transform your practice.*',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
  'Meditation',
  'Michael Torres',
  true,
  NOW() - INTERVAL '5 days'
),
(
  'plant-based-wellness-retreat',
  'How Plant-Based Nutrition Enhances Your Retreat Experience',
  'Explore the connection between what you eat and how you feel during your wellness journey.',
  '# How Plant-Based Nutrition Enhances Your Retreat Experience

At Serenity Retreats, we believe that nourishing your body is just as important as nourishing your mind and soul. That''s why all our retreats feature thoughtfully crafted plant-based cuisine.

## The Mind-Body-Food Connection

What you eat directly impacts:

- Your energy levels during yoga and meditation
- Mental clarity and focus
- Sleep quality
- Emotional balance

## Our Culinary Philosophy

### Fresh and Local

We source ingredients from local organic farms, ensuring the freshest produce that supports both your health and the community.

### Whole Foods Focus

Our chefs prepare meals from whole, unprocessed ingredients—no artificial additives, just pure nourishment.

### Ayurvedic Principles

Many of our dishes are inspired by Ayurvedic traditions, designed to balance your unique constitution.

---

*Taste the difference at our [Costa Rica Retreat](/retreats) where our chef creates daily feasts from the garden.*',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
  'Nutrition',
  'Emma Rodriguez',
  true,
  NOW() - INTERVAL '1 week'
),
(
  'benefits-of-digital-detox',
  'Why a Digital Detox is Essential for Modern Wellness',
  'Disconnect to reconnect: how stepping away from screens can profoundly improve your mental health and relationships.',
  '# Why a Digital Detox is Essential for Modern Wellness

In our hyper-connected world, we spend an average of 7+ hours per day looking at screens. While technology has many benefits, this constant connectivity comes at a cost.

## Signs You Need a Digital Detox

- Checking your phone first thing in the morning
- Feeling anxious when separated from your device
- Difficulty focusing on one task
- Poor sleep quality
- Comparing yourself to others on social media

## What Happens When You Disconnect

### Days 1-2: The Adjustment

You may feel restless or have phantom phone vibrations. This is normal—your brain is recalibrating.

### Days 3-4: Presence Returns

You''ll notice more details in your environment. Conversations become deeper. Your creativity awakens.

### Days 5-7: True Relaxation

Without the constant stimulation, your nervous system finally relaxes. Sleep improves. Stress melts away.

## Tips for Your Detox

1. **Start small** - Begin with phone-free meals
2. **Create boundaries** - Designate device-free zones
3. **Find alternatives** - Rediscover books, nature, and hobbies
4. **Be patient** - Discomfort is temporary; benefits are lasting

---

*All Serenity Retreats are device-free zones. [Join us](/retreats) for a complete reset.*',
  'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800',
  'Wellness',
  'Sarah Chen',
  true,
  NOW() - INTERVAL '10 days'
);