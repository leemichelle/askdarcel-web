import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CallOutBlock.scss';

class CallOutBlock extends Component {
  render() {
    return (
      <div className="callout-block">
        <div className="callout-block__content">
          <div className="callout-block__subheadline">
            {this.props.config.CONTENT.SUBHEADLINE}
          </div>
          <div className="callout-block__headline">
            {this.props.config.CONTENT.HEADLINE}
          </div>
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