import React from "react";

export default function Card({ title, description }) {
  return (
    <div className="col-md-4 d-flex mb-3">
      <div className="card custom-card p-4 h-100 d-flex flex-column"> 
        <div className="card-body text-start flex-grow-1">
          <i className="bi bi-award brand fs-2 mb-3" aria-hidden="true"></i>
          <h5 className="card-title text-white fw-bold">{title}</h5>
          <p className="card-text text-white small">{description}</p>
        </div>
      </div>
    </div>
  );
}
