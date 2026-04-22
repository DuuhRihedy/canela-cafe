import Assinatura from '../components/Assinatura'

export default function AssinaturaPage() {
  return (
    <>
      <div className="section section--dark grain" style={{ textAlign: 'center', padding: 'var(--space-3xl) var(--space-lg) var(--space-sm)' }}>
        <h1 style={{ color: 'var(--cream)', fontSize: '3rem' }}>Clube Canela Café</h1>
        <p style={{ color: 'var(--tan)', maxWidth: '600px', margin: 'var(--space-md) auto 0' }}>
          O seu café especial não precisa ser uma preocupação. Receba nossos melhores microlotes todo mês em casa.
        </p>
      </div>
      <Assinatura />
    </>
  )
}
