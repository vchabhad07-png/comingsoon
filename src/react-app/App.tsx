import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 2200) // match intro gif duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="page">
      {/* Subtle animated background */}
      <div className="bg-gradient" />

      <main className="container">
        {/* Logo section */}
        <div className="logo-wrapper">
          <img
            src={showIntro ? "/mecoapps-intro.gif" : "/mecoapps-loop.gif"}
            alt="MecoApps logo"
            className="logo"
          />
        </div>

        {/* Text content */}
        <section className="content">
          <span className="badge">Part of the 2.0 Initiative</span>

          <h1>
            MecoApps
          </h1>

          <p className="subtitle">
            Mangalam’s ecosystem of applications — built to connect ideas,
            products, and experiences under a single evolving platform.
          </p>

          <p className="description">
            MecoApps is an integrated ecosystem where multiple purpose-driven
            applications will live, grow, and scale together. Each app is
            designed to work independently, yet seamlessly within the larger
            2.0 Initiative — sharing technology, vision, and innovation.
          </p>

          <p className="coming-soon">
            We’re building something powerful.<br />
            <strong>Coming Soon.</strong>
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
