import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ButtonGlobal from "../Components/ButtonGlobal";
import Card from "../Components/Card";
import PortfolioSection from "../Components/PortfolioSection";
import ProjectCard from "../Components/ProjectCard";
import {
  education,
  achievments,
  certificationData,
  projectData,
  softSkills,
  techSkills,
} from "../Constants/Data";
import Profile from "../assets/frame.png";
import AboutImg from "../assets/profile.jpg";

export default function LandingPage() {
  const blogGroups = projectData.reduce((acc, blog, index) => {
    if (index % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(blog);
    return acc;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : blogGroups.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < blogGroups.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Divide soft skills
  const halfSoft = Math.ceil(softSkills.length / 2);
  const firstSoftColumn = softSkills.slice(0, halfSoft);
  const secondSoftColumn = softSkills.slice(halfSoft);

  // Divide tech skills
  const halfTech = Math.ceil(techSkills.length / 2);
  const firstTechColumn = techSkills.slice(0, halfTech);
  const secondTechColumn = techSkills.slice(halfTech);

  // Contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Regex patterns
  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageRegex = /^.{10,}$/;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    let error = "";
    if (name === "name" && !nameRegex.test(value)) {
      error = "Name must contain at least 3 letters.";
    } else if (name === "email" && !emailRegex.test(value)) {
      error = "Enter a valid email address.";
    } else if (name === "message" && !messageRegex.test(value)) {
      error = "Message must be at least 10 characters.";
    }

    setErrors({ ...errors, [name]: error });
  };

  // Validate all fields on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required.";
      }
    });

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) {
      alert("Please correct the errors before submitting.");
    } else {
      alert("Form submitted successfully!");
      console.log("Submitted Data:", formData);
    }
  };

  useEffect(() => {
    const createDots = () => {
      const dotsContainer = document.querySelector(".dots-bg");
      if (!dotsContainer) return;

      dotsContainer.innerHTML = "";

      const numberOfDots = window.innerWidth < 768 ? 50 : 100;

      for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        const delay = Math.random() * 5;

        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dot.style.animationDelay = `${delay}s`;

        dotsContainer.appendChild(dot);
      }
    };

    createDots();

    window.addEventListener("resize", createDots);

    return () => {
      window.removeEventListener("resize", createDots);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="container-fluid py-5 min-vh-100 d-flex align-items-center"
      >
        <div className="dots-bg overflow-hidden"></div>
        <div className="container mt-5 content-wrapper">
          <div className="row align-items-center">
            <div className="col-md-6">
              <button
                className="button m-0 h-auto p-0 border-0 bg-transparent fs-2 text-decoration-none position-relative text-uppercase"
                data-text="Awesome"
              >
                <span className="actual-text">
                  &nbsp;BAKEERATHAN KARTHIGAN&nbsp;
                </span>
                <span
                  aria-hidden="true"
                  className="hover-text position-absolute"
                >
                  &nbsp;KARTHIGAN&nbsp;
                </span>
              </button>

              <div className="loader fw-bold d-flex py-4">
                <p>I'm a</p>
                <div className="words position-relative overflow-hidden">
                  <span className="word d-block h-100 ms-2 brand">Student</span>
                  <span className="word d-block h-100 ms-2 brand">
                    Developer
                  </span>
                  <span className="word d-block h-100 ms-2 brand">Leader</span>
                  <span className="word d-block h-100 ms-2 brand">
                    Cordinator
                  </span>
                  <span className="word d-block h-100 ms-2 brand">Leader</span>
                </div>
              </div>

              <p className="text-white">
                Find the best rooms near your university with **StayNearU**. We
                provide a seamless experience to connect students with the best
                accommodation options.
              </p>

              <ul className="list-unstyled d-flex flex-wrap gap-3 align-items-center py-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/bakeerathan-karthigan-529a56256/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none social-icon"
                  >
                    <i className="bi bi-linkedin fs-4"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0424955982"
                    className="text-decoration-none social-icon"
                  >
                    <i className="bi bi-telephone-fill fs-4"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:urbanview@urbanviewre.com"
                    className="text-decoration-none social-icon"
                  >
                    <i className="bi bi-envelope-fill fs-4"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 text-center">
              <img
                src={Profile}
                alt="StayNearU"
                className="img-fluid rounded float-animation"
                style={{ height: "400px", width: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <Container>
        {/* About Me */}
        {/* <section id="about" className="py-5">
          <h2 className="brand text-center mb-5">About Me</h2>
          <div className="row text-white">
            <p className="text-center text-md-start">
              A motivated and detail-oriented student with a strong academic
              foundation in Combined Mathematics, Physics, and Chemistry,
              achieving a Z-score of 1.8358, with a district rank of 87 and an
              island rank of 1472. Possessing excellent analytical and
              problem-solving skills, with a passion for science and technology.
              Proven ability to manage time effectively and thrive in both
              independent and team-based settings. Interested in pursuing a
              degree in computer science and eager to contribute knowledge and
              skills to real world challenges.
            </p>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="profile-cards">
                <figure className="img-card position-relative rounded">
                  <img
                    src={AboutImg}
                    alt="profile"
                    className="img-fluid rounded card_title"
                    style={{ height: "250px", width: "250px" }}
                  />{" "}
                </figure>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column lh-lg justify-content-center align-items-center align-items-md-start">
              <h6 className="brand">Personal Details</h6>
              <span>
                <strong>Full Name:</strong> Bakeerthan Karthigan
              </span>
              <span>
                <strong>Date of Birth:</strong> March 3rd 2003
              </span>
              <span>
                <strong>Nationality:</strong> Sri Lankan
              </span>
              <span>
                <strong>City:</strong> Jaffna
              </span>
              <span>
                <strong>Phone Number:</strong> +94740778329
              </span>
              <span>
                <strong>Email:</strong> bakeekarthigan@gmail.com
              </span>
            </div>
          </div>
          <div className="row pt-5 text-white">
            <h5 className="brand pb-3">Soft Skills</h5>
            <div className="col-md-6">
              <ul className="list-unstyled">
                {firstSoftColumn.map((skill, index) => (
                  <li key={index}>
                    <i className="bi bi-diamond-fill brand me-2 lh-lg"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                {secondSoftColumn.map((skill, index) => (
                  <li key={index}>
                    <i className="bi bi-diamond-fill brand me-2 lh-lg"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row pt-5 text-white">
            <h5 className="brand pb-3">Tech Skills</h5>
            <div className="col-md-6">
              <ul className="list-unstyled">
                {firstTechColumn.map((skill, index) => (
                  <li key={index}>
                    <i className="bi bi-diamond-fill brand me-2 lh-lg"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                {secondTechColumn.map((skill, index) => (
                  <li key={index}>
                    <i className="bi bi-diamond-fill brand me-2 lh-lg"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section> */}

        {/* Education */}
        {/* <section className="py-5 text-center" id="education">
          <h2 className="brand text-center mb-5">Education</h2>
          <div className="row">
            {education.map((education, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="d-flex align-items-start text-white">
                  <i
                    className="bi bi-book brand fs-2 m-4"
                    aria-hidden="true"
                  ></i>
                  <div className="text-white text-start">
                    <h5 className="mb-2">{education.title}</h5>
                    <p className="mb-2">{education.field}</p>
                    <p className="mb-2">{education.institude}</p>
                    <span>{education.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Achievments Section */}
        {/* <section className="py-5" id="achievements">
          <h2 className="brand mb-5 text-center">Achievments</h2>
          <div className="row">
            {achievments.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section> */}

        {/* Certifications */}
        {/* <PortfolioSection data={certificationData} id="achievements" /> */}

        {/* Projects */}
        {/* <section id="projects">
          <div
            className="carousel slide py-5 position-relative"
            data-bs-ride="carousel"
            data-bs-interval="10000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h2 className="brand mb-5 text-center">Projects</h2>
            <div className="carousel-inner">
              {blogGroups.map((group, groupIndex) => (
                <div
                  className={`carousel-item ${
                    groupIndex === 0 ? "active" : ""
                  }`}
                  key={groupIndex}
                >
                  <div className="row justify-content-center text-center">
                    {group.map((blog, blogIndex) => (
                      <div className="col-md-4 mb-4" key={blogIndex}>
                        <ProjectCard {...blog} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact">
          <div className="card border-0 bg-dark rounded-0 shadow p-5">
            <h3 className="fw-bold brand border-start border-4 border-danger ps-3">
              Get in touch
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="row g-3 mt-3">
                <div className="col-md-6 position-relative pb-3">
                  <input
                    type="text"
                    name="name"
                    className={`form-control border rounded-0 py-3 ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <i className="bi bi-person-fill position-absolute end-0 top-50 translate-middle-y pe-4 brand"></i>
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="col-md-6 position-relative pb-3">
                  <input
                    type="email"
                    name="email"
                    className={`form-control border rounded-0 py-3 ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <i className="bi bi-envelope-fill position-absolute end-0 top-50 translate-middle-y pe-4 brand"></i>
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="col-12 position-relative pb-3">
                  <textarea
                    name="message"
                    className={`form-control border rounded-0 py-3 ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    rows="3"
                    placeholder="Enter message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <i className="bi bi-pencil-fill position-absolute end-0 top-0 mt-3 pe-4 brand"></i>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <div className="col-12">
                  <ButtonGlobal text="Submit" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </Container>
    </>
  );
}
