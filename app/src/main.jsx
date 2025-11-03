# App.jsx
cat > src/App.jsx <<'EOF'
export default function App() {
  return (
    <div data-theme="lofi" className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Room Rental USA</h1>
        <p className="opacity-80">Welcome to the themed site.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card bg-base-200 shadow-xl p-6">
            <h2 className="card-title">Listings</h2>
            <p>Find rooms across cities.</p>
            <button className="btn btn-primary mt-4">Get Started</button>
          </div>
          <div className="card bg-base-200 shadow-xl p-6">
            <h2 className="card-title">Landlords</h2>
            <p>Post your room with ease.</p>
            <button className="btn btn-secondary mt-4">Post a Room</button>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

# index.css with Tailwind directives
cat > src/index.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# main.jsx (standard Vite + React entry)
cat > src/main.jsx <<'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
EOF
