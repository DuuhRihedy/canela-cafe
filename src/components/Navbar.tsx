import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src="/logo.png" alt="Canela Café" loading="eager" />
            <span className="navbar__logo-text">Canela Café</span>
          </Link>

          <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            <Link to="/assinatura" className="navbar__link" style={{ color: 'var(--cinnamon)', fontWeight: 600 }}>Clube</Link>
            <Link to="/sobre" className="navbar__link">Sobre</Link>
            <Link to="/cardapio" className="navbar__link">Cardápio</Link>
            <Link to="/loja" className="navbar__link">Loja</Link>
            <Link to="/b2b" className="navbar__link">Empresas</Link>
            <Link to="/contato" className="navbar__link">Contato</Link>
            <a
              href="https://api.whatsapp.com/send?phone=5516997427103&text=Olá! Gostaria de fazer um pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary navbar__cta"
            >
              Peça Agora
            </a>
          </div>

          <button
            className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        className={`navbar__overlay ${menuOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
      />
    </>
  )
}
