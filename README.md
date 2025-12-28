# Kasparro Frontend Assignment

Frontend for an AI-SEO platform built with Next.js, TypeScript, and Tailwind.

**Live**: http://localhost:3000  
**Deployment**: https://frontend-assignment-nine-vert.vercel.app/

## Getting Started

```bash
cd kasparro-assignment
npm install
npm run dev
```

## What's Here

Built two main parts:

1. **Marketing pages** - Home, Platform, About pages explaining what Kasparro does
2. **Dashboard** - Brand selector, audit modules with scores/insights/issues, system architecture view

Used Next.js App Router, TypeScript for type safety, Tailwind for styling, and shadcn/ui for UI components.

## Folder Structure

```
kasparro-assignment/
├── app/
│   ├── layout.tsx               # Root layout with ThemeProvider
│   ├── globals.css              # Tailwind config + dark mode styles
│   ├── page.tsx                 # Home page
│   ├── platform/page.tsx        # Platform details
│   ├── about/page.tsx           # About page
│   └── app/                     # Dashboard (nested routes)
│       ├── layout.tsx           # Sidebar layout with theme toggle
│       ├── dashboard/page.tsx   # Brand metrics with loading states
│       ├── audit/page.tsx       # Audit modules with error handling
│       └── architecture/page.tsx
│
├── components/
│   ├── ui/                      # shadcn components (Button, Card, Select, Badge, Skeleton)
│   ├── layout/                  # Header, Footer with theme toggle
│   └── shared/                  # ThemeProvider, ThemeToggle
│
├── data/                        # JSON files with mock data
│   ├── brands.json              # 3 brands
│   ├── dashboard-snapshots.json # High-level metrics for all brands
│   └── audit-data.json          # Complete audit data for all 3 brands
│
├── types/index.ts               # TypeScript interfaces
└── lib/utils.ts                 # Helper functions (formatting, colors, validation)
```

Split things into UI components, layouts, and shared utilities. Pretty straightforward structure.

## Key Features Implemented

### Dark Mode

Added proper dark mode support using `next-themes`:

- Theme toggle button in header and dashboard
- Respects system preferences by default
- All pages and components work in both light and dark modes
- Used CSS variables for theme colors where possible
- Added custom `dark:` classes for specific elements

### Loading States

Added Skeleton components for better UX:

- Dashboard page shows skeleton cards while "loading" data
- Audit page shows skeleton modules before content appears
- Simulated 500ms delay to show the loading states
- Used shadcn's Skeleton component for consistency

### Error Handling

Implemented error states for both dashboard pages:

- Shows error cards when data fails to load
- Proper error messages with visual feedback

### Brand Switching

Made the dashboard dynamic:

- Brand selector dropdown in Dashboard and Audit pages
- All 3 brands now have complete audit data (not just brand-1 anymore)
- Switching brands updates all scores and insights
- Used React state to manage selected brand

### Better Utilities

Improved `lib/utils.ts` with helper functions:

- `formatPercentage()`, `formatNumber()` for displaying metrics
- `formatDate()`, `formatRelativeTime()` for timestamps
- `getScoreColor()`, `getSeverityVariant()` for consistent styling
- Input validation and text manipulation helpers

These made the code cleaner and easier to maintain.

## What I Learned

**Dark Mode is tricky:**

- Had to make sure every text color, background, and border had proper contrast in both modes
- Selection highlighting needed custom CSS to work properly
- Learning when to use CSS variables vs `dark:` classes was important

**TypeScript helps a lot:**

- Caught mistakes when passing wrong data types
- Made refactoring safer (like when I updated the audit data structure)
- IDE autocomplete made development faster

**Component organization:**

- Started with everything inline, then extracted reusable pieces
- Learned to balance between too many small components vs components that are too big
- Still learning where to draw the line!

**State management:**

- Used simple `useState` for brand selection and module switching
- Thought about using Context or Zustand but decided against over-engineering
- Sometimes simple is better

## Tradeoffs & Decisions

**What worked well:**

- TypeScript caught errors early
- shadcn/ui components saved tons of time
- Tailwind made responsive design straightforward
- Dark mode using next-themes was easier than expected

**What I'd improve with more time:**

- Could add animations for page transitions
- Currently works on small screens as well but can be improvised a bit (hamburger menu for small screens)
- More comprehensive error messages

**What I struggled with:**

- Getting dark mode consistent everywhere took longer than expected
- Had some issues with JSX syntax when showing code examples in the architecture page
- Figuring out the right component structure took a few iterations

**Intentional choices:**

- Kept all data in JSON files instead of setting up a backend
- Used simple state management instead of complex solutions
- Focused on functionality over fancy animations
- Made sure it works on mobile even if not very perfect

## Data Structure

All 3 brands now have:

- Dashboard snapshot with AI Visibility Score, Trust Score, Keyword Coverage
- Complete audit data with 7 modules each
- Different scores and insights to show variety

The audit modules are:

1. Content Analysis
2. E-E-A-T Assessment
3. Keyword Optimization
4. Technical SEO
5. Competitor Analysis
6. AI Visibility
7. Brand Sentiment

## Running the Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- **Next.js 16.1.1** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling with OKLCH colors
- **shadcn/ui** - Component library
- **next-themes** - Dark mode support
- **Lucide React** - Icons

**Deployed at**: https://frontend-assignment-nine-vert.vercel.app/
