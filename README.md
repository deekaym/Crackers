# 🎆 Blaze & Burst — Premium Fireworks Catalogue

A production-ready, full-stack fireworks catalogue and **WhatsApp enquiry website** built with Next.js 14 App Router, TypeScript, Tailwind CSS, and MongoDB.

> **No payment gateway** — uses a smart Enquiry Cart → WhatsApp integration flow.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 Modern Dark UI | Festival-feel, premium dark theme with animated effects |
| 📦 Product Catalogue | Grid layout, category/price/search filters, pagination |
| 🛒 Enquiry Cart | Add items, update qty, submit form → WhatsApp deep-link |
| 💬 WhatsApp Integration | Auto-generated formatted enquiry message |
| 📧 Email Notifications | Nodemailer → Admin email on every enquiry |
| 🔐 Admin Panel | JWT-protected dashboard with full CRUD |
| 📊 Enquiry Management | View, filter, update status, export CSV |
| ⚡ SEO Optimised | SSR, meta tags, OpenGraph, structured data (schema.org) |
| 📱 Mobile-First | Sticky CTA bar, floating WhatsApp button, responsive grid |
| 🔍 Smart Filtering | Category, price range, search, availability |
| 🗂 ISR | Incremental Static Regeneration for product pages |

---

## 🗂 Project Structure

```
blazeburst/
├── app/
│   ├── layout.tsx              # Root layout, metadata, providers
│   ├── page.tsx                # Homepage (Hero, Categories, Featured, Why Us)
│   ├── not-found.tsx           # Custom 404
│   ├── products/
│   │   ├── page.tsx            # Products listing with client-side filters
│   │   └── [slug]/page.tsx     # Product detail (SSR + related products)
│   ├── category/[slug]/page.tsx # Category listing page
│   ├── safety/page.tsx         # Safety guidelines page
│   ├── admin/
│   │   ├── layout.tsx          # Admin layout (JWT auth guard)
│   │   ├── page.tsx            # Dashboard with stats
│   │   ├── login/page.tsx      # Login page
│   │   ├── products/page.tsx   # Product CRUD
│   │   ├── categories/page.tsx # Category CRUD
│   │   └── enquiries/page.tsx  # Enquiry management + CSV export
│   └── api/
│       ├── products/route.ts             # GET products (with filters)
│       ├── products/[slug]/route.ts      # GET single product
│       ├── categories/route.ts           # GET categories
│       ├── enquiries/route.ts            # POST enquiry
│       └── admin/
│           ├── auth/route.ts             # POST login
│           ├── products/route.ts         # GET/POST admin products
│           ├── products/[id]/route.ts    # PUT/DELETE product
│           ├── categories/route.ts       # GET/POST categories
│           ├── categories/[id]/route.ts  # PUT/DELETE category
│           ├── enquiries/route.ts        # GET enquiries + CSV export
│           └── enquiries/[id]/route.ts   # PATCH status, DELETE
├── components/
│   ├── CartContext.tsx          # Global cart state (useReducer + localStorage)
│   ├── CartDrawer.tsx           # Slide-in cart panel with form + WhatsApp submit
│   ├── Navbar.tsx               # Sticky nav with cart button
│   ├── Footer.tsx               # Footer with links, contacts, safety notice
│   ├── ProductCard.tsx          # Reusable product card with add-to-cart
│   ├── AddToCartButton.tsx      # Client component for product detail page
│   ├── WhatsAppFloat.tsx        # Floating WhatsApp CTA button
│   └── admin/
│       └── AdminSidebar.tsx     # Admin navigation sidebar
├── models/
│   ├── Product.ts               # Product schema (name, slug, category, price…)
│   ├── Category.ts              # Category schema
│   ├── Enquiry.ts               # Enquiry schema with items array
│   └── Admin.ts                 # Admin user with bcrypt password
├── lib/
│   ├── db.ts                    # MongoDB connection (singleton)
│   ├── auth.ts                  # JWT sign/verify + cookie helpers
│   ├── email.ts                 # Nodemailer templates (admin + customer)
│   └── whatsapp.ts              # WhatsApp message generator + URL builder
├── utils/
│   └── helpers.ts               # formatPrice, generateCSV, buildMetaTags…
├── scripts/
│   └── seed.ts                  # Database seeder (categories + products + admin)
├── .env.example                 # Environment variables template
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites

- Node.js 18+ 
- MongoDB (Atlas free tier or local)
- A Gmail account (for email notifications)

### 2. Clone & Install

```bash
git clone https://github.com/your-username/blazeburst.git
cd blazeburst
npm install
```

### 3. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in:

```env
# Required
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/blazeburst
JWT_SECRET=generate-with-openssl-rand-base64-64
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=YourSecurePassword!

