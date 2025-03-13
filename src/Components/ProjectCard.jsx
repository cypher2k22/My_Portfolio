import React from "react";

export default function ProjectCard({
  image,
  category,
  title,
  description,
  url,
}) {
  return (
    <div className="card custom-card bg-dark text-light border-0 mb-4">
      <div className="card-body text-start">
        <img src={image} className="card-img-top rounded mb-3" alt={title} />
        <span className="brand fw-bold">{category}</span>
        <h4 className="card-title fw-bold py-2">{title}</h4>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="text-truncate">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                URL
              </a>
            </div>
            <div className="brand fs-4 ms-3">
              <i className="bi bi-arrow-down-right-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
