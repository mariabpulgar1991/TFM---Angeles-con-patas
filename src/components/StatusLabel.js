import React from 'react';
import colors from '../tokens/colors';
import borders from '../tokens/border-radius';

// 🟢 Íconos como componentes React (SVG con fill="currentColor")
import { ReactComponent as StatusIcon } from '../assets/Status.svg';
import { ReactComponent as PlusIcon } from '../assets/Plus.svg';
import { ReactComponent as CheckIcon } from '../assets/Check.svg';
import { ReactComponent as InfoIcon } from '../assets/Info.svg';
import { ReactComponent as WarningIcon } from '../assets/Warning.svg';
import { ReactComponent as CloseIcon } from '../assets/Close.svg';

const variantMap = {
  // Primer bloque (clases 1 a 5) — ícono antes del texto
  'status-label-default': {
    defaultText: 'Status default',
    borderColor: colors.grayDarkActive,
    icon: StatusIcon,
    iconPosition: 'leading',
  },
  'status-label-active-success': {
    defaultText: 'Status active',
    borderColor: colors.successNormal,
    icon: StatusIcon,
    iconPosition: 'leading',
  },
  'status-label-active-normal': {
    defaultText: 'Status active',
    borderColor: colors.ciamNormal,
    icon: StatusIcon,
    iconPosition: 'leading',
  },
  'status-label-warning': {
    defaultText: 'Warning',
    borderColor: colors.yellowNormal,
    icon: StatusIcon,
    iconPosition: 'leading',
  },
  'status-label-error': {
    defaultText: 'Error',
    borderColor: colors.errorNormal,
    icon: StatusIcon,
    iconPosition: 'leading',
  },

  // Segundo bloque (clases 6 en adelante) — ícono después del texto
  'status-status-label-default': {
    defaultText: 'Status default',
    borderColor: colors.grayDarkActive,
    icon: PlusIcon,
    iconPosition: 'trailing',
  },
  'status-status-label-active-success': {
    defaultText: 'Status active',
    borderColor: colors.successNormal,
    icon: CheckIcon,
    iconPosition: 'trailing',
  },
  'status-status-label-active-normal': {
    defaultText: 'Status active',
    borderColor: colors.ciamNormal,
    icon: InfoIcon,
    iconPosition: 'trailing',
  },
  'status-status-label-warning': {
    defaultText: 'Warning',
    borderColor: colors.yellowNormal,
    icon: WarningIcon,
    iconPosition: 'trailing',
  },
  'status-status-label-error': {
    defaultText: 'Error',
    borderColor: colors.errorNormal,
    icon: CloseIcon,
    iconPosition: 'trailing',
  },
};

const StatusLabel = ({ variant = 'status-label-default', children }) => {
  const variantConfig = variantMap[variant] || variantMap['status-label-default'];
  const text = children || variantConfig.defaultText;
  const IconComponent = variantConfig.icon;
  const iconPosition = variantConfig.iconPosition || 'leading';

  const wrapperStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--Space-space-100, 4px)',
    padding: '0px var(--Space-space-300, 12px)',
    height: '24px',
    border: `1px solid ${variantConfig.borderColor}`,
    borderRadius: `${borders.radiusFull}px`,
    backgroundColor: 'transparent',
    flexShrink: 0,
    flexDirection: iconPosition === 'trailing' ? 'row-reverse' : 'row',
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
    flexShrink: 0,
    color: variantConfig.borderColor, // hereda como fill para el SVG
  };

  return (
    <div style={wrapperStyle}>
      {IconComponent && <IconComponent style={iconStyle} />}
      <span>{text}</span>
    </div>
  );
};

export default StatusLabel;
