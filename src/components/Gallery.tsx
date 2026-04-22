import { useScrollReveal } from '../hooks/useScrollReveal'
import { motion } from 'framer-motion'
import { IconInstagram } from '../icons'
import burgerImg from '../assets/images/burger.jpg'
import lasanhaImg from '../assets/images/lasanha.jpg'
import cafeGourmetImg from '../assets/images/cafe-gourmet.jpg'
import milkshakeImg from '../assets/images/milkshake.jpg'
import curso3Img from '../assets/images/curso3.jpg'
import destaqueImg from '../assets/images/destaque1.jpg'

const IMAGES = [
  { src: cafeGourmetImg, alt: 'Café Gourmet com Prensa Francesa' },
  { src: burgerImg, alt: 'Burger Artesanal do Canela Café' },
  { src: lasanhaImg, alt: 'Lasanha Artesanal' },
  { src: milkshakeImg, alt: 'Milk Shake Artesanal' },
  { src: curso3Img, alt: 'Curso de Barista' },
  { src: destaqueImg, alt: 'Produtos Canela Café' },
]

export default function Gallery() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section className="section section--dark grain" ref={ref} id="galeria">
      <div className="section__inner">
        <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
          <span className="eyebrow reveal">Galeria</span>
          <h2 className="reveal reveal-delay-1" style={{ color: 'var(--cream)' }}>
            Momentos que inspiram
          </h2>
          <div className="divider divider--center divider--light reveal reveal-delay-2" />
        </div>

        <div className="gallery__strip reveal reveal-delay-2">
          {IMAGES.map((img) => (
            <motion.div 
              key={img.alt} 
              className="gallery__item"
              style={{ overflow: 'hidden' }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy" 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-xl reveal reveal-delay-3">
          <motion.a
            href="https://www.instagram.com/canelacafe.emporio/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--light"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconInstagram size={20} /> Siga no Instagram @canelacafe.emporio
          </motion.a>
        </div>
      </div>
    </section>
  )
}
