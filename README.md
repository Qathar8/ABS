# ABS Travel Hajj and Umrah Agency Website

A modern, bilingual website for ABS Travel Hajj and Umrah Agency Ltd, built with React, TypeScript, and Supabase.

## Features

- **Bilingual Support**: English and Somali language switching
- **Admin Panel**: Secure login for managing packages and posts
- **Package Management**: Create and manage Hajj and Umrah packages
- **Groups Updates**: Share updates from pilgrimage groups
- **Gallery**: Photo and video galleries of trips
- **Contact Integration**: WhatsApp integration and contact forms
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom Islamic theme
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Notifications**: React Hot Toast
- **Animations**: Framer Motion

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   - Copy `.env.example` to `.env.local`
   - Update with your Supabase credentials

3. **Database Setup**
   - Connect to Supabase using the "Connect to Supabase" button
   - The database schema will be automatically created

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/          # Reusable components
├── contexts/           # React contexts (Language, Auth)
├── pages/              # Page components
├── pages/admin/        # Admin panel pages
├── types/              # TypeScript type definitions
├── lib/                # Utility libraries (Supabase client)
└── utils/              # Helper utilities
```

## Admin Panel

- **URL**: `/admin/login`
- **Demo Credentials**: 
  - Email: admin@abstravel.com
  - Password: admin123

### Admin Features
- Manage Hajj and Umrah packages
- Create and edit group updates/posts
- View customer inquiries
- Upload images and videos

## Multilingual Support

The website supports both English and Somali languages:
- Language switcher in the navigation
- All content stored in both languages
- Seamless switching without page reload

## Services Offered

1. **Hajj & Umrah Services** - Complete pilgrimage packages
2. **Hotel Accommodation** - Makkah and Madina hotels
3. **Flight Ticketing** - Local and international flights
4. **Visa Processing** - Umrah and Kenya entry visas
5. **Transportation** - Comfortable buses between holy cities
6. **Affordable Packages** - Budget-friendly options
7. **Monthly Umrah** - Flexible monthly packages

## Contact Information

- **Phone**: +254 700 123 456
- **Email**: info@abstravel.com
- **WhatsApp**: +254 700 123 456
- **Address**: Nairobi, Kenya

## Deployment

The website is optimized for deployment on:
- Vercel
- Netlify
- Cloudflare Pages

Build the project:
```bash
npm run build
```

## License

© 2025 ABS Travel Hajj and Umrah Agency Ltd. All rights reserved.