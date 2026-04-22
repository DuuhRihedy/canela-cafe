import { useScrollReveal } from '../hooks/useScrollReveal'
import cursoImg from '../assets/images/curso-barista.jpg'
import cafeImg from '../assets/images/cafe-gourmet.jpg'

export default function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section section--latte" id="sobre" ref={ref}>
      <div className="section__inner about__grid">
        <div className="about__text">
          <span className="eyebrow reveal">Nossa história</span>
          <h2 className="reveal reveal-delay-1">
            Seu paladar merece uma cafeteria como a nossa
          </h2>
          <div className="divider reveal reveal-delay-2" />
          <p className="reveal reveal-delay-2">
            O Canela Café Empório nasceu da paixão por café de verdade. Aqui em Ribeirão Preto,
            criamos um espaço onde cada xícara conta uma história — desde os grãos selecionados
            da Alta Mogiana até a torra artesanal feita com carinho.
          </p>
          <p className="reveal reveal-delay-3">
            Mais que uma cafeteria, somos um ponto de encontro. Oferecemos cafés especiais gourmet,
            pratos executivos caseiros, burgers artesanais, sobremesas irresistíveis e até cursos
            de barista para quem quer mergulhar nesse universo.
          </p>

          <div className="about__stats reveal reveal-delay-3">
            <div>
              <div className="about__stat-number">4.9K+</div>
              <div className="about__stat-label">Seguidores no Instagram</div>
            </div>
            <div>
              <div className="about__stat-number">☕</div>
              <div className="about__stat-label">Café Gourmet 83+ pts</div>
            </div>
            <div>
              <div className="about__stat-number">6h–18h</div>
              <div className="about__stat-label">Seg a Sáb</div>
            </div>
          </div>
        </div>

        <div className="about__images reveal reveal-delay-2">
          <div className="about__img about__img--1">
            <img src={cursoImg} alt="Curso de Barista no Canela Café" loading="lazy" />
          </div>
          <div className="about__img about__img--2">
            <img src={cafeImg} alt="Café Gourmet Canela Café" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
