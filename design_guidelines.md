# Design Guidelines for Anjana Tulasi D Portfolio

## Design Approach
**Reference-Based Approach**: Modern tech portfolio inspired by clean, professional developer portfolios with colorful accents and smooth interactions. Combines the professionalism of LinkedIn profiles with the visual appeal of modern design portfolios.

## Core Design Principles
- **Colorful & Modern**: Vibrant blue/teal gradients with clean white backgrounds
- **Tech-Professional**: Rounded cards, subtle shadows, smooth hover effects
- **Smooth Navigation**: Single-page application with seamless scrolling between sections
- **Responsive First**: Optimized experience across mobile, tablet, and desktop

## Typography
- **Hero Name**: Bold, large display font (48-64px desktop, 32-40px mobile)
- **Title/Subtitle**: Medium weight, 24-32px desktop, 18-24px mobile
- **Body Text**: Regular weight, 16-18px, dark gray (#222222)
- **Section Headers**: Bold, 32-40px desktop, 24-28px mobile
- Use 1-2 modern sans-serif font families (e.g., Inter, Poppins, or similar)

## Color Palette
- **Primary Blue**: #4A90E2 (buttons, links, accents)
- **Secondary Teal**: #50E3C2 (highlights, secondary actions)
- **Background**: Soft blue-to-white gradient
- **Text**: Dark gray #222222
- **Card Background**: White with subtle shadows
- **Icon Button Colors**: LinkedIn blue, GitHub dark gray, Email orange, Resume teal

## Layout System
- **Container Max-Width**: 1200px for main content
- **Section Padding**: py-16 to py-24 (desktop), py-12 (mobile)
- **Card Spacing**: gap-6 to gap-8
- **Consistent Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24 for margins/padding

## Component Library

### Sticky Header (Present on all pages)
- Fixed position at top, white background with subtle shadow
- Contains 4 rounded icon buttons (LinkedIn, GitHub, Email, Resume PDF)
- Buttons arranged horizontally with hover animations and color-coded accents
- Smooth transition on scroll

### Landing/Hero Section
- **Two-column layout**: Left side for text content, right side for professional photo
- Name display in bold large typography
- Title: "DevOps & Middleware Engineer" beneath name
- Short bio paragraph (3-4 lines)
- Navigation buttons below bio (Experience, Skills, Projects, Education, Contact)
- Photo: Professional headshot with rounded corners or circular crop

### Experience Cards
- Timeline-style layout with company logo space
- Card structure: Job title (bold), Company name, Location, Date range
- Bullet-pointed achievements (3-5 per role)
- Hover effect: subtle lift with shadow enhancement
- Chronological order (most recent first)

### Skills Section
- Categorized skill badges/tags
- Groups: Programming Languages, Cloud Platforms, Middleware, DevOps Tools, Databases
- Colorful tags with rounded corners (px-4 py-2)
- Responsive grid: 3-4 columns desktop, 2 columns tablet, 1-2 columns mobile

### Projects Section
- Card-based layout (2-3 columns desktop, 1 column mobile)
- Each card: Project title, brief description, tech stack tags
- Include publication link for IoT project
- Hover state: subtle scale and shadow enhancement

### Education Section
- Clean card design for each degree
- Display: Degree name, University, Country, Year
- Separate undergrad and graduate sections clearly
- Icons or visual separators between entries

### Contact Form
- Simple three-field form: Name, Email, Message (textarea)
- Submit button with primary blue color
- Form validation states (error red, success green)
- Thank-you message or mailto functionality on submit

## Interaction Design
- **Smooth Scrolling**: 800ms ease transition between sections
- **Button Hovers**: Slight shadow expansion and color brightening
- **Card Hovers**: Subtle lift (translate -2px) with shadow deepening
- **Icon Buttons**: Scale 1.1 on hover with color transition
- No distracting animations—keep interactions purposeful and smooth

## Images
**Professional Headshot**: Include a polished professional photo in the landing section, right side of two-column layout. Recommended treatment: rounded corners (12-16px border-radius) or circular crop. Should convey professionalism appropriate for DevOps/engineering role.

## Footer
Simple, centered footer with copyright: "© 2025 Anjana Tulasi D | Built with ❤️ using React"
Background: light gray (#f8f9fa), padding py-8

## Accessibility
- High contrast text (WCAG AA minimum)
- Focus states on all interactive elements
- Semantic HTML structure with proper headings hierarchy
- Alt text for profile image