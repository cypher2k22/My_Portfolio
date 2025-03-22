import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ButtonGlobal from "../Components/ButtonGlobal";
import Card from "../Components/Card";
import CertificateSection from "../Components/CertificateSection";
import ProjectCard from "../Components/ProjectCard";
import SkillCard from "../Components/SkillCard";
import {
  education,
  achievments,
  certificationData,
  projectData,
  softSkills,
  techSkills,
} from "../Constants/Data";
import Profile from "../assets/Frame.png";
import AboutImg from "../assets/profile.jpg";
import {
  Figma,
  Frame,
  Image as ImageIcon,
  Globe2,
  Box,
  FileCode2,
  Phone as Python,
  Gem,
} from "lucide-react";

export default function LandingPage() {
  const projectGroups = projectData.reduce((acc, blog, index) => {
    if (index % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(blog);
    return acc;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projectData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projectData.length - 1 ? prevIndex + 1 : 0
    );
  };

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

  // Tabs
  const [activeTab, setActiveTab] = useState("Date of birth");

  // Define content for each tab
  const tabContent = {
    "Date of birth": "March 23rd 2003",
    Nationality: "Sri Lankan",
    City: "Jaffna",
    "Phone Number": "+94 74 077 8329",
    Email: "bakeekarthigan@gmail.com",
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="container-fluid py-5 min-vh-100 d-flex align-items-center hero"
      >
        <div className="dots-bg overflow-hidden"></div>
        <div className="container mt-5 content-wrapper">
          <div className="row align-items-center">
            <div className="col-md-5">
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
                A motivated and detail-oriented student with a strong academic
                foundation in Combined Mathematics, Physics, and Chemistry.
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

            <div className="col-md-7 d-flex align-items-bottom">
              <img
                src={Profile}
                alt="StayNearU"
                className="img-fluid rounded float-animation"
              />
            </div>
          </div>
        </div>
      </section>

      <Container>
        {/* About Me */}
        <section id="about" className="pb-5">
          <div className="row pb-5 align-items-center">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="profile-image-container mb-5 col-md-6">
                <img
                  src={AboutImg}
                  alt="Profile"
                  className="profile-image img-fluid"
                />
                <div className="image-border"></div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="brand">About Me</h2>
              <p className="text-white mb-4">
                A motivated and detail-oriented student with a strong academic
                foundation in Combined Mathematics, Physics, and Chemistry,
                achieving a Z-score of 1.8358, with a district rank of 87 and an
                island rank of 1472.
              </p>
              <p className="text-white mb-5">
                Possessing excellent analytical and problem-solving skills, with
                a passion for science and technology. Proven ability to manage
                time effectively and thrive in both independent and team-based
                settings. Interested in pursuing a degree in computer science
                and eager to contribute knowledge and skills to real world
                challenges.
              </p>
              <div className="d-flex">
                <ButtonGlobal text="Hire Me" />
              </div>
            </div>
          </div>

          <div
            className="row py-4 mt-5 justify-content-center rounded"
            style={{ background: "#000" }}
          >
            <div className="col-md-7 d-flex flex-wrap justify-content-center gap-3 text-white">
              {Object.keys(tabContent).map((tab) => (
                <span
                  key={tab}
                  className={`tab-item py-2 px-3 ${
                    activeTab === tab ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                  style={{ minWidth: "100px", textAlign: "center" }}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="tab-content text-center text-white mt-4">
              {tabContent[activeTab]}
            </div>
          </div>

          <div className="row py-5 text-white">
            <div className="col-md-8">
              <div className="row gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="col-auto pills text-white text-uppercase fw-bold border-0"
                  >
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 my-5">
              <h2 className="display-5 fw-bold mb-3 brand">Soft Skills</h2>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-4 mb-5">
              <h2 className="display-5 fw-bold mb-3 brand">
                Tech Skills & Experience
              </h2>
              <p className="text-secondary col-md-8 mb-4">
                Explore my technical expertise and professional skills that I've
                developed through years of practice and real-world applications.
              </p>
              <ButtonGlobal text="More" />
            </div>

            <div className="col-md-8">
              <div className="row g-3">
                {techSkills.map((skill, index) => (
                  <div key={index} className="col-6 col-md-3">
                    <SkillCard
                      name={skill.name}
                      icon={skill.icon}
                      proficiency={skill.proficiency}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-5 text-center" id="education">
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
        </section>

        {/* Achievments Section */}
        <section className="py-5" id="achievements">
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
        </section>

        <CertificateSection data={certificationData} id="achievements" />

        {/* <section id="projects">
          <div
            className="carousel slide py-5 position-relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h2 className="brand mb-5 text-center">Projects</h2>
            <div className="carousel-inner">
              <div className="row justify-content-center text-center">
                {projectData
                  .slice(
                    currentIndex,
                    currentIndex + (window.innerWidth < 768 ? 1 : 3)
                  ) // Show 1 card on mobile, 3 on desktop
                  .map((blog, index) => (
                    <div className="col-md-4 col-12 mb-4" key={index}>
                      <ProjectCard {...blog} />
                    </div>
                  ))}
              </div>
            </div>

            <button
              className={`carousel-control-prev rounded-circle border position-absolute ${
                isHovered ? "d-block" : "d-none"
              }`}
              type="button"
              style={{
                top: "50%",
                zIndex: "2",
                width: "50px",
                height: "50px",
                transform: "translateY(-50%)",
              }}
              onClick={handlePrev}
            >
              <i className="bi bi-arrow-left text-white fs-4"></i>
            </button>

            <button
              className={`carousel-control-next rounded-circle border position-absolute ${
                isHovered ? "d-block" : "d-none"
              }`}
              type="button"
              style={{
                top: "50%",
                zIndex: "2",
                width: "50px",
                height: "50px",
                transform: "translateY(-50%)",
              }}
              onClick={handleNext}
            >
              <i className="bi bi-arrow-right text-white fs-4"></i>
            </button>
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
