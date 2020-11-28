import React from 'react';
import Thumbnail from './Thumbnail.js';
import axiom from '../images/axiom.png';

function Projects(props) {
  return (
    <div className="projects">
      <Thumbnail
        link="/axiom"
        image={axiom}
        title="Axiom"
      />
      <Thumbnail
        link="/axiom"
        image={axiom}
        title="Axiom"
      />
      <Thumbnail
        link="/axiom"
        image={axiom}
        title="Axiom"
      />
    </div>
  )
}

export default Projects;
