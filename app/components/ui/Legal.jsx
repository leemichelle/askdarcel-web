import React, { Component } from 'react';
import LandingPageCard from './LandingPageCard';

const HOST_QUERY = 'https://askdarcel.org/search?query=';
const CATEGORIES_LEGAL = {
  FIRST_ROW: [
    {
      title: 'Housing',
      content: 'Eviction defense, housing help, homeownership',
      query: 'Housing+Law',
      imgClass: 'legal-block-housing',
    },
    {
      title: 'Immigration',
      content: 'Asylum, SIJS, DACA, T-Visas, U-Visas, VAWA',
      query: 'Immigration',
      imgClass: 'legal-block-immigration',
    },
    {
      title: 'Family & Relationships',
      content: 'Divorce, custory, guardianship, restraining order, T-Visas, etc.',
      query: 'Family+Law',
      imgClass: 'legal-block-family',
    },
  ],
  SECOND_ROW: [
    {
      title: 'Criminal & Tickets',
      content: 'Criminal process questions, quality of life, record expungement',
      query: 'Criminal',
      imgClass: 'legal-block-criminal',
    },
    {
      title: 'Work, Credit, and Consumer',
      content: 'Credit/consumer, worker\'s rights, work and family',
      query: 'Workers+consumers',
      imgClass: 'legal-block-work',
    },
    {
      title: 'Benefits',
      content: 'CAAP, CalWORKS, CalFresh, MediCal, SSI',
      query: 'Government+Benefits',
      imgClass: 'legal-block-benefits',
    },
  ],
};

class Legal extends Component {
  render() {
    return (
      <div className="legal-block">
        <div className="legal-block__hammer" />
        <div className="legal-block__resources">
          <h1 className="legal-block__resources-title first-word">Discover</h1>
          <h1 className="legal-block__resources-title blue-word">Legal</h1>
          <h1 className="legal-block__resources-title">Resources</h1>
          <div className="legal-block__cards">
            <div className="legal-block__cards-first-row">
              { CATEGORIES_LEGAL.FIRST_ROW.map(category => (
                <LandingPageCard
                  title={category.title}
                  content={category.content}
                  query={HOST_QUERY + category.query}
                  imgClass={category.imgClass}
                  key={category.query}
                />
              ))}
            </div>
            <div className="legal-block__cards-second-row">
              { CATEGORIES_LEGAL.SECOND_ROW.map(category => (
                <LandingPageCard
                  title={category.title}
                  content={category.content}
                  query={HOST_QUERY + category.query}
                  imgClass={category.imgClass}
                  key={category.query}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Legal;
