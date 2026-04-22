import Store from '../components/Store'

export default function LojaPage() {
  return (
    <>
      <div className="section" style={{ textAlign: 'center', padding: 'var(--space-3xl) var(--space-lg) var(--space-sm)' }}>
        <h1 style={{ color: 'var(--dark-roast)', fontSize: '2.5rem' }}>Loja & Marketplace</h1>
      </div>
      <Store />
    </>
  )
}
