import React from 'react';
import { Link } from 'react-router';
import { images } from '../../assets';

class ResourceItem extends React.Component {
  render() {
    return (
      <li className="resource-item">
        <Link className="resource-button" to={`/search?refinementList[categories][0]=${this.props.name}`} >
          <div className="resource-button-content">
            <div className="resource-button-icon">
              <img
                src={images.icon(this.props.name)}
                alt={this.props.name}
                className="img-responsive"
              >
            </div>
            <p className="resource-button-title">{this.props.name}</p>
          </div>
        </Link>
      </li>
    );
  }
}

export default ResourceItem;
