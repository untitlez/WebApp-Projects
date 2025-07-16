# 🌐 WebApp – Built with Next.js App Router (Admin Dashboard & Coffee Shop)

> Modern, minimal, and scalable WebApp built with Next.js App Router, designed for internal dashboards and e-commerce-style coffee shop platforms.

---

## ✨ Features

- 🧑‍💻 Ideal for learning modern Next.js features with the new App Router architecture
- ⚡ Built with Next.js App Router for seamless server components and optimized routing
- 🎨 Styled with TailwindCSS + DaisyUI for beautiful, responsive, and customizable UI components
- 🧠 Uses Zustand for lightweight, scalable, and easy-to-use global state management
- 💡 Supports SEO-friendly rendering, smooth API integration, and dynamic data fetching
- 🛠️ Clean and scalable code structure with modular components and layout system for maintainability

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/webapp-admin-coffee.git
cd webapp-admin-coffee
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
```bash
http://localhost:3000
```

---

## 🧱 Project Structure

```plaintext
/app
│
├── (pages)
│   ├── admin
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── add-user/page.js
│   │   └── [id]/page.js
│   └── shop
│       ├── layout.js
│       ├── page.js
│       ├── payment/page.js
│       └── success/page.js
│
├── component
│   ├── OrbBG.jsx
│   ├── ToggleTheme.jsx
│   ├── admin/
│   │   ├── Alert.jsx
│   │   ├── ButtonAction.jsx
│   │   ├── StatUsers.jsx
│   │   ├── TableUsers.jsx
│   │   ├── UserForm.jsx
│   │   └── UserImage.jsx
│   └── shop/
│       ├── BankTransferPayment.jsx
│       ├── Card.jsx
│       ├── Cart.jsx
│       ├── CartList.jsx
│       ├── CreditCardPayment.jsx
│       ├── ModalPayment.jsx
│       └── QRCodePayment.jsx
│
├── data
│   └── coffee.json
│
├── lib
│   ├── constant
│   │   ├── admin/api.js
│   │   ├── admin/form.js
│   │   └── shop/payment.js
│   └── store
│       ├── admin.js
│       └── shop.js
│
├── globals.css
├── layout.js
├── loading.js
└── page.js
```

---

