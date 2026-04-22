import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import burgerImg from '../assets/images/burger.jpg'
import pratoImg from '../assets/images/prato-executivo.jpg'
import cafeGourmetImg from '../assets/images/cafe-gourmet.jpg'

type Category = 'todos' | 'marmitex' | 'pratos' | 'hamburgers' | 'hotdogs' | 'porcoes' | 'milkshakes' | 'bebidas'

interface MenuItem {
  title: string
  description?: string
  price: string
  image: string
  category: Category[]
  tag?: string
}

const ITEMS: MenuItem[] = [
  // --- MARMITEX ---
  {
    title: 'Marmitex Executiva',
    description: '2 misturas, 2 guarnições e acompanha salada.',
    price: 'R$ 39,90',
    category: ['marmitex'],
    image: pratoImg
  },
  {
    title: 'Marmitex Grande',
    description: 'Escolha 2 acompanhamentos e 3 guarnições.',
    price: 'R$ 37,90',
    category: ['marmitex'],
    image: pratoImg
  },
  {
    title: 'Marmitex Médio',
    description: 'Escolha 2 acompanhamentos e 3 guarnições.',
    price: 'R$ 32,90',
    category: ['marmitex'],
    image: pratoImg
  },
  {
    title: 'Marmitex Pequeno',
    description: 'Escolha 1 acompanhamento e 2 guarnições.',
    price: 'R$ 28,90',
    category: ['marmitex'],
    image: pratoImg
  },

  // --- PRATOS EXECUTIVOS ---
  {
    title: 'Contra Filé',
    description: 'Acompanha arroz, feijão, contra file grelhado, batata frita e salada alface e tomate.',
    price: 'R$ 32,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Contra Filé a Cavalo',
    description: 'Acompanha arroz, feijão, contra file grelhado, ovo frito, batata frita e salada alface e tomate.',
    price: 'R$ 34,90',
    category: ['pratos'],
    tag: 'Clássico',
    image: pratoImg
  },
  {
    title: 'Contra Filé com Linguiça Toscana',
    description: 'Acompanha arroz, feijão, contra file grelhado, linguiça toscana, batata frita e salada.',
    price: 'R$ 38,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Duplo Hamburguer Angus',
    description: 'Acompanha arroz, feijão, 2 hamburguers angus grelhado 150g cada, batata frita e salada.',
    price: 'R$ 39,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Filé Mignon Grelhado',
    description: 'Acompanha arroz, feijão, purê de batata, filé mignon grelhado, legumes saute, salada.',
    price: 'R$ 59,90',
    category: ['pratos'],
    tag: 'Premium',
    image: pratoImg
  },
  {
    title: 'Lasanha Frango e Mussarela',
    description: 'Massa leve em camadas com frango desfiado, molho cremoso e muçarela gratinada. Com arroz e salada.',
    price: 'R$ 42,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Lasanha Presunto e Mussarela',
    description: 'Massa fresca com presunto, muçarela e molho vermelho caseiro gratinada ao forno. Com arroz e salada.',
    price: 'R$ 42,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Parmegiana de Filé de Tilápia',
    description: 'Filé tilápia empanado, molho de tomate e muçarela derretida, servido com arroz branco e batata frita.',
    price: 'R$ 42,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Parmegiana de Filé Mignon',
    description: 'Filé mignon empanado, molho de tomate e muçarela derretida, servido com arroz branco e batata frita.',
    price: 'R$ 49,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Parmegiana de Frango',
    description: 'Filé de frango empanado, coberto com molho de tomate e muçarela derretida, arroz branco e batata frita.',
    price: 'R$ 35,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Salada Caesar',
    description: 'Alface, filé de frango em tiras, croutons, parmesão, bacon e molho caesar.',
    price: 'R$ 35,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Salada Canela',
    description: 'Alface, rúcula, cenoura, tomate cereja, cebola e croutons crocantes.',
    price: 'R$ 29,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Salada Canela com Grelhado',
    description: 'Salada canela com opção de frango grelhado ou contra filé.',
    price: 'R$ 45,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Strogonoff de Filé Mignon',
    description: 'Cubos macios de filé mignon refogados em molho cremoso. Acompanha arroz branco e batata palha.',
    price: 'R$ 44,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Strogonoff de Frango',
    description: 'Peito de frango em cubos em molho cremoso. Acompanha arroz branco e batata palha.',
    price: 'R$ 35,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Tilápia Grelhada ou Empanada',
    description: 'Filé de tilápia, purê de batata, legumes saute, salada de alface e tomate.',
    price: 'R$ 29,90',
    category: ['pratos'],
    image: pratoImg
  },
  {
    title: 'Veggie Duplo Futuro Burguer',
    description: 'Acompanha arroz, feijão, duplo hamburguer do futuro, brócolis, legumes saute, salada.',
    price: 'R$ 45,90',
    category: ['pratos'],
    tag: 'Vegetariano',
    image: pratoImg
  },
  {
    title: 'Veggie Omelete',
    description: 'Acompanha arroz, feijão, omelete, brócolis, legumes saute, salada de alface e tomate.',
    price: 'R$ 29,90',
    category: ['pratos'],
    tag: 'Vegetariano',
    image: pratoImg
  },

  // --- HAMBURGERS ---
  {
    title: 'C&B Bacon',
    description: 'Pão de brioche, burger artesanal 150g, bacon, cheddar e maionese de bacon.',
    price: 'R$ 34,00',
    category: ['hamburgers'],
    tag: 'Mais Pedido',
    image: burgerImg
  },
  {
    title: 'C&B Chicken',
    description: 'Pão de brioche, frango em tiras 150g, cheddar, maionese temperada.',
    price: 'R$ 27,00',
    category: ['hamburgers'],
    image: burgerImg
  },
  {
    title: 'C&B Chicken Bacon',
    description: 'Pão de brioche, frango em tiras 150g, bacon, cheddar, maionese temperada.',
    price: 'R$ 31,00',
    category: ['hamburgers'],
    image: burgerImg
  },
  {
    title: 'C&B Chicken Salad',
    description: 'Pão de brioche, frango em tiras 150g, alface, cebola roxa, tomate, cheddar, maionese.',
    price: 'R$ 29,00',
    category: ['hamburgers'],
    image: burgerImg
  },
  {
    title: 'C&B Classic',
    description: 'Pão de brioche, burger artesanal 150g, cheddar, maionese da casa.',
    price: 'R$ 30,00',
    category: ['hamburgers'],
    image: burgerImg
  },
  {
    title: 'C&B Double',
    description: 'Pão de brioche, 2 burgers artesanais 150g, cheddar, bacon e maionese de bacon.',
    price: 'R$ 49,00',
    category: ['hamburgers'],
    tag: 'Fome Grande',
    image: burgerImg
  },
  {
    title: 'C&B Mineiro',
    description: 'Pão de brioche, burger artesanal 150g, queijo meia cura, ovo, maionese de alho.',
    price: 'R$ 35,00',
    category: ['hamburgers'],
    image: burgerImg
  },
  {
    title: 'C&B Pickle',
    description: 'Pão de brioche, burger artesanal 150g, cheddar, picles, cebola roxa picada, maionese de picles.',
    price: 'R$ 32,00',
    category: ['hamburgers'],
    image: burgerImg
  },
  {
    title: 'C&B Salad',
    description: 'Pão de brioche, burger artesanal 150g, alface americana, cebola roxa, tomate, cheddar, maionese.',
    price: 'R$ 32,00',
    category: ['hamburgers'],
    image: burgerImg
  },
  {
    title: 'C&B Veggie Salad',
    description: 'Vegetariano: pão de brioche, burger do futuro 115g, cheddar, alface, cebola roxa, tomate.',
    price: 'R$ 35,00',
    category: ['hamburgers'],
    tag: 'Vegetariano',
    image: burgerImg
  },

  // --- HOT DOGS ---
  {
    title: 'C&B Dog Bacon',
    description: 'Pão de hot dog, salsicha, bacon, ketchup, maionese, mostarda e batata palha.',
    price: 'R$ 22,00',
    category: ['hotdogs'],
    image: pratoImg
  },
  {
    title: 'C&B Dog Classic',
    description: 'Pão de hot dog, salsicha, ketchup, mostarda, maionese, batata palha.',
    price: 'R$ 15,00',
    category: ['hotdogs'],
    image: pratoImg
  },
  {
    title: 'C&B Dog Mineiro',
    description: 'Pão de hot dog, salsicha, frango desfiado, milho verde, ketchup, mostarda, maionese, batata palha.',
    price: 'R$ 21,00',
    category: ['hotdogs'],
    image: pratoImg
  },

  // --- PORÇÕES ---
  {
    title: 'Chicken Sticks',
    description: 'Tiras de frango empanado e frito. (Escolha o tamanho)',
    price: 'A partir de R$ 32,00',
    category: ['porcoes'],
    image: pratoImg
  },
  {
    title: 'Fritas Clássica',
    description: 'Batata frita com tempero chimichurri e sal.',
    price: 'A partir de R$ 10,00',
    category: ['porcoes'],
    image: pratoImg
  },
  {
    title: 'Fritas c/ Bacon e Cheddar ou Muçarela',
    description: 'Batata frita com tempero chimichurri, sal, bacon e cobertura escolhida.',
    price: 'A partir de R$ 25,00',
    category: ['porcoes'],
    tag: 'Para Dividir',
    image: pratoImg
  },
  {
    title: 'Onion Rings',
    description: 'Porção de onion rings. (Escolha o tamanho)',
    price: 'A partir de R$ 20,00',
    category: ['porcoes'],
    image: pratoImg
  },
  {
    title: 'Porção Mista',
    description: 'Escolha 2 entre: fritas, onion rings e chicken sticks.',
    price: 'R$ 45,00',
    category: ['porcoes'],
    image: pratoImg
  },

  // --- MILKSHAKES ---
  {
    title: 'Milkshake Chocolate',
    description: 'Opção com base jurupinga ou leite.',
    price: 'R$ 27,00',
    category: ['milkshakes'],
    image: cafeGourmetImg
  },
  {
    title: 'Milkshake Doce de Leite',
    description: 'Opção com base jurupinga ou leite.',
    price: 'R$ 27,00',
    category: ['milkshakes'],
    image: cafeGourmetImg
  },
  {
    title: 'Milkshake Fini',
    description: 'Sorvete de creme, ninho e nutella (base jurupinga ou leite).',
    price: 'R$ 30,00',
    category: ['milkshakes'],
    image: cafeGourmetImg
  },
  {
    title: 'Milkshake Frutas Vermelhas',
    description: 'Opção com base jurupinga ou leite.',
    price: 'R$ 27,00',
    category: ['milkshakes'],
    image: cafeGourmetImg
  },
  {
    title: 'Milkshake Morango',
    description: 'Opção com base jurupinga ou leite.',
    price: 'R$ 27,00',
    category: ['milkshakes'],
    image: cafeGourmetImg
  },
  {
    title: 'Milkshake Ninho c/ Nutella',
    description: 'O sabor mais desejado.',
    price: 'R$ 30,00',
    category: ['milkshakes'],
    tag: 'Sobremesa Mestre',
    image: cafeGourmetImg
  },
  {
    title: 'Milkshake Ovomaltine',
    description: 'Crocância e sabor inconfundível.',
    price: 'R$ 30,00',
    category: ['milkshakes'],
    image: cafeGourmetImg
  },

  // --- REFRIGERANTES ---
  {
    title: 'Água Tônica Zero Schweppes 350 ML',
    price: 'R$ 6,00',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Coca-Cola 2L',
    price: 'R$ 14,90',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Coca-Cola 350ML',
    price: 'R$ 6,00',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Coca-Cola 600ML',
    price: 'R$ 8,00',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Coca-Cola Lata 220ML',
    price: 'R$ 4,00',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Coca-Cola Zero 350ML',
    price: 'R$ 6,00',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Coca-Cola Zero 600ML',
    price: 'R$ 8,02',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Coca-Cola Zero Lata 220ML',
    price: 'R$ 4,00',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Jaboti Maçã 250ML',
    price: 'R$ 2,98',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Jaboti Maçã 2L',
    price: 'R$ 9,30',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Jaboti Maçã 600ML',
    price: 'R$ 5,90',
    category: ['bebidas'],
    image: cafeGourmetImg
  },
  {
    title: 'Sprite 2L',
    price: 'R$ 13,00',
    category: ['bebidas'],
    image: cafeGourmetImg
  },

  // --- BEBIDAS ALCOÓLICAS ---
  {
    title: 'Cerveja Budweiser 350ML',
    price: 'R$ 8,60',
    category: ['bebidas'],
    image: cafeGourmetImg
  }
]

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'todos', label: 'Todos os Itens' },
  { key: 'marmitex', label: 'Marmitex (11h às 14h)' },
  { key: 'pratos', label: 'Pratos Executivos (11h às 14h)' },
  { key: 'hamburgers', label: 'Hamburgers' },
  { key: 'hotdogs', label: 'Hot Dogs' },
  { key: 'porcoes', label: 'Porções' },
  { key: 'milkshakes', label: 'Milk-shakes' },
  { key: 'bebidas', label: 'Bebidas' },
]

