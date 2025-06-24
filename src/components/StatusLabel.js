import React from 'react';
import PropTypes from 'prop-types';
import colors from '../tokens/colors';

const statusColorMap = {
  default: colors.successDark,
  activeGreen: colors.successNormal,
  activeBlue: colors.blueNormal,
  warning: colors.yellowNormal,
  error: colors.errorNormal,
};

const StatusLabel = ({ text, status = 'default' }) => {
  const color = statusColorMap[status] || colors.grayDark;

  return (
    <span
      className="status-label"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0 12px',
        height: '24px',                // altura fija según Figma
        borderRadius: '999px',
        border: `1px solid ${color}`,
        color: color,
        fontSize: '0.75rem',           // ajustado para que quepa bien en 24px
        fontWeight: 500,
        lineHeight: 1,
        backgroundColor: '#fff',
      }}
    >
      <span
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: color,
        }}
      />
      <span>{text}</span>
    </span>
  );
};

StatusLabel.propTypes = {
  text: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['default', 'activeGreen', 'activeBlue', 'warning', 'error']),
};

export default StatusLabel;
