import heroImg from '../assets/images/ambiente.jpg'
import { motion } from 'framer-motion'
import { IconWhatsapp, IconMenu } from '../icons'

export default function Hero() {
  return (
    <section className="hero grain" id="inicio">
      <div className="hero__bg">
        <img src={heroImg} alt="Interior do Canela Café" />
      </div>

      <div className="hero__content">
        <img src="./logo.png" alt="Canela Café Logo" className="hero__logo" />

        <h1 className="hero__title">
          Canela Café
          <em>Empório &amp; Cafeteria</em>
        </h1>

        <p className="hero__tagline">
          Dê uma pausa na sua rotina e venha tomar um cafezinho conosco.
          <br />Cafés especiais, pratos artesanais e o melhor atendimento de Ribeirão Preto.
        </p>

        <div className="hero__actions">
          <motion.a
            href="https://api.whatsapp.com/send?phone=5516997427103&text=Olá! Gostaria de fazer um pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconWhatsapp size={20} /> Fazer Pedido
          </motion.a>
          <motion.a
            href="https://g3food.com.br/canelacafe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--light"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconMenu size={20} /> Ver Cardápio
          </motion.a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Explore</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
