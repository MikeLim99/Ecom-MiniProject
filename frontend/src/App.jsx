import { Route, Routes } from 'react-router'
import MainLayout from './_layouts/MainLayout'
import LandingPage from './pages/LandingPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import DesktopPage from './pages/DesktopPage'
import LaptopPage from './pages/LaptopPage'
import MobileDevices from './pages/MobileDevices'
import Accesories from './pages/Accesories'
import CartPage from './pages/CartPage'

const App = () => {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/desktop" element={<DesktopPage />} />
        <Route path="/laptop" element={<LaptopPage />} />
        <Route path="/mobile" element={<MobileDevices />} />
        <Route path="/accessories" element={<Accesories />} />
        <Route path="/MyCart" element={<CartPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App
