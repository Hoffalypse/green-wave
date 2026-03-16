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

const staffMembers = [
  {
    name: 'Jeff Wienhoff, PE',
    bio: 'Jeff has a Bachelor in Science in Chemical Engineering from Tulane University. He is a State of Illinois licensed Professional Engineer and has over 20 years in the industry conducting site investigations and generating Corrective Action Plans. He has been involved in the IEPA LUST remediation program, including Underground Storage Tank assessments and remediation, site investigations, SRP consulting, and site closures. He has also performed due diligence Phase I/Phase II site investigations, emergency response and abatement for gasoline spills, and compliance air monitoring. He is certified as an Underground Storage Tank decommissioner in the State of Illinois and is 40-hour OSHA certified for hazardous waste site work.',
  },
  {
    name: 'Mike Bettenhausen',
    bio: 'Mike has an Associate of Science degree in Graphic Design from Robert Morris University. He has over 20 years of experience in environmental consulting with construction projects in the environmental field. He is an expert with the various phases of locating, investigating, sampling and reporting information relative to the assessment, removal and remediation of Underground Storage Tanks and their associated petroleum contaminated soil and groundwater. He holds certification as an Underground Storage Tank decommissioner with the State of Illinois. He holds a 40-hour HAZWOPER, refresher courses and an eight-hour OSHA Site Supervisor card along with a CDL.',
  },
  {
    name: 'Shawn Wolfe',
    bio: 'Shawn has a Bachelor of Arts from Cornell College. He has nearly 20 years of experience in the environmental consulting industry and has been highly involved in the planning, coordinating and performance of site investigation and corrective action activities associated with contaminant releases for LUST and Site Remediation Programs (SRP) sites. He is a company lead for field techniques, regulatory issues, data analysis and presentation, transportation modeling and technical writing. He has performed several due diligence Phase I/Phase II Environmental Site Assessments for a variety of residential/commercial/industrial sites and has assisted with emergency responses and abatement at gasoline service stations. He is 40-hour OSHA certified for hazardous waste site work.',
  },
  {
    name: 'Joe Buhlig',
    bio: 'Joe has a Bachelor of Science in Environmental Biology from Illinois College. He has nearly ten years of experience in the environmental consulting industry. He has been involved in the IEPA LUST remediation program, including site investigations, Corrective Action Plans and site closures. In addition to LUST work, Joe has also performed Phase I and Phase 2 ESAs and Storm Water Pollution Prevention Plans (SWPPP). He is 40-hour OSHA certified for hazardous waste site work.',
  },
]

const otherEmployees = ['Chris Altman', 'Ben Collette', 'Debi Eggleston', 'David Nowack', 'Ashley Wienhoff, CPA/MBA']

function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="about-header-card">
        <h2 className="mission-title">About Us</h2>
        <div className="divider"></div>
        <p className="mission-text">
          Green Wave Consulting, LLC's employees have decades of experience with federal, state and local guidelines
          concerning the handling of environmentally impacted areas. Green Wave ensures your environmental cleanup will
          go according to government guidelines. It also means you can trust us to quickly secure government approvals
          for work plans, LUST funding and No Further Remediation. We can also be called on to provide expert witness
          testimony concerning environmentally impacted areas and professional opinions regarding proper remediation
          and removal of contaminated soil and water.
        </p>
      </div>

      <div className="staff-grid">
        {staffMembers.map((member) => (
          <div key={member.name} className="staff-card">
            <div className="staff-avatar">
              {member.name.charAt(0)}
            </div>
            <h3 className="staff-name">{member.name}</h3>
            <div className="staff-divider"></div>
            <p className="staff-bio">{member.bio}</p>
          </div>
        ))}
      </div>

      <div className="other-employees-card">
        <p className="other-employees-label">Additional Team Members</p>
        <div className="other-employees-list">
          {otherEmployees.map((name) => (
            <span key={name} className="employee-chip">{name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="wave-bar"></div>
        <div className="contact-body">
          <h2 className="mission-title">Contact Us</h2>
          <div className="divider"></div>

          <div className="contact-info-grid">
            <div className="contact-info-block">
              <p className="contact-label">Springfield Office</p>
              <p className="contact-detail">4440 Ash Grove Dr, Suite A<br />Springfield, IL 62711</p>
            </div>
            <div className="contact-info-block">
              <p className="contact-label">Maple Park Office</p>
              <p className="contact-detail">1100 S. County Line Rd<br />Maple Park, IL 60151</p>
            </div>
          </div>

          <div className="contact-links">
            <a href="tel:2177267569" className="contact-link-item">
              <span className="contact-icon">📞</span>
              <span>(217) 726-7569</span>
            </a>
            <a href="mailto:greenwavecon@gmail.com" className="contact-link-item">
              <span className="contact-icon">✉️</span>
              <span>greenwavecon@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Green Wave Consulting - Springfield Office"
            src="https://www.google.com/maps?q=4440+Ash+Grove+Dr+Suite+A+Springfield+IL+62711&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="wave-bar bottom"></div>
      </div>
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
  about: <AboutPage />,
  services: <PlaceholderPage title="Services" />,
  mission: <MissionPage />,
  contact: <ContactPage />,
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
