import './App.css'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import SponsorLogos from './Components/SponsorLogos';
import About from './Components/About';
import SimpleSteps from './Components/SimpleSteps';
import PropertyListing from './Components/PropertyListing';

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
      {/* <div className="p-10 grid lg:grid-cols-2 gap-10 items-center">
        <img src="/tenants.jpg" className="rounded-lg shadow-lg" alt="Tenants" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Screen Tenants with Confidence</h2>
          <p className="text-lg leading-relaxed">
            Our advanced tenant screening helps landlords find trustworthy tenants.
          </p>
          <button className="btn btn-primary mt-4">Get Started</button>
        </div>
      </div> */}

      {/* ===== Legal Support ===== */}
      {/* <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">Expert Legal Support When You Need It</h2>
        <p className="mt-2">Our experts provide legal advice for property transactions.</p>
        <button className="btn btn-primary mt-4">Learn More</button>
      </div> */}

      {/* ===== Moving Services ===== */}
      {/* <div className="p-10 text-center bg-base-200">
        <h2 className="text-3xl font-bold">Move In. Settle In. Live Well.</h2>
        <img src="/moving.jpg" className="mx-auto my-6 rounded-lg shadow-lg" alt="Moving" />
        <p>Trusted moving partners at your service.</p>
      </div> */}

      {/* ===== Experts Section ===== */}
      {/* <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Local Experts. Real Guidance.</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className="card bg-base-100 shadow-md">
              <figure><img src="/agent.jpg" alt="Agent" /></figure>
              <div className="card-body text-center">
                <h3 className="font-bold">Agent {i+1}</h3>
                <p>Real Estate Expert</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* ===== Testimonials ===== */}
      {/* <div className="p-10 bg-base-200">
        <h2 className="text-3xl font-bold text-center mb-6">Trusted by Satisfied Customers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="card bg-base-100 shadow-md p-4">
              <p>
                "Arambo made the process smooth and easy. I found my dream home quickly!"
              </p>
              <h3 className="mt-4 font-bold">Customer {i+1}</h3>
            </div>
          ))}
        </div>
      </div> */}

      {/* ===== Media Coverage ===== */}
      {/* <div className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">As Seen In</h2>
        <div className="flex justify-center gap-10">
          <span className="text-xl font-semibold">Daily Star</span>
          <span className="text-xl font-semibold">Prothom Alo</span>
          <span className="text-xl font-semibold">NTV</span>
        </div>
      </div> */}

      {/* ===== CTA Section ===== */}
      {/* <div className="hero min-h-[60vh] bg-gradient-to-r from-blue-800 to-blue-500 text-white">
        <div className="hero-content text-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Ready to Move Forward?</h2>
            <button className="btn btn-primary">Get in Touch</button>
          </div>
        </div>
      </div> */}

      {/* ===== Footer ===== */}
      {/* <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <p>
            🏠 Arambo <br />
            Providing reliable real estate solutions since 2025
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Buy</a>
          <a className="link link-hover">Rent</a>
          <a className="link link-hover">Legal</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer> */}
    </div>
  )
}

export default App
