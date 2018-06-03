import ServicePage from './pages/ServicePage';

const servicePage = new ServicePage();

fixture `Service Page`
  .page(servicePage.url(1));

test('Confirm Page Loads with Information', async (t) => {
  const serviceName = 'Women\'s clinicA service offered by New Resource Name';
  const serviceDesc = 'About This ServiceTB Testing, Pregnancy Test, STD Testing, STD Treatment, HIV Testing, HIV Treatment,\r\nTransgender Svcs, Immunizations, Women’s Health, Family Planning, Mental Health,\r\nPrimary Care. MediCal, MediCare, uninsured people $0-full bill. Women & all transgender welcome.';
  const serviceDets = 'English & Spanish. Email: info@lyon-martin.org.';
  await t
       .expect(servicePage.serviceName.textContent)
       .contains(serviceName)

       .expect(servicePage.description.textContent)
       .contains(serviceDesc)

       .expect(servicePage.details.textContent)
       .contains(serviceDets)
  ;
});
