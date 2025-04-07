import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingEsportes } =
    useGetSportsGamesQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulacao } =
    useGetSimulationGamesQuery()
  const { data: gamesLuta, isLoading: isLoadingLuta } = useGetFightGamesQuery()
  const { data: gamesRpg, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesAcao}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAcao}
      />
      <ProductsList
        games={gamesEsportes}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingEsportes}
      />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulacao}
      />
      <ProductsList
        games={gamesLuta}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingLuta}
      />
      <ProductsList
        games={gamesRpg}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
