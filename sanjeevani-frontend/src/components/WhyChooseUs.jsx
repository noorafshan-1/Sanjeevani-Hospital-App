import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserMd, FaHospital, FaAmbulance, FaHeartbeat } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f8fcff" }}>
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#0081CE" }}>
          Why Choose <span style={{ color: "#003E7E" }}>Our Hospital?</span>
        </h2>
        <p className="text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto", color:"#555" }}>
          We are committed to providing high-quality healthcare services with advanced medical facilities
          and experienced medical professionals.
        </p>

        <Row className="g-4 text-center">
          <Col md={3} sm={6}>
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <FaUserMd size={45} className="mb-3" color="#0081CE" />
              <h5 className="fw-bold">Qualified Doctors</h5>
              <p className="text-muted small">
                Our team consists of highly skilled and experienced healthcare professionals.
              </p>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <FaHospital size={45} className="mb-3" color="#0081CE" />
              <h5 className="fw-bold">Modern Facilities</h5>
              <p className="text-muted small">
                Equipped with the latest medical technology for accurate and quick treatment.
              </p>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <FaAmbulance size={45} className="mb-3" color="#0081CE" />
              <h5 className="fw-bold">24/7 Emergency</h5>
              <p className="text-muted small">
                Emergency services available round the clock with quick response support.
              </p>
            </div>
          </Col>

          <Col md={3} sm={6}>
            <div className="p-4 shadow-sm bg-white rounded h-100">
              <FaHeartbeat size={45} className="mb-3" color="#0081CE" />
              <h5 className="fw-bold">Patient-Centered Care</h5>
              <p className="text-muted small">
                We prioritize compassion, respect, and personalized patient care.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
