import Menu from '../components/Menu'

export default function CardapioPage() {
  return (
    <>
      <div className="section section--dark" style={{ textAlign: 'center', padding: 'var(--space-3xl) var(--space-lg) var(--space-sm)' }}>
        <h1 style={{ color: 'var(--cream)', fontSize: '2.5rem' }}>Nosso Cardápio Completo</h1>
      </div>
      <Menu />
    </>
  )
}
