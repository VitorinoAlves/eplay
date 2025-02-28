import Banner from '../../components/banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis sed delectus dolorum excepturi! Consectetur repellat unde quasi eaque velit laboriosam nemo debitis impedit officia beatae perferendis, ipsa magni neque.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis sed delectus dolorum excepturi! Consectetur repellat unde quasi eaque velit laboriosam nemo debitis impedit officia beatae perferendis, ipsa magni neque.',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis sed delectus dolorum excepturi! Consectetur repellat unde quasi eaque velit laboriosam nemo debitis impedit officia beatae perferendis, ipsa magni neque.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis sed delectus dolorum excepturi! Consectetur repellat unde quasi eaque velit laboriosam nemo debitis impedit officia beatae perferendis, ipsa magni neque.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis sed delectus dolorum excepturi! Consectetur repellat unde quasi eaque velit laboriosam nemo debitis impedit officia beatae perferendis, ipsa magni neque.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis sed delectus dolorum excepturi! Consectetur repellat unde quasi eaque velit laboriosam nemo debitis impedit officia beatae perferendis, ipsa magni neque.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis sed delectus dolorum excepturi! Consectetur repellat unde quasi eaque velit laboriosam nemo debitis impedit officia beatae perferendis, ipsa magni neque.',
    title: 'Zelda',
    system: 'Nintendo',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis sed delectus dolorum excepturi! Consectetur repellat unde quasi eaque velit laboriosam nemo debitis impedit officia beatae perferendis, ipsa magni neque.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
