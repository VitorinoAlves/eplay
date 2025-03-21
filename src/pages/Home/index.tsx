import Banner from '../../components/banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import { useEffect, useState } from 'react'

/*const promocoes: Game[] = [
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
]*/

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
