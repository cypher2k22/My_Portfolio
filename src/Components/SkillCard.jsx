import React from "react";
import PropTypes from "prop-types";

export default function SkillCard ({ name, icon }) {
  return (
    <div className="skill-card rounded-3 p-4 text-center rounded">
      <div className="icon-container brand mb-3">{icon}</div>
      <h3 className="text-white fs-5 mb-3">{name}</h3>
    </div>
  );
};

// PropTypes validation
SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};