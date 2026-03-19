import { Route, Routes, Navigate } from 'react-router'
import MainLayout from './_layouts/MainLayout'
import LandingPage from './pages/LandingPage'
import CustomerPage from './pages/Customers/CustomerPage'
import PageNotFound from './pages/errors/PageNotFound'
import AdminLayout from './_layouts/AdminLayout'
import AdminInventory from './pages/Admin/AdminInventory/AdminInventory'
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard'
import ProductDetailsPage from './pages/Customers/products/ProductDetailsPage'
import MobileDevices from './pages/Customers/products/MobileDevices'
import CartPage from './pages/Customers/products/CartPage'
import Accesories from './pages/Customers/products/Accesories'
import DesktopPage from './pages/Customers/products/DesktopPage'
import LaptopPage from './pages/Customers/products/LaptopPage'
import AdminReviews from './pages/Admin/AdminReviews/AdminReviews'
import { useStateContext } from './context/AuthContext'
import Orders from './pages/Admin/AdminOrders/Orders'

const App = () => {
  const { user, token, authLoading } = useStateContext()

  const withMainLayout = (page) => <MainLayout>{page}</MainLayout>
  const withAdminLayout = (page) => <AdminLayout>{page}</AdminLayout>

  const isAdmin = user?.role === 'admin'

  const adminElement = (page) => {
    if (authLoading && token) return null
    if (!isAdmin) return <Navigate to="/" replace />
    return withAdminLayout(page)
  }

  const customeElement = (page) => {
    if (authLoading && token) return null
    if (!user || !token) return <Navigate to="/" replace />
    return withMainLayout(page)
  }
  return (
        <Routes>
          <Route path="/" element={withMainLayout(<LandingPage />)} />
          <Route path="/product/:id" element={withMainLayout(<ProductDetailsPage />)} />
          <Route path="/desktop" element={withMainLayout(<DesktopPage />)} />
          <Route path="/laptop" element={withMainLayout(<LaptopPage />)} />
          <Route path="/mobile" element={withMainLayout(<MobileDevices/>)} />
          <Route path="/accessories" element={withMainLayout(<Accesories />)} />
          <Route path="/MyCart" element={withMainLayout(<CartPage />)} />
          <Route
            path="/customerprofile"
            element={customeElement(<CustomerPage />)}
          />
          <Route path="/admin" element={adminElement(<AdminDashboard />)} />
          <Route path="/admin/inventory" element={adminElement(<AdminInventory/>)} />
          <Route path="/admin/reviews" element={adminElement(<AdminReviews/> )} />
          <Route path="/admin/orders" element={adminElement(<Orders /> )} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
  )
}

export default App
