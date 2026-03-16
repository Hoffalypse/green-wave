import './App.css'

function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="wave-bar"></div>
        <div className="content">
          <h1>Green Wave Consulting</h1>
          <div className="divider"></div>
          <p className="message">Thank you for visiting!</p>
          <p className="submessage">This site is currently under construction.<br />We appreciate your patience.</p>
          <a href="tel:2177252526" className="phone-link">
            <span className="phone-icon">📞</span>
            (217) 725-2526
          </a>
        </div>
        <div className="wave-bar bottom"></div>
      </div>
    </div>
  )
}

export default App
