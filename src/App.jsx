import './App.css'
import { Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VansDetails from './pages/VansDetails'
import Layout from './components/Layout'

// Host Navi
import Income from './components/host/Income'
import Reviews from './components/host/Reviews'
import Dashboard from './components/host/Dashboard'
import HostLayout from './components/HostLayout'

function App() {
  return (
    <>
      <Routes>

        <Route element={ <Layout /> }>
          <Route index element={ <Home />} />
          <Route path="about" element={ <About />} />
          <Route path="vans" element={ <Vans />} />
          <Route path="vans/:productId" element={ <VansDetails />} />
          
          <Route path="host"  element={ <HostLayout />}> 
            <Route index element={ <Dashboard />} />         
            <Route path="income" element={ <Income />} />
            <Route path="reviews" element={ <Reviews />} />
          </Route>

        </Route>        
      </Routes>

      
    </>
  )
}

export default App
