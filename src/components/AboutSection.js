import React from 'react'

const AboutSection = () => {
  return (
    <section className="about-section section"
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-once="true">
      <h2 className="section-header">About us</h2>
      <div className="section-content">
        <p>As a company, we provide several benefits to customers, including saving time, cost and the hassle of traveling to Dubai for purchases. We have a competitive advantage through their domain expertise in negotiation, purchasing, and supply, as well as the ability to reach more customers through digital advertisements.</p>

        <p>Additionally, we have physical stores in every African country we serve, ensuring transparency and eliminating concerns about online scams.</p>
      </div>
    </section>
  )
}

export default React.memo(AboutSection)