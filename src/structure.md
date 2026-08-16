naimat-bazaar/
├── public/
│   ├── images/
│   │   ├── Logo.png
│   │   ├── nblogo.svg
│   │   ├── Talbina.jpeg
│   │   ├── Oats.jpeg
│   │   ├── Skincare.jpeg
│   │   ├── Weightloss.jpeg
│   │   └── Packs.jpeg
│   └── favicon.png
├── src/
│   ├── app/
│   │   ├── (public)/                 # Public-facing store layout group
│   │   │   ├── layout.js             # Public layout (Header, Footer, Cart)
│   │   │   └── page.js               # Homepage (Catalog, Hero, Reviews, etc.)
│   │   │
│   │   ├── admin/                    # Admin Dashboard routes
│   │   │   ├── layout.js             # Admin layout (Sidebar, Admin Header)
│   │   │   ├── page.js               # Admin Dashboard Overview / Analytics
│   │   │   ├── products/
│   │   │   │   └── page.js           # Admin Product Management (Add/Edit/Delete)
│   │   │   └── orders/
│   │   │       └── page.js           # Admin Order Tracking & Management
│   │   │
│   │   ├── globals.css
│   │   └── layout.js                 # Root layout wrapping everything
│   │
│   ├── components/
│   │   ├── public/                   # Public UI components
│   │   │   ├── TopBar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TrustBar.jsx
│   │   │   ├── DealsBanner.jsx
│   │   │   ├── ProductCatalog.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ReviewsSection.jsx
│   │   │   ├── FaqSection.jsx
│   │   │   ├── CartDrawer.jsx
│   │   │   ├── BlogModal.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── admin/                    # Admin UI components
│   │       ├── AdminSidebar.jsx
│   │       ├── AdminHeader.jsx
│   │       └── StatsCard.jsx
│   │
│   └── data/
│       └── productsData.js           # Central database / state source
│
├── tailwind.config.js
└── package.json