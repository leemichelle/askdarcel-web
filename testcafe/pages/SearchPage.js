import { ReactSelector } from 'testcafe-react-selectors';

export default class SearchPage {
  constructor() {
    const baseSelector = ReactSelector('SearchTable');
    this.searchRows = baseSelector.findReact('SearchRow');

    this.firstOrganization = baseSelector.findReact('ResourceEntry');
    this.firstOrganizationName = this.firstOrganization.find('.entry-headline');
    this.firstOrganizationDesc = this.firstOrganization.find('.entry-body');

    this.firstService = baseSelector.findReact('ServiceEntry');
    this.firstServiceName = this.firstService.find('.entry-headline');
    this.firstServiceDesc = this.firstService.find('.service-entry-body');

    this.openHours = baseSelector.find('.entry-hours');
    this.pagination = ReactSelector('InstantSearch').find('.ais-Pagination');
  }
}
