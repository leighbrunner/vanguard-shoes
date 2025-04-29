# Vanguard 50th Anniversary Website - Design Documentation

## Overview

This design document outlines the complete structure, design elements, and user experience for the Vanguard 50th anniversary celebration website. The website showcases two primary commemorative products: a collection of four themed shoes and a new Crypto20 ETF.

## Brand Identity

### Color Palette

| Color           | Hex Code | Usage                                   |
|-----------------|----------|----------------------------------------|
| Vanguard Red    | #C4151C  | Primary buttons, accents, brand highlights |
| Vanguard Dark Red| #A31419 | Button hover states, secondary accents |
| Vanguard Navy   | #132257  | Headers, section backgrounds, footer   |
| Vanguard Dark Navy | #0A1439 | Text, deep backgrounds               |
| Vanguard Gray   | #F3F3F3  | Background accent, section dividers    |
| Vanguard Dark Gray | #333333 | Secondary text, borders              |

### Typography

- **Primary Font**: Inter (Sans-serif)
- **Headings**: Bold/Semibold, Vanguard Navy
- **Body Text**: Regular, Vanguard Dark Navy
- **Accent Text**: Medium, Vanguard Red

## Site Structure

```
Home
├── Hero Section
├── Anniversary Highlights
└── Call to Action

Anniversary Shoes
├── Collection Hero
├── Shoe Showcase (4 products)
└── Collection Information

Crypto ETF
├── ETF Hero
├── Product Overview Tab
├── Holdings Tab
└── Performance Tab

About
├── Hero Section
├── Company Story
├── Timeline
├── Anniversary Celebration
└── Quote Section
```

## Responsive Design

- **Desktop**: Full layout with horizontal navigation
- **Tablet**: Adapted layout with some stacked elements
- **Mobile**: Single column layout with hamburger menu navigation

## Navigation

### Desktop Navigation
- Horizontal navigation bar
- Logo + "50th" badge on left
- Primary navigation links centered/right
- Active page indicator

### Mobile Navigation
- Collapsible hamburger menu
- Full-screen overlay when expanded
- Vertical link arrangement
- Prominent close button

## Page Designs

### Home Page

#### Hero Section
- Full-width background in Vanguard Navy
- Large, bold headline: "Celebrating 50 Years of Vanguard"
- Supporting copy about anniversary
- Two CTA buttons: "View Anniversary Shoes" and "Explore Crypto ETF"

#### Anniversary Highlights
- Three-column card layout (single column on mobile)
- Each card representing key anniversary element:
  - Limited Edition Shoes
  - Innovative Crypto ETF
  - 50 Years of Leadership
- Icon, heading, brief description, and link in each card

#### Call to Action
- Gray background section
- Bold heading promoting limited availability
- Single prominent CTA button to explore collection

### Anniversary Shoes Page

#### Collection Hero
- Vanguard Navy background
- "50th Anniversary Collection" heading
- Descriptive subheading about the shoe collection

#### Shoe Showcase
- Two-column grid (single column on mobile)
- Each shoe card includes:
  - Large product image
  - Shoe name and price
  - Description
  - Expandable details section with features
  - "Pre-order Now" button
- The four shoes:
  1. The Vanguard Classic - Flagship red/navy design ($179.99)
  2. The Index Tracker - Performance running shoe ($159.99)
  3. The Bogle Originals - Vintage-inspired casual shoe ($149.99)
  4. The ETF Innovator - Contemporary sneaker ($189.99)

#### Collection Note
- Light gray background
- Information about limited edition nature
- Pre-order availability date

### Crypto ETF Page

#### ETF Hero
- Vanguard Navy background
- "Vanguard Crypto20 ETF" heading
- Ticker symbol badge
- Description of ETF purpose

#### Tab Navigation
- Three tabs: Overview, Holdings, Performance
- Active tab indicated with Vanguard Red underline

#### Overview Tab Content
- Three-column stats cards with ETF details:
  - ETF Details (NAV, expense ratio, etc.)
  - Fund Characteristics
  - Trading Information
- Detailed product description section
- Investment considerations notice

#### Holdings Tab Content
- Full table of 20 cryptocurrencies included in ETF
- For each holding: name, symbol, price, market cap, 24h change, and weight
- Rebalancing methodology explanation

#### Performance Tab Content
- Performance chart placeholder
- Two-column layout with performance metrics
- Risk metrics display
- Performance disclosure information

#### Call to Action
- Navy background
- "Invest in the Future" heading
- "Request Prospectus" button

### About Page

#### Hero Section
- Vanguard Navy background
- "Celebrating 50 Years of Excellence" heading
- Journey description subheading

#### Our Story
- Two-column layout: narrative and stats
- Company history narrative on left
- "Vanguard By The Numbers" stats grid on right with key metrics

#### Timeline
- Vertical timeline with alternating left/right milestones
- Eight key milestones from 1974 to 2024
- Each milestone includes year, title, and description

#### Anniversary Celebration
- Two-column card layout describing special initiatives:
  - Anniversary Shoe Collection
  - Crypto20 ETF Launch
- Each with heading, description, and CTA button

#### Quote Section
- John C. Bogle quote in Navy background
- Quotation marks icon
- Attributed quote with founder name

## Components

### Global Components

#### Navigation Bar
- White background with subtle shadow
- Vanguard logo + "50th" badge
- Desktop: Horizontal links with active state indicator
- Mobile: Hamburger menu with collapsible drawer

#### Footer
- Three-column layout (stacked on mobile)
- Vanguard Navy background
- Sections:
  - About Vanguard with brief text
  - Quick Links navigation
  - Contact information
- Copyright bar with disclaimer at bottom

### Reusable Components

#### Hero Banner
- Full-width colored background
- Centered content with heading and subheading
- Optional CTA buttons

#### Product Card
- White background with subtle shadow
- Image area
- Title with price indicator
- Description area
- Expandable details section (for shoes)
- CTA button

#### Info Card
- White background with subtle shadow
- Optional icon
- Title
- Description text
- Optional link or button

#### Button Styles
- Primary: Vanguard Red with white text
- Secondary: White with Vanguard Navy text
- Text Button: Red text with no background

#### Tab Navigation
- Horizontal arrangement
- Active tab indicated with color and underline
- Subtle transition effects

## Interactive Elements

### Shoe Details Expansion
- Click to expand additional product details
- Shows features list with checkmarks
- Reveals "Pre-order Now" button
- Smooth animation for expand/collapse

### ETF Tab System
- Click tab to switch content areas
- Content transitions smoothly 
- Active tab visually highlighted

### Mobile Menu
- Slide-in animation for mobile navigation
- Full-screen overlay for focus
- Large tap targets for links
- Close button prominently displayed

## Future Enhancements

### Potential Additions
- Product detail pages for individual shoes
- Interactive ETF performance charting
- Newsletter signup form
- Countdown timer to product launch
- Social sharing integration
- Animation for timeline scrolling

## Technical Specifications

### Framework
- React with TypeScript
- CSS for styling (with variables for theming)
- React Router for navigation

### Responsive Breakpoints
- Mobile: 0-767px
- Tablet: 768px-1023px
- Desktop: 1024px+

### Accessibility Considerations
- Semantic HTML structure
- ARIA attributes where needed
- Keyboard navigation support
- Color contrast ratio compliance

## User Flows

### Primary User Journeys

1. **Shoe Exploration Flow**:
   Home → Anniversary Shoes → View Shoe Details → Pre-order

2. **ETF Information Flow**:
   Home → Crypto ETF → View Holdings → Request Prospectus

3. **Brand Learning Flow**:
   Home → About → Timeline → Anniversary Celebration 