# TruScape CRM

A modern CRM (Customer Relationship Management) admin dashboard built with Next.js, Prisma, and Supabase.

## Tech Stack

| | |
|--------|----------|
| Framework | Next.js 16 |
| Language | TypeScript |
| Database | Supabase (PostgreSQL) |
| ORM | Prisma 7 |
| Server state | TanStack Query |
| Styles | Tailwind CSS |
| Forms | Formik |
| UI components | Headless UI |

## Features

- 📊 **Dashboard** — Summary stats, sales details, categories, countries, and promotions overview
- 🏢 **Companies** — Browse, filter, and add companies with status tracking
- 🎯 **Promotions** — View and create promotions per company
- 🔄 **Real-time updates** —  UI updates with TanStack Query cache invalidation
- 📱 **Parallel routes** — Navigation using Next.js parallel and intercepting routes

## Upcoming Features

- 🔐 **Authentication** — user login and protected routes
- 👤 **User roles** — admin and viewer permissions
- 📈 **Sales tracking** — sales data per company
- 🖼️ **Image upload** — company and promotion avatars via Supabase Storage
- 🔍 **Search & filters** — filter companies by status, category, country
- 📄 **Pagination** — for large datasets 

## Project Structure

```
src/
├── app/
│   ├── (admin)/
│   │   ├── companies/        # Companies pages
│   │   │   ├── @header/      # Companies header
│   │   │   ├── @toolbar/     # Search and actions toolbar
│   │   │   ├── @modal/       # Intercepting modal routes
│   │   │   └── [id]/         # Company detail page
│   │   └── dashboard/        # Dashboard page with parallel route slots
│   │       ├── @header/      # Dashboard header
│   │       ├── @stats/       # Summary stats cards
│   │       ├── @sales/       # Sales details table
│   │       ├── @categories/  # Categories chart
│   │       ├── @countries/   # Countries chart
│   │       └── @promotions/  # Promotions table
│   ├── api/                  # API routes (HTTP endpoints)
│   │   ├── companies/
│   │   └── promotions/
│   └── components/           # UI components
├── lib/
│   ├── api.ts                # Server-side Prisma functions
│   ├── api-client.ts         # Client-side api functions
│   ├── types.ts              # Shared TypeScript interfaces
│   ├── prisma.ts             # Prisma client singleton
│   └── utils/                # Utility functions
└── prisma/
    ├── schema.prisma          # Database schema
    ├── migrations/            # Database migrations
    └── seed.ts                # Database seed data
```
