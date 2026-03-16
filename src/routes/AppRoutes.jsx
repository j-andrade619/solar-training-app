import { Route, Routes } from 'react-router-dom'

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
    </Routes>
  )
}

export default AppRoutes