export default function Menu() {
  const [active, setActive] = useState<Category>('todos')
  const ref = useScrollReveal<HTMLElement>()

  const filtered = active === 'todos'
    ? ITEMS
    : ITEMS.filter((item) => item.category.includes(active))

  return (
    <section className="section" id="cardapio" ref={ref}>
      <div className="section__inner">
        <div className="menu__header" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <span className="eyebrow reveal">Nosso Cardápio Completo</span>
          <h2 className="reveal reveal-delay-1">
            Muito mais que café. A verdadeira gastronomia no seu dia.
          </h2>
          <div className="divider divider--center reveal reveal-delay-2" />
          <p className="reveal reveal-delay-2" style={{ margin: '0 auto', maxWidth: '700px' }}>
            Navegue por nossas opções de almoços executivos, lanches artesanais, porções para dividir e 
            nossos famosos milk-shakes.
          </p>
        </div>

        <div className="menu__categories reveal reveal-delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: 'var(--space-2xl)' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`menu__cat-btn ${active === cat.key ? 'menu__cat-btn--active' : ''}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              className={`menu__card reveal reveal-delay-${Math.min((i % 4) + 1, 4)}`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {item.tag && <span className="menu__card-tag">{item.tag}</span>}
              <motion.img
                src={item.image}
                alt={item.title}
                className="menu__card-img"
                loading="lazy"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              />
              <div className="menu__card-body" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '8px', flexDirection: 'column' }}>
                  <h4 className="menu__card-title" style={{ margin: 0 }}>{item.title}</h4>
                  <span style={{ fontWeight: 700, color: 'var(--cinnamon)', fontSize: '1.05rem', marginTop: '4px' }}>{item.price}</span>
                </div>
                {item.description && <p className="menu__card-desc">{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center reveal reveal-delay-4" style={{ marginTop: 'var(--space-3xl)' }}>
          <a
            href="https://g3food.com.br/canelacafe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            style={{ fontSize: '1.1rem', padding: '16px 40px' }}
          >
            Acessar Delivery & Pedir Agora
          </a>
        </div>
      </div>
    </section>
  )
}
