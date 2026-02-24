

## Plan: Fix navigation visibility on hero section

### Problem

When the page is at the top (not scrolled), the header has `bg-transparent` and uses dark-colored text (`text-foreground`, `text-muted-foreground`). This blends into the dark hero image, making the logo and nav links unreadable.

### Solution

**File: `src/components/NavigationHeader.tsx`**

Add a state-dependent text color scheme:
- **Not scrolled (over hero):** Use white text for the logo and nav links so they stand out against the dark hero image
- **Scrolled (solid background):** Keep current dark text colors (`text-foreground`, `text-muted-foreground`)

Specific changes:
1. Logo `<a>` — when `!isScrolled`, use `text-white` instead of `text-foreground`
2. Desktop nav links — when `!isScrolled`, use `text-white/80 hover:text-white` instead of `text-muted-foreground hover:text-primary`
3. Mobile menu button — when `!isScrolled`, use `text-white`
4. Active link state — adjust similarly for contrast

No other files need changes.

