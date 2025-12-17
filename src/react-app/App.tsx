import { useEffect, useState } from "react"

function App() {
  const [showArrow, setShowArrow] = useState(true)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(false)
      setShowLogo(true)
    }, 2000) // arrow animation duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="intro-container">
      {showArrow && (
        <div className="arrow-wrapper">
          <svg
            width="28"
            height="48"
            viewBox="0 0 24 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path
              d="M12 0V28"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5 21L12 28L19 21"
              stroke="#555"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {showLogo && (
        <video
          className="logo-video"
          src="/mecoappsanimated.mp4"
          autoPlay
          playsInline
          muted   /* 🔊 remove this line if you WANT sound */
        />
      )}
    </div>
  )
}

export default App