# Email (Gmail App Password recommended)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM="Blaze & Burst <your@gmail.com>"
ADMIN_EMAIL_RECIPIENT=admin@yourdomain.com

# WhatsApp (without + sign)
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Gmail App Password**: Go to Google Account → Security → 2-Step Verification → App Passwords

### 4. Seed the Database

```bash
npm run seed
```

This creates sample categories, products, and your admin account.

### 5. Start Development Server

```bash
npm run dev
```

Visit:
- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **Login**: Use `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `.env.local`

---

## 🏗 Production Build

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

### Method 1: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Method 2: GitHub Integration

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Add environment variables (same as `.env.local`) in Project Settings → Environment Variables
4. Deploy!

### Vercel Environment Variables to Add

| Key | Value |
|---|---|
| `MONGODB_URI` | Your Atlas connection string |
| `JWT_SECRET` | Random 64+ char string |
| `ADMIN_EMAIL` | Your admin email |
| `ADMIN_PASSWORD` | Your admin password |
| `EMAIL_HOST` | `smtp.gmail.com` |
| `EMAIL_PORT` | `587` |
| `EMAIL_USER` | Gmail address |
| `EMAIL_PASS` | Gmail App Password |
| `EMAIL_FROM` | `"Blaze & Burst <you@gmail.com>"` |
| `ADMIN_EMAIL_RECIPIENT` | Where to receive enquiry emails |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (no + or spaces) |
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` |

### After Deploying to Vercel

Run the seed script once against production:

```bash
MONGODB_URI=your-prod-uri ADMIN_EMAIL=admin@domain.com ADMIN_PASSWORD=pass npm run seed
```

---

## 🛒 Enquiry Flow (How It Works)

```
User browses catalogue
    ↓
Adds products to cart (localStorage persisted)
    ↓
Clicks "Proceed to Enquiry"
    ↓
Enters Name / Phone / City / Message
    ↓
Clicks "Send via WhatsApp"
    ↓
API saves enquiry to MongoDB
    ↓
Admin gets email notification
    ↓
User is redirected to WhatsApp with pre-filled message:
    "Hi! I'd like to enquire about:
     1. Golden Galaxy Aerial – Qty 2 – ₹1798
     2. Diwali Mega Gift Box – Qty 1 – ₹2499
     Estimated Total: ₹4297
     Name: Rahul Kumar | City: Chennai"
```

---

## 🔐 Admin Panel

Access at `/admin` (JWT cookie-protected)

| Feature | Route |
|---|---|
| Dashboard | `/admin` |
| Manage Enquiries | `/admin/enquiries` |
| Manage Products | `/admin/products` |
| Manage Categories | `/admin/categories` |

Admin can:
- ✅ Add/Edit/Delete products (with featured toggle)
- ✅ Add/Edit/Delete categories
- ✅ View all enquiries with expandable details
- ✅ Update enquiry status (New → Contacted → Closed)
- ✅ Export enquiries as CSV
- ✅ WhatsApp customer directly from enquiry view

---

## 🔧 Customisation

### Change WhatsApp Number
Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` / Vercel settings.

### Add Products
1. Go to `/admin/products` → Add Product
2. Or edit `scripts/seed.ts` and re-run `npm run seed`

### Custom Colours
Edit `tailwind.config.ts` to change the `fire` and `gold` colour palettes.

### WhatsApp Message Format
Edit `lib/whatsapp.ts` → `generateWhatsAppMessage()` function.

---

## 📈 Performance

- **SSR** for product detail pages (SEO + fresh data)
- **ISR** (5 min) for homepage and category pages
- **Client-side** filtering on products page (instant UX)
- **next/image** for automatic WebP/AVIF conversion + lazy loading
- **MongoDB indexes** on slug, category, text search fields
- **localStorage** cart persistence (no server round-trips)

---

## 📄 License

MIT — free to use for commercial projects.
