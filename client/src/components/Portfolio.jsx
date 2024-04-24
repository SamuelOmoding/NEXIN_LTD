import React from 'react';

const Portfolio = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    fontSize: '16px',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const headingStyle = {
    marginBottom: '10px',
    color: '#333',
  };

  const listStyle = {
    marginLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1>Nexin Ltd. Portfolio Overview</h1>
      <section style={sectionStyle}>
        <h2>Company Name: Nexin Ltd.</h2>
        <h2>Industry: Construction</h2>
      </section>
      <section style={sectionStyle}>
        <h3>Overview:</h3>
        <p>
          Nexin Ltd. is a leading construction company specializing in residential and commercial projects. With a strong focus on quality, innovation, and sustainability, Nexin has established a reputation for delivering exceptional construction solutions.
        </p>
      </section>
      <section style={sectionStyle}>
        <h3>Key Services:</h3>
        <ul style={listStyle}>
          <li>Residential Construction: Nexin offers comprehensive residential construction services, including custom home builds, renovations, and remodeling.</li>
          <li>Commercial Construction: Nexin undertakes commercial construction projects, including office buildings, retail spaces, and industrial facilities.</li>
          <li>Project Management: Nexin provides expert project management services, ensuring projects are completed on time, within budget, and to the highest standards.</li>
          <li>Design-Build: Nexin offers design-build services, streamlining the construction process and ensuring seamless collaboration between designers and builders.</li>
        </ul>
      </section>
      <section style={sectionStyle}>
        <h3>Projects:</h3>
        <ul style={listStyle}>
          <li>Residential Towers: Nexin has completed several high-rise residential towers, known for their innovative designs and luxurious amenities.</li>
          <li>Commercial Complexes: Nexin has constructed modern commercial complexes, incorporating sustainable design principles and advanced technology.</li>
          <li>Renovations and Restorations: Nexin has restored and renovated historic buildings, preserving their architectural heritage while enhancing functionality.</li>
        </ul>
      </section>
      <section style={sectionStyle}>
        <h3>Commitment to Sustainability:</h3>
        <p>
          Nexin is committed to sustainability and green building practices. The company integrates energy-efficient technologies and environmentally friendly materials into its projects, reducing environmental impact and lowering operating costs for clients.
        </p>
      </section>
      <section style={sectionStyle}>
        <h3>Clientele:</h3>
        <p>
          Nexin's clientele includes individuals, corporations, and government agencies seeking high-quality construction solutions. The company has a track record of delivering projects that exceed client expectations.
        </p>
      </section>
      <section style={sectionStyle}>
        <h3>Future Growth:</h3>
        <p>
          Nexin is poised for future growth, with plans to expand its operations and portfolio. The company continues to innovate and adapt to meet the evolving needs of the construction industry.
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
