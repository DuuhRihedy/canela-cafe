import { useScrollReveal } from '../hooks/useScrollReveal'
import cafeGourmetImg from '../assets/images/cafe-gourmet.jpg'

const STEPS = [
  {
    icon: '📦',
    title: 'Escolha seu plano',
    desc: 'Café em grãos ou moído fresco. Na medida certa para o seu consumo mensal.',
  },
  {
    icon: '☕',
    title: 'Curadoria do Barista',
    desc: 'Receba os melhores microlotes da Alta Mogiana selecionados por nossos especialistas.',
  },
  {
    icon: '🎁',
    title: 'Surpresas e Brindes',
    desc: 'Todo mês uma experiência sensorial nova com amostras e brindes exclusivos.',
  },
  {
    icon: '⭐',
    title: 'Vantagens VIP',
    desc: 'Assinantes ganham 10% OFF em todas as compras na loja física e online.',
  },
]

export default function Assinatura() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section" id="assinatura" ref={ref}>
      <div className="section__inner">
        
        <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
          <span className="eyebrow reveal">Clube de Assinatura</span>
          <h2 className="reveal reveal-delay-1">Como funciona o Clube Canela?</h2>
          <div className="divider divider--center reveal reveal-delay-2" />
          <p className="reveal reveal-delay-2" style={{ margin: '0 auto', maxWidth: '700px' }}>
            Não fique sem seu café especial. Assine nosso clube e receba mensalmente 
            no conforto da sua casa os melhores grãos com torra fresca.
          </p>
        </div>

        <div className="assinatura__steps reveal reveal-delay-3" style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: 'var(--space-xl)',
          marginBottom: 'var(--space-4xl)'
        }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                marginBottom: 'var(--space-sm)',
                height: '80px',
                width: '80px',
                margin: '0 auto var(--space-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--warm-white)',
                borderRadius: '50%',
                border: '1px solid var(--border-light)'
              }}>
                {step.icon}
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '8px', color: 'var(--dark-roast)' }}>{step.title}</h4>
              <p style={{ fontSize: '0.85rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="assinatura__banner reveal reveal-delay-4" style={{
          background: 'var(--dark-roast)',
          borderRadius: '2px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center'
        }}>
          <div style={{ padding: 'var(--space-2xl) var(--space-xl)' }}>
            <span className="eyebrow" style={{ color: 'var(--tan)' }}>Oferta Especial</span>
            <h3 style={{ color: 'var(--cream)', fontSize: '2rem', marginBottom: 'var(--space-md)' }}>
              Garanta seu café para o mês inteiro
            </h3>
            <p style={{ color: 'var(--tan)', marginBottom: 'var(--space-xl)' }}>
              Planos a partir de R$ 49,90 por mês com entrega grátis em Ribeirão Preto.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=5516997427103&text=Olá! Quero saber mais sobre a Assinatura Canela Café." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn--primary"
            >
              Assinar Agora
            </a>
          </div>
          <div style={{ height: '100%', minHeight: '300px' }}>
            <img src={cafeGourmetImg} alt="Café Especial Canela" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
