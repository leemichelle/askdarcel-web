import React from 'react';

const LandingPageCard = props => (
  <a href={props.query} className="landing-page-card">
    <h1 className="landing-page-card__title">{props.title}</h1>
    <div className={`langing-page-card__image ${props.imgClass}`} />
    <h2 className="landing-page-card__content">{props.content}</h2>
  </a>
);

export default LandingPageCard;
