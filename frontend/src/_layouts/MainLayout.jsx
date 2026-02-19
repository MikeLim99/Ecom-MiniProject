import Footer from "../component/semantics/Footer";
import TopBar from "../component/semantics/TopBar";

export default function MainLayout({ children }) {
  return (
    <div className="w-full h-screen font-display">
        <TopBar />
        {children}
        <Footer />
    </div>
  )
}