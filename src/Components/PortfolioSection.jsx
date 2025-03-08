import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const PortfolioSection = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section
      className="py-5 mt-5 position-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="brand mb-5 text-center">Certifications</h2>
      <Row className="justify-content-center">
        {data
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((item, index) => (
            <Col
              md={4}
              key={index}
              className="portfolio-content position-relative overflow-hidden rounded"
            >
              <div className="portfolio-img">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid d-block w-100 h-auto"
                />
              </div>
              <div className="text-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center z-2">
                <div className="portfolio-description text-white">
                  <h2 className="fw-bold">{item.title}</h2>
                  <div className="brand py-2">{item.subheading}</div>
                  <p>{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
      </Row>

      {/* Navigation Buttons */}
      <button
        className={`carousel-control-prev rounded-circle border position-absolute ${
          isHovered ? "d-block" : "d-none"
        }`}
        type="button"
        style={{
          top: "60%",
          left: "-50px",
          zIndex: "2",
          width: "50px",
          height: "50px",
          transform: "translateY(-50%)",
        }}
        onClick={handlePrev}
      >
        <span aria-hidden="true">
          <i className="bi bi-arrow-left text-white fs-4"></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className={`carousel-control-next rounded-circle border position-absolute ${
          isHovered ? "d-block" : "d-none"
        }`}
        type="button"
        style={{
          top: "60%",
          right: "-50px",
          zIndex: "2",
          width: "50px",
          height: "50px",
          transform: "translateY(-50%)",
        }}
        onClick={handleNext}
      >
        <span aria-hidden="true">
          <i className="bi bi-arrow-right text-white fs-4"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default PortfolioSection;
