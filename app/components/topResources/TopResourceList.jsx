import React from 'react';
import ResourceItem from './TopResourceItem';

/* eslint-disable react/no-multi-comp */
export class TopResourceList extends React.Component {
  render() {
    const resourceNodes = [];

    this.props.resources.forEach((resource) => {
      if (resource.featured) {
          resourceNodes.push(
            <ResourceItem name={resource.name} key={resource.id} resourceid={resource.id} />
          );
      }
    });

    return (
        <ul className="resource-items"> {resourceNodes} </ul>
    );
  }
}
