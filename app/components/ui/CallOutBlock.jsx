import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CallOutBlock extends Component {
  render() {
    return (
      <div className="callout-block">
        <div className="callout-block__content">
          <h2 className="callout-block__subheadline">
            {this.props.config.CONTENT.SUBHEADLINE}
          </h2>
          <h1 className="callout-block__headline">
            {this.props.config.CONTENT.HEADLINE}
          </h1>
          {this.props.config.CONTENT.BUTTON_TEXT}
        </div>
      </div>
    );
  }
}

CallOutBlock.props = {
  config: PropTypes.shape({
    CONTENT: PropTypes.shape({
      HEADLINE: PropTypes.string,
      SUBHEADLINE: PropTypes.string,
      BUTTON_TEXT: PropTypes.string,
      ROUTE: PropTypes.string
    }),
    STYLE: PropTypes.shape({
      THEME: PropTypes.string,
      IMAGE_URL: PropTypes.string
    })
  }),
};

export default CallOutBlock;