import About from '../components/About'
import Gallery from '../components/Gallery'

export default function SobrePage() {
  return (
    <>
      <div className="section section--dark" style={{ textAlign: 'center', padding: 'var(--space-3xl) var(--space-lg) var(--space-xl)' }}>
        <h1 style={{ color: 'var(--cream)', fontSize: '2.5rem' }}>Sobre o Canela Café</h1>
      </div>
      <About />
      <Gallery />
    </>
  )
}
