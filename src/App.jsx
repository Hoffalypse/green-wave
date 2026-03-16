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
          <p className="address">4440 Ash Grove Drive, Suite A<br />Springfield, IL 62711</p>
          <a href="tel:2177267569" className="phone-link">
            <span className="phone-icon">📞</span>
            (217) 726-7569
          </a>
        </div>
        <div className="wave-bar bottom"></div>
      </div>
    </div>
  )
}

export default App
