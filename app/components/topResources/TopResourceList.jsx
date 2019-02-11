import React from 'react';
import ResourceItem from './TopResourceItem';

/* eslint-disable react/no-multi-comp */
export class TopResourceList extends React.Component {
  render() {
    const resourceNodes = [];
    console.log('bye')
    this.props.resources.forEach(resource => {
      // <ResourceItem name={resource.name} key={resource.id} resourceid={resource.id} />
      resourceNodes.push(
        <li>hi world</li>
      );
    });

    return (
      <ul className="resource-items"> {resourceNodes} </ul>
    );
  }
}
