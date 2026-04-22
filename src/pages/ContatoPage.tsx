import Contact from '../components/Contact'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ContatoPage() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <>
      <div className="section section--dark" style={{ textAlign: 'center', padding: 'var(--space-3xl) var(--space-lg) var(--space-sm)' }}>
        <h1 style={{ color: 'var(--cream)', fontSize: '2.5rem' }}>Contato & Atendimento</h1>
      </div>
      
      <Contact />

      <section className="section section--latte" ref={ref} id="trabalhe-conosco">
        <div className="section__inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <span className="eyebrow reveal">Oportunidades</span>
            <h2 className="reveal reveal-delay-1">Trabalhe Conosco</h2>
            <div className="divider divider--center reveal reveal-delay-2" />
            <p className="reveal reveal-delay-2">
              Seja parte da equipe Canela Café! Estamos sempre em busca de pessoas apaixonadas por café
              e atendimento incrível. Preencha o formulário abaixo e envie seu currículo.
            </p>
          </div>

          <form 
            className="reveal reveal-delay-3" 
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
            onSubmit={(e) => { e.preventDefault(); alert('Em um ambiente de produção, isso enviaria um e-mail.'); }}
          >
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="nome" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Nome Completo *</label>
                <input required type="text" id="nome" style={{ padding: '12px', borderRadius: '2px', border: '1px solid var(--border-medium)', fontFamily: 'var(--font-body)' }} />
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600 }}>E-mail *</label>
                <input required type="email" id="email" style={{ padding: '12px', borderRadius: '2px', border: '1px solid var(--border-medium)', fontFamily: 'var(--font-body)' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="telefone" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Telefone / WhatsApp *</label>
              <input required type="tel" id="telefone" style={{ padding: '12px', borderRadius: '2px', border: '1px solid var(--border-medium)', fontFamily: 'var(--font-body)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="vaga" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Área de Interesse</label>
              <select id="vaga" style={{ padding: '12px', borderRadius: '2px', border: '1px solid var(--border-medium)', fontFamily: 'var(--font-body)', background: '#fff' }}>
                <option value="barista">Barista</option>
                <option value="atendimento">Atendimento / Salão</option>
                <option value="cozinha">Cozinha / Preparo</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="mensagem" style={{ fontSize: '0.85rem', fontWeight: 600 }}>Mensagem / Resumo das Qualificações</label>
              <textarea id="mensagem" rows={4} style={{ padding: '12px', borderRadius: '2px', border: '1px solid var(--border-medium)', fontFamily: 'var(--font-body)' }}></textarea>
            </div>

            <div style={{ marginTop: 'var(--space-md)', textAlign: 'center' }}>
              <button type="submit" className="btn btn--primary">Enviar Candidatura</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
