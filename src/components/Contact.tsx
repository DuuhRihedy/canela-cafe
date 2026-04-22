import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section" id="contato" ref={ref}>
      <div className="section__inner contact__grid">
        <div className="contact__info">
          <span className="eyebrow reveal">Visite-nos</span>
          <h2 className="reveal reveal-delay-1">Venha tomar um cafezinho</h2>
          <div className="divider reveal reveal-delay-2" />

          <div className="contact__item reveal reveal-delay-2">
            <div className="contact__icon">📍</div>
            <div>
              <div className="contact__label">Endereço</div>
              <div className="contact__value">
                Rua Pedro Javaroni, 306
                <br />Ribeirão Preto — SP, 14051-230
              </div>
            </div>
          </div>

          <div className="contact__item reveal reveal-delay-2">
            <div className="contact__icon">🕒</div>
            <div>
              <div className="contact__label">Horário de Funcionamento</div>
              <div className="contact__value">
                Segunda a Sábado: 6h às 18h
                <br />Domingo: Fechado
              </div>
            </div>
          </div>

          <div className="contact__item reveal reveal-delay-3">
            <div className="contact__icon">📱</div>
            <div>
              <div className="contact__label">WhatsApp</div>
              <div className="contact__value">
                <a href="https://api.whatsapp.com/send?phone=5516997427103" target="_blank" rel="noopener noreferrer">
                  +55 (16) 99742-7103
                </a>
              </div>
            </div>
          </div>

          <div className="contact__item reveal reveal-delay-3">
            <div className="contact__icon">✉</div>
            <div>
              <div className="contact__label">E-mail (B2B)</div>
              <div className="contact__value">
                <a href="mailto:b2b@canelacafe.com.br">
                  b2b@canelacafe.com.br
                </a>
              </div>
            </div>
          </div>

          <div className="contact__actions reveal reveal-delay-4">
            <a
              href="https://api.whatsapp.com/send?phone=5516997427103&text=Olá! Gostaria de fazer um pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://www.instagram.com/canelacafe.emporio/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              📸 Instagram
            </a>
            <a
              href="https://g3food.com.br/canelacafe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              🛵 Delivery
            </a>
          </div>
        </div>

        <div className="contact__map reveal reveal-delay-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3!2d-47.8!3d-21.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjAiUyA0N8KwNDgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Canela Café"
          />
        </div>
      </div>
    </section>
  )
}
