import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import { useScrollReveal } from '../hooks/useScrollReveal'
import burgerImg from '../assets/images/burger.jpg'
import pratoImg from '../assets/images/prato-executivo.jpg'
import cafeGourmetImg from '../assets/images/cafe-gourmet.jpg'
import cursoImg from '../assets/images/curso-barista.jpg'
import Assinatura from '../components/Assinatura'

export default function Home() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <>
      <Hero />
      
      {/* Clube de Assinatura Completo na Home */}
      <Assinatura />

      {/* Nossa Loja / Produtos */}
      <section className="section">
        <div className="section__inner">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <span className="eyebrow reveal">Nossa Loja</span>
            <h2 className="reveal reveal-delay-1">Curadoria de Excelência</h2>
            <div className="divider divider--center reveal reveal-delay-2" />
            <p className="reveal reveal-delay-2" style={{ margin: '0 auto', maxWidth: '600px' }}>
              Selecionamos os melhores grãos e desenvolvemos produtos artesanais para elevar sua rotina.
            </p>
          </div>

          <div className="menu__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 340px))', justifyContent: 'center' }}>
            <motion.div 
              className="menu__card reveal reveal-delay-1"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="menu__card-tag">Mais Pedido</span>
              <motion.img 
                src={burgerImg} 
                alt="C&B Bacon" 
                className="menu__card-img" 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              />
              <div className="menu__card-body" style={{ textAlign: 'center' }}>
                <h4 className="menu__card-title">C&B Bacon</h4>
                <p className="menu__card-desc">Nosso blend artesanal de carnes nobres num formato inesquecível, com bacon e cheddar.</p>
              </div>
            </motion.div>

            <motion.div 
              className="menu__card reveal reveal-delay-2"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="menu__card-tag">Para Acompanhar</span>
              <motion.img 
                src={pratoImg} 
                alt="Fritas com Cheddar e Bacon" 
                className="menu__card-img"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              />
              <div className="menu__card-body" style={{ textAlign: 'center' }}>
                <h4 className="menu__card-title">Fritas Especial</h4>
                <p className="menu__card-desc">Batata frita com tempero chimichurri e sal, com muito bacon e cheddar derretido.</p>
              </div>
            </motion.div>

            <motion.div 
              className="menu__card reveal reveal-delay-3"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="menu__card-tag">Sobremesa</span>
              <motion.img 
                src={cafeGourmetImg} 
                alt="Milkshake Ninho c/ Nutella" 
                className="menu__card-img"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              />
              <div className="menu__card-body" style={{ textAlign: 'center' }}>
                <h4 className="menu__card-title">Milkshake Ninho c/ Nutella</h4>
                <p className="menu__card-desc">Base de sorvete cremoso batido perfeitamente com Leite Ninho e a legítima Nutella.</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center reveal reveal-delay-4" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/loja" className="btn btn--primary">Explorar Toda a Loja</Link>
          </div>
        </div>
      </section>

      {/* Resumo B2B / Empresas */}
      <section className="section section--dark grain">
        <div className="section__inner text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="eyebrow reveal" style={{ color: 'var(--tan)' }}>Corporativo</span>
          <h2 className="reveal reveal-delay-1" style={{ color: 'var(--cream)', marginBottom: 'var(--space-md)' }}>
            Elevando o padrão na sua empresa
          </h2>
          <div className="divider divider--center divider--light reveal reveal-delay-2" />
          <p className="reveal reveal-delay-2" style={{ color: 'var(--tan)', marginBottom: 'var(--space-xl)' }}>
            Fornecimento mensal de café especial, coffee breaks premium e cursos de barista para capacitar o seu time.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/b2b" className="btn btn--light">Ver Soluções Corporativas</Link>
          </div>
        </div>
      </section>

      {/* Nossa Essência vai pro final */}
      <section className="section section--latte" ref={ref}>
        <div className="section__inner">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <span className="eyebrow reveal">Nossa Identidade</span>
            <h2 className="reveal reveal-delay-1">Mais do que café, uma experiência.</h2>
            <div className="divider divider--center reveal reveal-delay-2" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: 'var(--space-3xl)', alignItems: 'center' }}>
            <div className="about__text" style={{ textAlign: 'left' }}>
              <h3 className="reveal reveal-delay-2" style={{ marginBottom: '16px' }}>Do grão à xícara com afeto.</h3>
              <p className="reveal reveal-delay-3" style={{ marginBottom: 'var(--space-xl)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                O Canela Café Empório nasceu de uma busca incessante pela xícara perfeita. 
                Aqui em Ribeirão Preto, honramos o produtor local selecionando os melhores lotes da região 
                para criar um refúgio acolhedor onde qualidade e hospitalidade se encontram em cada detalhe.
              </p>
              <div className="reveal reveal-delay-4">
                <Link to="/sobre" className="btn btn--outline">Descubra Nossa História</Link>
              </div>
            </div>
            <div className="reveal reveal-delay-3" style={{ borderRadius: '2px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(26, 14, 8, 0.12)' }}>
              <img src={cursoImg} alt="Nosso Ambiente" loading="lazy" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
