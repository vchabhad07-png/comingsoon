import { useEffect, useState } from "react"

export default function App() {
  const [showArrow, setShowArrow] = useState(true)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(false)
      setShowLogo(true)
    }, 2200) // duration of arrow.gif

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="intro-container">
      {showArrow && (
        <img
          src="/arrow.gif"
          alt="Arrow animation"
          className="arrow-animation"
        />
      )}

      {showLogo && (
        <img
          src="/mecoapps.png"
          alt="MecoApps Logo"
          className="logo-animation"
        />
      )}
    </div>
  )
}
