import { ReactSelector } from 'testcafe-react-selectors';
import config from '../config';

export default class ResourcePage {
  constructor() {
    const baseSelectorName = 'ServicePage';
    const baseSelector = ReactSelector(baseSelectorName);
    this.serviceName = baseSelector.find('.listing--main--left header');
    this.description = baseSelector.find('.listing--main--left--about');
    this.details = baseSelector.find('.listing--main--left--details');
    // TODO: Can't use nested React component name PhoneNumber because it is
    // instantiated in both the header and the body of the page and because the
    // testcafe-react-selectors plugin is currently unable to mix CSS selectors
    // in between React component names.
    // https://github.com/DevExpress/testcafe-react-selectors/issues/51
    this.phones = baseSelector.find('..listing--main--left--info');
    this.editButton = baseSelector.find('.listing--aside-edit');
    this.url = serviceId => `${config.baseUrl}/services/${serviceId}`;
  }

}
