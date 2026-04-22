import { IconWhatsapp } from '../icons'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5516997427103&text=Olá! Gostaria de fazer um pedido."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contato via WhatsApp"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <IconWhatsapp size={28} />
    </a>
  )
}
