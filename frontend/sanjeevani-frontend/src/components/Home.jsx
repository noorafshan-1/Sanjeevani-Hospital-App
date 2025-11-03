import React from "react";


const Home = () => {
    return (
      <section id="home" className="d-flex align-items-center py-5" style={{ minHeight: "90vh" }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold text-primary">Your Health, Our Priority</h1>
          <p className="lead mt-3">World class healthcare. Caring is our passion.</p>
          <a href="#contact" className="btn btn-primary btn-lg mt-4">Book Appointment</a>
        </div>
      </section>
    );
  };
  export default Home;
  