# WordWave Blog App

A full-stack blogging platform where users can register, log in, create, view, and manage blogs. Features include user authentication, role-based access (admin/user), image uploads, and a modern, responsive UI.

---

## 🚀 Features

- **User Authentication:** Register, login, logout with JWT-based authentication (stored in secure cookies)
- **Role-based Access:** Admin and user roles with protected routes
- **Blog Management:** Create, view, and manage blogs with images
- **Image Uploads:** User and blog images stored on Cloudinary
- **Responsive Design:** Mobile-friendly UI with Tailwind CSS
- **Admin Dashboard:** Manage blogs and users (admin only)
- **Social Links:** Instagram, LinkedIn, GitHub in the footer
- **Deployed on Render:** Separate deployments for frontend and backend

---

## 🗂️ Folder Structure

```
wordwave-blog-app/
├── backend/                # Express.js API, MongoDB, authentication, image upload
│   ├── controller/         # Controllers (user, blog, etc.)
│   ├── middleware/         # Auth and role middleware
│   ├── models/             # Mongoose models
│   ├── jwt/                # JWT token and cookie helpers
│   ├── index.js            # Entry point for backend
│   └── ...                 # Other backend files
├── frontend/               # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/     # Navbar, Footer, etc.
│   │   ├── dashboard/      # Dashboard components
│   │   ├── context/        # React Context (e.g., AuthProvider)
│   │   ├── pages/          # Main pages (Blogs, Detail, Login, etc.)
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   ├── .env                # Frontend environment variables
│   ├── package.json
│   └── README.md
└── README.md               # Project documentation
```

---

## ⚙️ Getting Started (Development)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/wordwave-blog-app.git
cd wordwave-blog-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file in `/backend` with:

    ```
    PORT=4005
    MONOGO_URL=your_mongodb_connection_string
    JWT_SECRET_KEY=your_jwt_secret
    CLOUD_NAME=your_cloudinary_cloud_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_SECRET_KEY=your_cloudinary_secret
    ```

- Start the backend server:

    ```bash
    npm start
    ```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

- Create a `.env` file in `/frontend` with:

    ```
    VITE_API_BASE_URL=https://wordwave-blog-app-backend.onrender.com/api
    # For local dev: VITE_API_BASE_URL=http://localhost:4005/api
    ```
    
- Start the frontend dev server:

    ```bash
    npm run dev
    ```

- Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Building for Production

To create a production build of the frontend:

```bash
npm run build
```

Deploy the contents of the `dist/` folder to your static hosting provider.

---

## 🌐 Deployment (Render)

- **Frontend:** Deploy `/frontend` as a static site on Render.
- **Backend:** Deploy `/backend` as a web service on Render.
- **CORS:** Backend must allow the frontend domain and set `credentials: true`.
- **JWT Cookie:** Set with `httpOnly: true`, `secure: true`, `sameSite: "None"`, and `domain` set to backend domain.

### SPA Routing Fix

For React Router to work on refresh, add a `_redirects` file in `frontend/public`:

```
/*    /index.html   200
```

---

## 🛠️ Key Technologies

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Hot Toast
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs, Cloudinary
- **Deployment:** Render

---

## 📝 API Endpoints (Examples)

- `POST /api/users/register` — Register user
- `POST /api/users/login` — Login user
- `GET /api/users/logout` — Logout user
- `GET /api/blogs` — Get all blogs
- `GET /api/blogs/single-blog/:id` — Get single blog by ID
- `POST /api/blogs/create` — Create blog (auth required)
- `DELETE /api/blogs/:id` — Delete blog (admin only)

---

## 🧑‍💻 Author

**Basavaraj Revani**  
- [Instagram](https://www.instagram.com/basavaraj_revani)
- [LinkedIn](https://www.linkedin.com/in/basavarajrevani)
- [GitHub](https://github.com/basavarajrevani)

---

## ❓ Troubleshooting

- **404 on refresh:** Add `_redirects` file as above.
- **401/Network errors:** Check cookie settings and CORS configuration.
- **Images not showing:** Check Cloudinary config and image URLs.
- **JWT not set:** Ensure backend sets cookie with correct options (`httpOnly`, `secure`, `sameSite: "None"`, `domain`).

---

## 📄 License

This project is for learning and demonstration purposes.

---

*Happy blogging with WordWave!*
