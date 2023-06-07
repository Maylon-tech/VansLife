import './App.css'
import { Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'

import About from './pages/About'
import Vans from './pages/Vans'
import Footer from './components/Footer'
import VansDetails from './pages/VansDetails'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>

        <Route element={ <Layout /> }>
          <Route path="/vans/:productId" element={ <VansDetails />} />
          <Route path="/vans" element={ <Vans />} />
          <Route path="/about" element={ <About />} />
          <Route path="/" element={ <Home />} />
        </Route>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
