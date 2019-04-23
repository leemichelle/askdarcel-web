import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';
import { getResourceActions } from 'utils/ResourceActions';

const getSidebarActions = resource => {
  const resourceActions = getResourceActions(resource);
  const sidebarActions = [
    resourceActions.edit,
    resourceActions.print,
  ];
  if (resource.address) {
    sidebarActions.push(resourceActions.directions);
  }
  return sidebarActions;
};

const renderButtonContent = action => (
  <span>
    <i className="material-icons">{ action.icon }</i>
    { action.name }
  </span>
);

class ListPageSidebar extends React.Component {
  render() {
    const { resource } = this.props;
    const actions = getSidebarActions(resource);

    return (
      <ul className="actions">
        {actions.map(action => (
          <li key={action.name}>
            {
              action.to || action.handler
                ? (
                  <Link to={action.to} onClick={action.handler} className={`listing--aside--${action.name.toLowerCase()}`}>
                    { renderButtonContent(action) }
                  </Link>
                )
                : (
                  <a href={action.link} rel="noopener noreferrer" target="_blank" className={`listing--aside--${action.name.toLowerCase()}`}>
                    { renderButtonContent(action) }
                  </a>
                )
            }
          </li>
        ))}
      </ul>
    );
  }
}

ListPageSidebar.propTypes = {
  resource: PropTypes.object.isRequired,
};

export default ListPageSidebar;
