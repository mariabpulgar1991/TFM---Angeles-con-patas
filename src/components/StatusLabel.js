import React from 'react';
import PropTypes from 'prop-types';
import '../tokens/colors';

const StatusLabel = ({ text, status = 'default', icon, iconPosition = 'left' }) => {
  return (
    <span className={`status-label status-label--${status}`}>
      {icon && iconPosition === 'left' && <span className="status-label__icon">{icon}</span>}
      <span className="status-label__text">{text}</span>
      {icon && iconPosition === 'right' && <span className="status-label__icon">{icon}</span>}
    </span>
  );
};

StatusLabel.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['default', 'active-green', 'active-blue', 'warning', 'error']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default StatusLabel;
