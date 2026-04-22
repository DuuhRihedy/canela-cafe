import { useScrollReveal } from '../hooks/useScrollReveal'
import curso2Img from '../assets/images/curso2.jpg'

const FEATURES = [
  {
    icon: '☕',
    title: 'Coffee Break',
    desc: 'Cafés especiais e snacks para reuniões e eventos corporativos.',
  },
  {
    icon: '🍽️',
    title: 'Almoço Executivo',
    desc: 'Pratos caseiros para equipes. Entrega em horário combinado.',
  },
  {
    icon: '🎓',
    title: 'Curso de Barista',
    desc: 'Treinamentos e workshops de café para equipes e eventos.',
  },
  {
    icon: '📦',
    title: 'Fornecimento',
    desc: 'Café gourmet em grãos ou moído para escritórios e estabelecimentos.',
  },
]

export default function B2B() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section section--latte" id="b2b" ref={ref}>
      <div className="section__inner b2b__grid">
        <div className="b2b__text">
          <span className="eyebrow reveal">Para Empresas</span>
          <h2 className="reveal reveal-delay-1">
            Leve a experiência Canela Café para o seu negócio
          </h2>
          <div className="divider reveal reveal-delay-2" />
          <p className="reveal reveal-delay-2">
            Atendemos empresas com soluções personalizadas de café e alimentação.
            Desde coffee breaks para reuniões até fornecimento regular de café gourmet
            para o escritório.
          </p>

          <div className="b2b__features reveal reveal-delay-3">
            {FEATURES.map((feat) => (
              <div key={feat.title} className="b2b__feature">
                <div className="b2b__feature-icon">{feat.icon}</div>
                <div className="b2b__feature-title">{feat.title}</div>
                <div className="b2b__feature-desc">{feat.desc}</div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="mailto:b2b@canelacafe.com.br"
              className="btn btn--primary"
            >
              ✉ Solicitar Proposta
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5516997427103&text=Olá! Tenho interesse no atendimento B2B."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="b2b__visual reveal reveal-delay-2">
          <img src={curso2Img} alt="Curso de Barista - Canela Café" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
