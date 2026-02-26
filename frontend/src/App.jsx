import { Route, Routes, Navigate } from 'react-router'
import MainLayout from './_layouts/MainLayout'
import LandingPage from './pages/LandingPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import DesktopPage from './pages/DesktopPage'
import LaptopPage from './pages/LaptopPage'
import MobileDevices from './pages/MobileDevices'
import Accesories from './pages/Accesories'
import CartPage from './pages/CartPage'
import CustomerPage from './pages/Customers/CustomerPage'
import { useAuthContext } from './hooks/Auth/useAuthContext'
import PageNotFound from './pages/errors/PageNotFound'
import AdminLayout from './_layouts/AdminLayout'

const App = () => {
  const { user } = useAuthContext()
  const withMainLayout = (page) => <MainLayout>{page}</MainLayout>
  const withAdminLayout = (page) => <AdminLayout>{page}</AdminLayout>
  return (
        <Routes>
          <Route path="/" element={withMainLayout(<LandingPage />)} />
          <Route path="/product/:id" element={withMainLayout(<ProductDetailsPage />)} />
          <Route path="/desktop" element={withMainLayout(<DesktopPage />)} />
          <Route path="/laptop" element={withMainLayout(<LaptopPage />)} />
          <Route path="/mobile" element={withMainLayout(<MobileDevices />)} />
          <Route path="/accessories" element={withMainLayout(<Accesories />)} />
          <Route path="/MyCart" element={withMainLayout(<CartPage />)} />
          <Route path="/customerprofile" element={user ? withMainLayout(<CustomerPage />) : <Navigate to="/*" />} />
          <Route path="/admin" element={withAdminLayout(<h1>Admin Dashboard</h1>)} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
  )
}

export default App
