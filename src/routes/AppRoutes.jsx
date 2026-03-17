import { Navigate, Route, Routes } from 'react-router-dom'
import AssessmentFormPage from '../pages/AssessmentFormPage'
import PhotoCapturePage from '../pages/PhotoCapturePage'
import SiteEvalHomePage from '../pages/SiteEvalHomePage'
import AssessmentSummaryPage from '../pages/AssessmentSummaryPage'
import DashboardHomePage from '../pages/DashboardHomePage'
import ProductionPage from '../pages/ProductionPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardHomePage />} />
      <Route path="/production" element={<ProductionPage />} />
      <Route path="/site-eval" element={<SiteEvalHomePage />} />
      <Route path="/site-eval/form" element={<AssessmentFormPage />} />
      <Route path="/site-eval/photos" element={<PhotoCapturePage />} />
      <Route path="/site-eval/summary" element={<AssessmentSummaryPage />} />
    </Routes>
  )
}

export default AppRoutes
