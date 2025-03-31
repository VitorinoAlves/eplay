import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetSportsGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesRpg } = useGetRpgGamesQuery()

  if (gamesAcao && gamesEsportes && gamesSimulacao && gamesLuta && gamesRpg) {
    return (
      <>
        <ProductsList
          games={gamesAcao}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={gamesLuta}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={gamesRpg}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }

  return <h4>Caregando...</h4>
}

export default Categories
