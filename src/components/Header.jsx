import { useEffect, useState } from 'react'

const links = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Header() {
  // Dark is the default on every load; the toggle switches for the current visit.
  const [mode, setMode] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', mode === 'dark' ? '#0E1412' : '#F2F3EF')
  }, [mode])

  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="#top">ahmer<span>.liaqat</span></a>
        <div className="tools">
          <nav aria-label="Sections">
            <ul>
              {links.map((l) => (
                <li key={l}><a href={`#${l}`}>{l}</a></li>
              ))}
            </ul>
          </nav>
          <button
            className="theme-btn"
            type="button"
            aria-label="Switch between light and dark theme"
            onClick={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))}
          >
            <span className="sun">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            </span>
            <span className="moon">
              <svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
