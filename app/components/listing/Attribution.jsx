import React from 'react';

class Attribution extends React.Component {
  render() {
    const hapLink = 'https://medium.com/@Shelter_Tech/sheltertech-is-participating-'
      + 'in-the-benetech-service-net-pilot-in-the-san-francisco-bay-area-b28645d3dee6';

    return (
      <div>
        <p><i></i>Verified by HAP</p>
        <a href={hapLink}>Service Net Partner</a>
      </div>
    );
  }
}

export default Attribution;
