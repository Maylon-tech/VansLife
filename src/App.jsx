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
import HostVans from './components/host/HostVans'
import HostVansDetail from './components/host/HostVansDetail'

import Detail from './components/host/HostVansDetail/Detail'
import Pricing from './components/host/HostVansDetail/Pricing'
import Photos from './components/host/HostVansDetail/Photos'

function App() {
  return (
    <>
      <Routes>

        <Route element={ <Layout /> }>
          <Route index element={ <Home />} />
          <Route path="about" element={ <About />} />
          <Route path="vans" element={ <Vans />} />
          <Route path="vans/:vanId" element={ <VansDetails />} />
          
          <Route path="host"  element={ <HostLayout />}> 
          
            <Route index element={ <Dashboard />} />      {/* index porque ja comecao com dashboard */}   
            <Route path="income" element={ <Income />} />
            <Route path="reviews" element={ <Reviews />} />
            <Route path="vans" element={ <HostVans />} />
            <Route path="vans/:id" element={ <HostVansDetail />}>
              <Route index  element={ <Detail /> } />
              <Route path="pricing"  element={ <Pricing /> } />
              <Route path="photos"  element={ <Photos /> } />
            </Route>
          </Route>

        </Route>        
      </Routes>

      
    </>
  )
}

export default App
