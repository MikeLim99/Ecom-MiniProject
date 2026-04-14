import Footer from "../components/semantics/Footer";
import TopBar from "../components/semantics/TopBar";

export default function MainLayout({ children }) {
  return (
    <div className="w-full h-screen font-display">
        <TopBar />
        {children}
        <Footer />
    </div>
  )
}