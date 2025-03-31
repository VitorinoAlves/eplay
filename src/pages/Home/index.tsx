import Banner from '../../components/banner'
import ProductsList from '../../components/ProductsList'
import { useEffect, useState } from 'react'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

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
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={soonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }

  return <h4>Caregando...</h4>
}

export default Home
