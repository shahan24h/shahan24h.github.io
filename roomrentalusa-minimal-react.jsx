import React, { useState, useEffect, useRef } from 'react';

export default function RoomRentalUSA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="app">
      <style jsx>{`
        :root {
          --bg: #0b0c10;
          --panel: #12131a;
          --text: #e8eaed;
          --muted: #b8c0cc;
          --brand: #4f8cff;
          --brand-2: #22c55e;
          --ring: rgba(79, 140, 255, 0.35);
          --shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.35);
          color-scheme: dark light;
        }

        @media (prefers-color-scheme: light) {
          :root {
            --bg: #f7f8fb;
            --panel: #ffffff;
            --text: #0e1116;
            --muted: #475569;
            --ring: rgba(79, 140, 255, 0.2);
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.12);
          }
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .app {
          min-height: 100vh;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          background: radial-gradient(1200px 800px at 20% -10%, rgba(79, 140, 255, 0.08), transparent 60%),
                      radial-gradient(1000px 700px at 120% 10%, rgba(34, 197, 94, 0.08), transparent 60%), 
                      var(--bg);
          color: var(--text);
          line-height: 1.6;
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header */
        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: saturate(150%) blur(12px);
          background: color-mix(in srgb, var(--bg) 80%, transparent);
          border-bottom: 1px solid color-mix(in srgb, var(--text) 8%, transparent);
          transition: all 0.3s ease;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-height: 72px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.3px;
          transition: transform 0.2s ease;
          cursor: pointer;
        }

        .brand:hover {
          transform: translateY(-1px);
        }

        .brand-badge {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(145deg, var(--brand), #7cabff);
          color: white;
          box-shadow: var(--shadow);
          font-size: 0.95rem;
          font-weight: 800;
        }

        .brand-text small {
          color: var(--muted);
          font-weight: 600;
          font-size: 0.8rem;
        }

        .cta {
          --_bg: var(--brand);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 1.25rem;
          border-radius: 12px;
          border: 1px solid color-mix(in srgb, var(--_bg) 30%, transparent);
          background: linear-gradient(180deg, 
            color-mix(in srgb, var(--_bg) 20%, #ffffff0d), 
            color-mix(in srgb, var(--_bg) 10%, #00000014));
          color: white;
          text-decoration: none;
          font-weight: 700;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 0.95rem;
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 50px color-mix(in srgb, var(--_bg) 40%, transparent);
        }

        .cta.secondary {
          --_bg: var(--brand-2);
        }

        /* Hero */
        .hero {
          padding: 5rem 0 4rem;
          text-align: center;
        }

        .hero h1 {
          font-size: clamp(2rem, 2.8rem + 1.4vw, 3.6rem);
          line-height: 1.12;
          margin: 0 0 1.25rem;
          background: linear-gradient(135deg, var(--text), color-mix(in srgb, var(--text) 70%, transparent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          margin: 0 auto 2rem;
          color: var(--muted);
          font-size: clamp(1.05rem, 1rem + 0.5vw, 1.2rem);
          max-width: 48rem;
          line-height: 1.7;
        }

        /* Search Bar */
        .search-wrapper {
          max-width: 700px;
          margin: 2.5rem auto 2rem;
          animation: slideUp 0.6s ease-out;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--panel);
          border: 1px solid color-mix(in srgb, var(--text) 12%, transparent);
          border-radius: 16px;
          padding: 0.5rem;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
        }

        .search-bar:focus-within {
          border-color: var(--brand);
          box-shadow: 0 20px 70px rgba(79, 140, 255, 0.25);
          transform: translateY(-2px);
        }

        .search-icon {
          padding: 0 0.75rem;
          color: var(--muted);
        }

        .search-input {
          flex: 1;
          padding: 1rem 0.5rem;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text);
          font-size: 1.05rem;
        }

        .search-input::placeholder {
          color: var(--muted);
        }

        .search-btn {
          padding: 0.95rem 1.75rem;
          background: linear-gradient(145deg, var(--brand), #7cabff);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow);
        }

        .search-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(79, 140, 255, 0.4);
        }

        /* Pills */
        .pillbar {
          margin-top: 1.5rem;
          display: flex;
          gap: 0.65rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .pill {
          font-size: 0.9rem;
          padding: 0.5rem 0.9rem;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--text) 12%, transparent);
          color: var(--muted);
          background: var(--panel);
          transition: all 0.3s ease;
        }

        .pill:hover {
          border-color: var(--brand);
          color: var(--text);
          transform: translateY(-2px);
        }

        /* Panel */
        .panel {
          background: linear-gradient(180deg, 
            color-mix(in srgb, var(--panel) 94%, transparent), 
            color-mix(in srgb, var(--panel) 98%, #000));
          border: 1px solid color-mix(in srgb, var(--text) 8%, transparent);
          border-radius: 20px;
          padding: 1.75rem;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }

        .panel:hover {
          border-color: color-mix(in srgb, var(--text) 14%, transparent);
          box-shadow: var(--shadow-lg);
        }

        /* Grid */
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-top: 3rem;
        }

        @media (min-width: 900px) {
          .grid {
            grid-template-columns: repeat(12, 1fr);
            gap: 1.5rem;
          }
        }

        .featured {
          grid-column: 1 / -1;
        }

        @media (min-width: 900px) {
          .featured {
            grid-column: 1 / span 7;
          }
        }

        .checklist {
          grid-column: 1 / -1;
        }

        @media (min-width: 900px) {
          .checklist {
            grid-column: 8 / -1;
          }
        }

        /* Room Cards */
        .room-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 520px) {
          .room-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .room-card {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid color-mix(in srgb, var(--text) 8%, transparent);
          transition: all 0.3s ease;
          background: color-mix(in srgb, var(--panel) 70%, transparent);
        }

        .room-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--brand);
        }

        .room-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          background: linear-gradient(135deg, #1a1d29 0%, #252834 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          font-size: 0.9rem;
          border-bottom: 1px solid color-mix(in srgb, var(--text) 8%, transparent);
        }

        .room-info {
          padding: 1rem;
        }

        .room-title {
          font-weight: 700;
          margin-bottom: 0.35rem;
          font-size: 1.05rem;
        }

        .room-location {
          color: var(--muted);
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .room-price {
          color: var(--brand);
          font-weight: 700;
          font-size: 1.25rem;
        }

        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.35rem 0.7rem;
          background: color-mix(in srgb, var(--brand-2) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--brand-2) 30%, transparent);
          border-radius: 999px;
          color: var(--brand-2);
          font-size: 0.8rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        /* Items */
        .item {
          display: flex;
          gap: 1rem;
          padding: 1.1rem;
          border-radius: 14px;
          align-items: flex-start;
          border: 1px solid color-mix(in srgb, var(--text) 8%, transparent);
          background: color-mix(in srgb, var(--panel) 40%, transparent);
          transition: all 0.3s ease;
        }

        .item:hover {
          border-color: var(--brand);
          background: var(--panel);
          transform: translateX(4px);
        }

        .item + .item {
          margin-top: 0.85rem;
        }

        .item svg {
          flex: 0 0 28px;
        }

        .muted {
          color: var(--muted);
        }

        .trust {
          margin-top: 1.5rem;
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .trust .badge {
          border: 1px dashed color-mix(in srgb, var(--text) 12%, transparent);
          border-radius: 12px;
          padding: 0.65rem 0.95rem;
          color: var(--muted);
          font-size: 0.9rem;
          transition: all 0.3s ease;
          background: color-mix(in srgb, var(--panel) 50%, transparent);
        }

        .trust .badge:hover {
          border-color: var(--brand);
          color: var(--text);
        }

        .section-title {
          margin: 0 0 1.25rem;
          font-size: 1.8rem;
          font-weight: 700;
        }

        /* Newsletter */
        .newsletter-form {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 1.5rem;
        }

        .email-input {
          flex: 1 1 280px;
          min-width: 280px;
          max-width: 450px;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          border: 1px solid color-mix(in srgb, var(--text) 12%, transparent);
          background: var(--panel);
          color: var(--text);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .email-input:focus {
          outline: none;
          border-color: var(--brand);
          box-shadow: 0 0 0 3px var(--ring);
        }

        .success-message {
          color: var(--brand-2);
          font-weight: 600;
          text-align: center;
          margin-top: 1rem;
        }

        /* Footer */
        .footer {
          margin: 4rem 0 2rem;
          color: var(--muted);
          text-align: center;
          font-size: 0.95rem;
          padding-top: 2rem;
          border-top: 1px solid color-mix(in srgb, var(--text) 6%, transparent);
        }

        .footer a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer a:hover {
          color: var(--brand);
        }

        /* Animations */
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .animate-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-spacing {
          margin-top: 2.5rem;
        }

        .how-list {
          display: grid;
          gap: 0.6rem;
          padding-left: 1.5rem;
          font-size: 1.05rem;
        }

        .actions {
          margin-top: 1.5rem;
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="brand">
              <div className="brand-badge">RR</div>
              <div className="brand-text">
                RoomRentalUSA
                <br />
                <small>Rooms anywhere in the U.S.</small>
              </div>
            </div>
            <a className="cta secondary" href="#get-started">
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="container">
        {/* Hero */}
        <section className="hero">
          <h1>
            Discover the easiest, fastest & most affordable way to rent a room in the U.S.
          </h1>

          <p className="subtitle">
            At <strong>RoomRentalUSA</strong>, we believe finding a place to live should be
            simple—and completely free. Whether you're a student on a short stay, a professional
            relocating for work, or someone seeking your next home, we connect you directly with
            verified listings and trusted hosts. <strong>No fees. No hidden costs. No stress.</strong>
          </p>

          {/* Search Bar */}
          <div className="search-wrapper">
            <div className="search-bar">
              <div className="search-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Enter city, state, or ZIP code..."
                aria-label="Search for rooms"
              />
              <button className="search-btn" type="button">
                Search
              </button>
            </div>
          </div>

          {/* Pills */}
          <div className="pillbar">
            <span className="pill">100% Free</span>
            <span className="pill">Nationwide Coverage</span>
            <span className="pill">Verified Profiles</span>
            <span className="pill">Secure Messaging</span>
            <span className="pill">Move in within Minutes</span>
          </div>
        </section>

        {/* Grid Section */}
        <section className="grid animate-in">
          {/* Featured Rooms */}
          <div className="panel featured">
            <h2 className="section-title">Featured Rooms</h2>
            <div className="room-grid">
              {/* Room Card 1 */}
              <div className="room-card">
                {/* 
                  ============================================
                  IMAGE PLACEHOLDER 1
                  Replace with: <img src="/images/room1.jpg" alt="Cozy Downtown Room" className="room-image" />
                  Recommended size: 400x300px
                  ============================================
                */}
                <div className="room-image">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="room-info">
                  <div className="room-title">Cozy Downtown Room</div>
                  <div className="room-location">New York, NY</div>
                  <div className="room-price">$850/mo</div>
                  <div className="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 7l-9 9-5-5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>

              {/* Room Card 2 */}
              <div className="room-card">
                {/* 
                  ============================================
                  IMAGE PLACEHOLDER 2
                  Replace with: <img src="/images/room2.jpg" alt="Modern Studio" className="room-image" />
                  Recommended size: 400x300px
                  ============================================
                */}
                <div className="room-image">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="room-info">
                  <div className="room-title">Modern Studio</div>
                  <div className="room-location">Los Angeles, CA</div>
                  <div className="room-price">$1,200/mo</div>
                  <div className="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 7l-9 9-5-5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>

              {/* Room Card 3 */}
              <div className="room-card">
                {/* 
                  ============================================
                  IMAGE PLACEHOLDER 3
                  Replace with: <img src="/images/room3.jpg" alt="Spacious Room" className="room-image" />
                  Recommended size: 400x300px
                  ============================================
                */}
                <div className="room-image">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="room-info">
                  <div className="room-title">Spacious Room</div>
                  <div className="room-location">Chicago, IL</div>
                  <div className="room-price">$650/mo</div>
                  <div className="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 7l-9 9-5-5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>

              {/* Room Card 4 */}
              <div className="room-card">
                {/* 
                  ============================================
                  IMAGE PLACEHOLDER 4
                  Replace with: <img src="/images/room4.jpg" alt="Student Apartment" className="room-image" />
                  Recommended size: 400x300px
                  ============================================
                */}
                <div className="room-image">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div className="room-info">
                  <div className="room-title">Student Apartment</div>
                  <div className="room-location">Boston, MA</div>
                  <div className="room-price">$750/mo</div>
                  <div className="verified-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 7l-9 9-5-5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="panel checklist">
            <h2 className="section-title">Why Choose RoomRentalUSA</h2>

            <div className="item">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <path
                  d="M20 7l-9 9-5-5"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <strong>100% free to use</strong>
                <div className="muted">No listing or booking charges—ever.</div>
              </div>
            </div>

            <div className="item">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#4f8cff" strokeWidth="2.5" />
                <path
                  d="M12 3v9l6 3"
                  stroke="#4f8cff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <strong>Available nationwide</strong>
                <div className="muted">Rooms in every city and state across the U.S.</div>
              </div>
            </div>

            <div className="item">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <path
                  d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                />
                <path
                  d="M9.5 12.5l2 2 3.5-3.5"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <strong>Safe & reliable</strong>
                <div className="muted">
                  Verified profiles and secure communication keep you protected.
                </div>
              </div>
            </div>

            <div className="item">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <path
                  d="M4 7h16M4 12h12M4 17h8"
                  stroke="#a3b1c6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <strong>Easy to use</strong>
                <div className="muted">Search, connect, and move in within minutes.</div>
              </div>
            </div>

            <div className="trust">
              <div className="badge">No fees</div>
              <div className="badge">Verified hosts</div>
              <div className="badge">Secure messaging</div>
              <div className="badge">Nationwide coverage</div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-spacing">
          <div className="panel animate-in">
            <h2 className="section-title">How it Works</h2>
            <ol className="muted how-list">
              <li>Search rooms by city, budget, and move-in date.</li>
              <li>Browse verified profiles and message hosts securely.</li>
              <li>Book a viewing or move in—no platform fees, ever.</li>
            </ol>
            <div className="actions">
              <a className="cta" href="#get-started" id="get-started">
                Start free
              </a>
              <a className="cta secondary" href="#newsletter">
                Get launch updates
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="section-spacing">
          <div className="panel animate-in">
            <h2 className="section-title">Be first to know</h2>
            <p className="muted" style={{ margin: '0.2rem 0 1rem', fontSize: '1.05rem' }}>
              Leave your email to get early access and city launch alerts.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="email-input"
              />
              <button className="cta" type="submit">
                Notify me
              </button>
            </form>
            {isSubmitted && (
              <div className="success-message">Thanks! We'll be in touch.</div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} RoomRentalUSA. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href="#">Terms</a> · <a href="#">Privacy</a> · <a href="#">Contact</a>
          </p>
        </footer>
      </main>
    </div>
  );
}