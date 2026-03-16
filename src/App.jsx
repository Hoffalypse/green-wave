import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <div className="card">
      <div className="wave-bar"></div>
      <div className="content">
        <h1>Green Wave Consulting</h1>
        <div className="divider"></div>
        <p className="message">Thank you for visiting!</p>
        <p className="submessage">This site is currently under construction.<br />We appreciate your patience.</p>
        <p className="address">4440 Ash Grove Drive, Suite A<br />Springfield, IL 62711</p>
        <a href="tel:2177267569" className="phone-link">
          <span className="phone-icon">📞</span>
          (217) 726-7569
        </a>
      </div>
      <div className="wave-bar bottom"></div>
    </div>
  )
}

function MissionPage() {
  return (
    <div className="mission-card">
      <h2 className="mission-title">Our Mission</h2>
      <div className="divider"></div>
      <p className="mission-text">
        Green Wave Consulting, LLC's mission is to work with our individual clients to assess their specific needs
        in accordance with local, state and federal guidelines, while also using cost effective and timely services
        and standards. Please contact us today to assist with any of your environmental or consulting needs.
      </p>
    </div>
  )
}

function PlaceholderPage({ title }) {
  return (
    <div className="mission-card">
      <h2 className="mission-title">{title}</h2>
      <div className="divider"></div>
      <p className="mission-text">This page is coming soon. Check back for updates.</p>
    </div>
  )
}

const pages = {
  home: <HomePage />,
  about: <PlaceholderPage title="About" />,
  services: <PlaceholderPage title="Services" />,
  mission: <MissionPage />,
  contact: <PlaceholderPage title="Contact" />,
}

export default function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <div className="page">
      <header className="header">
        <img
          src="/green-wave.jpg"
          alt="Green Wave Consulting"
          className="header-logo"
          onClick={() => setActivePage('home')}
          style={{ cursor: 'pointer' }}
        />
        <nav className="nav">
          {['home', 'about', 'services', 'mission', 'contact'].map((page) => (
            <button
              key={page}
              className={`nav-link${activePage === page ? ' nav-link-active' : ''}`}
              onClick={() => setActivePage(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main className="main-content">
        {pages[activePage]}
      </main>
    </div>
  )
}
