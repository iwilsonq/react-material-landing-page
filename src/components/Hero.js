import React from 'react';
import meadow from '../img/meadow.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="blue lighten-4"
      style={{ backgroundImage: 'url(' + meadow + ')'}}
    >
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <p className="flowtext hide-on-small-only">We give your business an internet presence</p>
          <h3>
            Develop, Deploy, Done
          </h3>

          <p className="big">
            We build your website using cutting edge frameworks
            <br/>
            entirely customized and made to order
          </p>

          <a className="btn waves-light waves-effect m-r-16">Features</a>
          <a className="btn waves-light waves-effect">Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
