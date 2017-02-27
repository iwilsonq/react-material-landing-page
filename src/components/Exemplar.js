import React from 'react';
import sprintboard from '../img/sprintboard.png';

const Exemplar = () => {
  return (
    <section id="examplar ">
      <div className="container">
        <div className="row">
          <div className="col l1"></div>
          <div className="col l10 center-align">
            <h1>Modern Custom Websites</h1>
            <p>We use a modern technology stack to build fast, responsive, single page web applications.</p>
            <img className="responsive-img" src={sprintboard} />
          </div>
          <div className="col l1"></div>
        </div>
      </div>
    </section>
  );
};

export default Exemplar;
