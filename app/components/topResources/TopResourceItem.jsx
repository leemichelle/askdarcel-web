import React from 'react';

class ResourceItem extends React.Component {
  render() {
    return (
      <li className="resource-item">
        <div className="resource-button-content">
          <p className="resource-button-title">{this.props.name}</p>
        </div>
      </li>
    );
  }
}

export default ResourceItem;
