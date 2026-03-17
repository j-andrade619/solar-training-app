import { Route, Routes } from 'react-router-dom'
import AssessmentFormPage from '../pages/AssessmentFormPage'
import PhotoCapturePage from '../pages/PhotoCapturePage'
import SiteEvalHomePage from '../pages/SiteEvalHomePage'
import AssessmentSummaryPage from '../pages/AssessmentSummaryPage'

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
      <Route path="/site-eval" element={<SiteEvalHomePage />} />
      <Route path="/site-eval/form" element={<AssessmentFormPage />} />
      <Route path="/site-eval/photos" element={<PhotoCapturePage />} />
      <Route path="/site-eval/summary" element={<AssessmentSummaryPage />} />
    </Routes>
  )
}

export default AppRoutes
