import React from 'react';
import TopResourceItem from './TopResourceItem';
/* eslint-disable react/no-multi-comp */
export class TopResourceList extends React.Component {
  render() {
    const resourceNodes = [];
    console.log('bye')
    this.props.resources.forEach(resource => {
      resourceNodes.push(
        <TopResourceItem name={resource.name} key={resource.id} resourceid={resource.id} />
      );
    });

    return (
      <ul className="resource-items"> {resourceNodes} </ul>
    );
  }
}
