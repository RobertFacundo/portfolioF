import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import ProjectsView from "./views/ProjectsView"
import NavBar from "./components/NavBar"
import AboutView from "./views/AboutView"
import CertificationsView from "./views/CertificationsView"
import TechnicalChallengesView from './views/TechnicalChallengesView.jsx'
import Footer from "./components/Footer"
import './i18n/i18n';
import GlobalStyle from "./styles/GlobalStyles";
import useAnalytics from "./hooks/useAnalytics"

function App() {
  const { increment, logVisit } = useAnalytics('portfolio-views', 'portfolio');

  useEffect(() => {
    increment();
    logVisit();
  }, [])

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<ProjectsView />} />
        <Route path="/About" element={<AboutView />} />
        <Route path="/Certifications" element={<CertificationsView />} />
        <Route path="/technicalChallenges" element={<TechnicalChallengesView />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
