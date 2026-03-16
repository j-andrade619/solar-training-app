import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardHomePage from '../Components/pages/DashboardHomePage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardHomePage />} />
    </Routes>
  )
}

export default AppRoutes
