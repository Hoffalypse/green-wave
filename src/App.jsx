import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <div className="home-wrapper">
      <div className="home-hero">
        <h1 className="home-title">Green Wave Consulting, LLC</h1>
        <div className="divider"></div>
        <p className="home-copy">
          Green Wave Consulting, LLC has expertise in the field of IEPA LUST compliance. With multiple employees
          having over 20 years of experience in this field, you can expect professional outcomes on your projects.
        </p>
      </div>

      <div className="home-images">
        <div className="home-img-wrap home-img-left">
          <img src="/home-1.jpg" alt="Green Wave Consulting" />
        </div>
        <div className="home-img-wrap home-img-center">
          <img src="/home-2.jpg" alt="Green Wave Consulting" />
        </div>
        <div className="home-img-wrap home-img-right">
          <img src="/home-3.jpg" alt="Green Wave Consulting" />
        </div>
      </div>
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

const services = [
  {
    title: 'Leaking Underground Storage Tanks (LUST)',
    body: 'Green Wave Consulting, LLC specializes in providing services in Illinois and other surrounding areas related to Leaking Underground Storage Tanks (LUST) and their related remediation, assessment, soil analysis, and other cleanup services needed.',
    image: '/Leaking.jpg',
  },
  {
    title: 'Due Diligence Phase I/Phase II',
    body: 'Green Wave Consulting, LLC can assist in all your needs related to property due diligence and property transaction needs. Experience in this area extends to numerous contamination sources and fields.',
    image: '/due.jpg',
  },
  {
    title: 'Expert Testimony',
    body: 'Green Wave Consulting, LLC can assist with any legal testimony needed in relation to LUST remediation, assessment, analysis and other services.',
    image: '/expert.jpg',
  },
  {
    title: 'Additional Services',
    body: 'Green Wave Consulting, LLC also performs site investigations, emergency response and abatement for gasoline spills and compliance air monitoring.',
    image: '/additional.jpg',
  },
]

function ServicesPage() {
  return (
    <div className="services-wrapper">
      <div className="services-header-card">
        <h2 className="mission-title">Our Services</h2>
        <div className="divider"></div>
        <p className="mission-text">
          Green Wave Consulting, LLC provides a full range of environmental consulting services across Illinois and surrounding areas.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={service.title} className={`service-card ${index % 2 === 1 ? 'service-card-reverse' : ''}`}>
            {service.image ? (
              <div className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
            ) : (
              <div className="service-image-placeholder">
                <span className="service-image-icon">🌿</span>
                <span className="service-image-label">Image Coming Soon</span>
              </div>
            )}
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <div className="staff-divider"></div>
              <p className="staff-bio">{service.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


const pages = {
  home: <HomePage />,
  about: <AboutPage />,
  services: <ServicesPage />,
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

      <div className="wave-divider">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C180,10 360,110 540,60 C720,10 900,110 1080,60 C1260,10 1350,90 1440,60 L1440,0 L0,0 Z" fill="rgba(0,0,0,0.25)" />
          <path d="M0,40 C200,90 400,10 600,50 C800,90 1000,20 1200,55 C1320,75 1380,35 1440,40 L1440,0 L0,0 Z" fill="rgba(75,156,211,0.3)" />
          <path d="M0,25 C240,60 480,0 720,30 C960,60 1200,10 1440,25 L1440,0 L0,0 Z" fill="rgba(0,0,0,0.35)" />
        </svg>
      </div>

<main className="main-content">
        {pages[activePage]}
      </main>

      <footer className="site-footer">
        <svg className="footer-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C180,110 360,10 540,60 C720,110 900,10 1080,60 C1260,110 1350,30 1440,60 L1440,120 L0,120 Z" fill="rgba(0,0,0,0.25)" />
          <path d="M0,80 C200,30 400,110 600,70 C800,30 1000,100 1200,65 C1320,45 1380,85 1440,80 L1440,120 L0,120 Z" fill="rgba(75,156,211,0.3)" />
          <path d="M0,95 C240,60 480,120 720,90 C960,60 1200,110 1440,95 L1440,120 L0,120 Z" fill="rgba(0,0,0,0.35)" />
        </svg>
        <div className="footer-content">
          <p className="footer-name">Green Wave Consulting, LLC</p>
          <p className="footer-tagline">Environmental Consulting · Springfield, IL</p>
          <p className="footer-contact">
            <a href="tel:2177267569">(217) 726-7569</a>
            &nbsp;·&nbsp;
            <a href="mailto:greenwavecon@gmail.com">greenwavecon@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
