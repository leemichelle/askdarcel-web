import React from 'react';
import Footer from 'components/ui/Footer';
import LandingPageResourceBlock from 'components/ui/LandingPageResourceBlock';
import Partners from 'components/ui/Partners';
import WhiteLabel from 'components/ui/WhiteLabel';
import FindHeader from 'components/layout/FindHeader';
import { CategoryList } from 'components/layout/CategoryList';
import { TopResources } from 'components/layout/TopResourceList';
import LegalBlockConfig from 'components/ui/LegalBlockConfig';
import config from '../config';

import './HomePage.scss';

let categories = [];
let resources = [];
const subDomain = window.location.host.split('.')[0];

export class HomePage extends React.Component {
  componentDidMount() {
    // this.loadCategoriesFromServer();
    this.loadResourceFromServer();
  }

  loadCategoriesFromServer() {
    const httpRequest = new XMLHttpRequest();
    const tempUrl = '/api/categories?top_level=true';

    const callback = function callback() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          categories = JSON.parse(httpRequest.responseText).categories;
          this.setState({ categories });
        } else {
          console.log('error...');
        }
      }
    }.bind(this);

    httpRequest.open('GET', tempUrl, true);
    httpRequest.onreadystatechange = callback;
    httpRequest.send(null);
  }

  loadResourceFromServer(paramId) {
    const affordableHousingId = 11;
    const id = paramId || affordableHousingId;
    const url = `/api/services/featured?category_id=${id}`;
    fetch(url, { credentials: 'include' })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        resources = data;
        // this.setState({ resources: data });
      // <TopResources resources={resources} />
      });
  }

  render() {
    console.log('hi')
    return (
      <div className="find-page">
        <div className="find-content-container">
          <FindHeader />
          <CategoryList categories={categories} />
        </div>
        {subDomain === config.MOHCD_SUBDOMAIN ? <WhiteLabel /> : null}
        <LandingPageResourceBlock config={LegalBlockConfig}>
          <div className="legal-block__resources-hammer" />
        </LandingPageResourceBlock>
        <TopResources resources={resources} />
        <Partners />
        <Footer />
      </div>
    );
  }
}
