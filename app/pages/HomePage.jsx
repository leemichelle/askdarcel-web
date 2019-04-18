import React from 'react';
import Footer from 'components/ui/Footer';
import LandingPageResourceBlock from 'components/ui/LandingPageResourceBlock';
import LandingPageEligibilityBlock from 'components/ui/LandingPageEligibilityBlock';
import Partners from 'components/ui/Partners';
import FindHeader from 'components/layout/FindHeader';
import { CategoryList } from 'components/layout/CategoryList';
import BasicNeedsBlockConfig from 'components/ui/BasicNeedsBlockConfig';
import LegalBlockConfig from 'components/ui/LegalBlockConfig';
import * as ax from 'axios';

import './HomePage.scss';

export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      eligibilities: [],
    };
  }

  componentDidMount() {
    this.loadCategoriesFromServer();
    this.loadEligibilitiesFromServer();
  }

  loadCategoriesFromServer() {
    ax.get('/api/categories/featured').then(resp => {
      this.setState({ categories: resp.data.categories });
    });
  }

  loadEligibilitiesFromServer() {
    // TODO Should probably move this and above into redux
    ax.get('/api/eligibilities/featured').then(resp => {
      this.setState({ eligibilities: resp.data.eligibilities });
    });
  }

  render() {
    const { categories, eligibilities } = this.state;
    return (
      <div className="find-page">
        <div className="find-content-container">
          <FindHeader />
          <CategoryList categories={categories} />
        </div>
        <LandingPageEligibilityBlock eligibilities={eligibilities} />
        <LandingPageResourceBlock config={LegalBlockConfig}>
          <div className="legal-block__resources-hammer" />
        </LandingPageResourceBlock>
        <LandingPageResourceBlock config={BasicNeedsBlockConfig} />
        <Partners />
        <Footer />
      </div>
    );
  }
}
