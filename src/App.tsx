import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/banner'
import Header from './components/header'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
