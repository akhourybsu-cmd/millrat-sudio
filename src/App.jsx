import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/studio/Header'
import { Footer } from './components/studio/Footer'
import { ScrollToTop } from './components/studio/ScrollToTop'
import HomePage from './pages/home/index'
import MillratPackPage from './pages/millrat-pack/index'
import AboutPage from './pages/about/index'
import ContactPage from './pages/contact/index'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/millrat-pack" element={<MillratPackPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
