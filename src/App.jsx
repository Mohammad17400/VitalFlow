import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'

const pages = {
  home: Home,
  services: Services,
  doctors: Doctors,
  contact: Contact,
}

export default function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [page])

  const Page = pages[page]

  return (
    <div className="min-h-screen bg-white text-slate-600 antialiased overflow-x-hidden">
      <Navbar page={page} setPage={setPage} />
      <main key={page} className="page-enter">
        <Page setPage={setPage} />
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}
