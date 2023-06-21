import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const HeroSection = () => {
  return (
    <section className="section">
      <div className="hero">
        <div className="hero-content">
          <p className="hero-text-heading">
            We Assist Customers in Buying Cars, Engines and Furniture.
          </p>
          <p className="hero-text-subheading">
            We help customers save time, cost and the hassle of traveling to Dubai to make purchases.
          </p>
          <button className="btn-primary btn-with-icon btn">
            <BsWhatsapp />
            <a href="https://wa.me/+971569067492" target="_blank" rel="noreferrer">Send us a message</a>
          </button>
        </div>
        <div className="hero-overlay"></div>
      </div>
    </section>
  )
}

export default React.memo(HeroSection)