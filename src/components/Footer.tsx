import { Link } from 'react-router-dom'
import { IconInstagram, IconFacebook, IconWhatsapp } from '../icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <img
                src="./logo.png"
                alt="Canela Café"
                style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}
              />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--cream)',
              }}>
                Canela Café
              </span>
            </div>
            <p>
              Dê uma pausa na sua rotina e venha tomar um cafezinho conosco.
              Cafés especiais, pratos artesanais e o melhor atendimento de Ribeirão Preto.
            </p>

            <div className="footer__socials">
              <a
                href="https://www.instagram.com/canelacafe.emporio/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label="Instagram"
              >
                <IconInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label="Facebook"
              >
                <IconFacebook size={20} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5516997427103"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label="WhatsApp"
              >
                <IconWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__title">Navegação</h4>
            <div className="footer__links">
              <Link to="/assinatura" style={{ color: 'var(--cream)', fontWeight: 600 }}>Clube de Assinatura</Link>
              <Link to="/sobre">Sobre Nós</Link>
              <Link to="/cardapio">Cardápio</Link>
              <Link to="/loja">Loja</Link>
              <Link to="/b2b">Para Empresas</Link>
              <Link to="/contato">Contato</Link>
            </div>
          </div>

          <div>
            <h4 className="footer__title">Contato</h4>
            <div className="footer__links">
              <a href="https://api.whatsapp.com/send?phone=5516997427103" target="_blank" rel="noopener noreferrer">
                (16) 99742-7103
              </a>
              <a href="mailto:b2b@canelacafe.com.br">
                b2b@canelacafe.com.br
              </a>
              <a href="https://g3food.com.br/canelacafe" target="_blank" rel="noopener noreferrer">
                Delivery (G3Food)
              </a>
              <a href="https://linktr.ee/canelacafeemporio" target="_blank" rel="noopener noreferrer">
                Linktree
              </a>
            </div>
            <div style={{ marginTop: '16px' }}>
              <h4 className="footer__title">Horário</h4>
              <div className="footer__links">
                <span style={{ opacity: 0.7, fontSize: '0.85rem' }}>Seg–Sáb: 6h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Canela Café Empório e Cafeteria. Todos os direitos reservados.</span>
          <span>Rua Pedro Javaroni, 306 — Ribeirão Preto, SP</span>
        </div>
      </div>
    </footer>
  )
}
