## Getting Started

### Step 1: Install the template
1.  **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install
    ```

2.  **Configure environment variables:**

    *   Create a `.env` file in the root directory.
    *   Add the necessary environment variables (e.g., API endpoint).  Example:

        ```
        VITE_API_BASE_URL=http://localhost:4005/api
        ```

3. **Run the project**
 
 cd backend
 npm start

 cd frontend
 npm run dev 

 This will start the development server at `http://localhost:5173` (or a similar address).


## Building for Production

To create a production build of the application:

```bash
npm run build  # or yarn build or pnpm build

## Folder structure of frontend folder

frontend/  
├── src/  
│   ├── components/        # Reusable React components  
│   ├── dashboard/         # Components specific to the dashboard  
│   ├── context/           # React Context providers (e.g., AuthContext)  
│   ├── pages/             # Main pages of the application  
│   ├── App.jsx            # Main application component  
│   ├── main.jsx           # Entry point for the React application  
│   └── index.css          # Global styles  
├── public/                # Static assets (e.g., images)  
├── .gitignore             # Specifies intentionally untracked files that Git should ignore  
├── README.md              # Project documentation  
├── package.json           # Lists project dependencies and scripts  
├── vite.config.js         # Vite configuration file  
└── tailwind.config.js     # Tailwind CSS configuration file  



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh