<div align="center">
  <img src="assets/banner.png" alt="Notes Management Tool Banner" width="100%" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);"/>
  <br/><br/>
  <h1>📝 Notes Management Tool</h1>
  <p><strong>A full-stack, secure, and intuitive web application to capture, organize, and manage your thoughts.</strong></p>
  
  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS" /></a>
    <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  </p>
</div>

---

## ✨ Features

- **🔐 Secure Authentication:** Full user registration and login system utilizing JSON Web Tokens (JWT) and Bcrypt password hashing.
- **📝 CRUD Operations:** Seamlessly Create, Read, Update, and Delete notes.
- **🎨 Beautiful UI:** Built with Vite and Tailwind CSS, featuring a sleek, responsive, dark-mode inspired glassmorphism aesthetic.
- **⚡ Fast & Optimized:** React frontend ensures instant transitions, while the backend API serves data lightning-fast.
- **📱 Fully Responsive:** Works perfectly on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

### Frontend (Client-Side)
- **Vite & React 19** - Fast development environment and UI library.
- **Tailwind CSS 4** - Utility-first styling for premium design.
- **React Router v7** - Smooth client-side navigation.

### Backend (Server-Side)
- **Node.js & Express** - Powerful and scalable backend framework.
- **MongoDB & Mongoose** - Flexible NoSQL database for storing users and notes.
- **JWT & Bcryptjs** - Industry-standard security and authentication.

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/ometiwari-ai/Notes-Management-Tool.git
cd Notes-Management-Tool
```

### 2. Setup the Backend
Open a terminal and navigate to the backend folder:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder with your secrets:
```env
PORT=9000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
Start the backend server:
```bash
npm run dev
```

### 3. Setup the Frontend
Open a **new** terminal and navigate to the frontend folder:
```bash
cd frontend
npm install
```
Create a `.env` file in the `frontend` folder:
```env
VITE_API_BASE_URL=http://localhost:9000
```
Start the frontend server:
```bash
npm run dev
```

Your app will now be running on `http://localhost:5173/`!

## 🌐 Deployment
This project is production-ready.
- **Frontend** is optimized for [Vercel](https://vercel.com/) out of the box (includes `vercel.json` for SPA routing).
- **Backend** is optimized for [Render](https://render.com/) or Railway using standard Node scripts.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---
<div align="center">
  <sub>Built with ❤️ by Ome Tiwari</sub>
</div>
