import './App.css'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import SponsorLogos from './Components/SponsorLogos';
import About from './Components/About';
import SimpleSteps from './Components/SimpleSteps';
import PropertyListing from './Components/PropertyListing';
import TenantScreening from './Components/TenantScreening';
import LegalSupport from './Components/LegalSupport';
import ListFiltering from './Components/ListFiltering';
import MovingServices from './Components/MovingServices';
import LocalExperts from './Components/LocalExperts';
import Worth from './Components/Worth';
import TestimonialsSection from './Components/Testimonials';
import MediaCoverage from './Components/MediaCoverage';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="font-sans">
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Hero Section ===== */}
      <Banner />

      {/* ===== Hero Section ===== */}
      <SponsorLogos />

      {/* ===== About Section ===== */}
      <About />

      {/* ===== Simple Steps Section ===== */}
      <SimpleSteps />

      {/* ===== Latest Properties ===== */}
      <PropertyListing />

      {/* ===== Tenants Section ===== */}
      <TenantScreening />

      {/* ===== Legal Support ===== */}
      <LegalSupport />

      {/* ===== Filtering Section ===== */}
      <ListFiltering />

      {/* ===== Moving Services ===== */}
      <MovingServices />

      {/* ===== Experts Section ===== */}
      <LocalExperts />

      {/* ===== Properties Worth ===== */}
      <Worth />

      {/* ===== Testimonials ===== */}
      <TestimonialsSection />

      {/* ===== Media Coverage ===== */}
      <MediaCoverage />

      {/* ===== Footer ===== */}
      <Footer />

    </div>
  )
}

export default App
