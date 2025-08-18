
import './App.css'
import { useState } from "react";
import Navbar from './Components/Navbar';

function App() {
  

  return (
    <div className="font-sans">
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Hero Section ===== */}
      {/* <div className="hero min-h-[80vh] bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/hero-img.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hero"
          />
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Find Your Next Space — <br />
              Modern, Elegant, Effortless.
            </h1>
            <p className="py-6">
              Search properties, explore listings, and find your dream space with confidence.
            </p>
            <div className="flex gap-2">
              <button className="btn btn-primary">Search Now</button>
              <button className="btn btn-outline btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* ===== Features Section ===== */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 text-center">
        <div className="p-4 bg-base-200 rounded-lg">🏠 Buy Property</div>
        <div className="p-4 bg-base-200 rounded-lg">🏢 Rent Property</div>
        <div className="p-4 bg-base-200 rounded-lg">💼 Commercial</div>
        <div className="p-4 bg-base-200 rounded-lg">🌍 International</div>
      </div> */}

      {/* ===== About Section ===== */}
      {/* <div className="p-10 grid lg:grid-cols-2 gap-10 items-center">
        <img src="/about-img.png" className="rounded-lg shadow-lg" alt="About" />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Arambo</h2>
          <p className="text-lg leading-relaxed">
            At Arambo, we believe that your spaces should reflect your lifestyle. 
            From curated residential properties to commercial solutions, we help 
            you find a place you can truly call home or grow your business.
          </p>
          <div className="mt-6 flex gap-6">
            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p>Properties Listed</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">200+</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* ===== Latest Properties ===== */}
      {/* <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Explore Latest Properties to Buy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="card bg-base-100 shadow-xl">
              <figure>
                <img src="/property.jpg" alt="Property" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Property {i+1}</h2>
                <p>$140,000</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

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
