import { Route, Routes } from 'react-router-dom'
import ProductionPage from '../pages/ProductionPage'

function HomePage() {
  return (
    <main>
      <h1>Solar Training App</h1>
      <p>Your router is wired up and ready for the next page components.</p>
    </main>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/production" element={<ProductionPage />} />
    </Routes>
  )
}

export default AppRoutes
