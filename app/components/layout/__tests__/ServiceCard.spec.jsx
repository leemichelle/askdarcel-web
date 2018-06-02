import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { expect } from 'chai';
import { render } from 'enzyme';

import ServiceCard from '../ServiceCard';

describe('<ServiceCard />', () => {
  const history = createMemoryHistory();
  const wrapInRouter = content => <Router history={history}>{content}</Router>;

  const validService = {
    service: {
      id: 2,
      name: 'Test Service',
      long_description: 'This valuable service does things',
    },
  };

  it('checks a valid user should render the appropriate fields in the right place', () => {
    const card = render(wrapInRouter(<ServiceCard service={validService} />));
    expect(card.find('h3').text()).to.equal('Test Service');
  });
});
