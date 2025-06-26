import React from 'react';
import { icons } from '../tokens/icons';

const IconSelector = ({ name, size, color, ...props}) => {
    const iconSizes = {
        small: '16px',
        medium: '20px',
        large: '24px',
        extralarge: '28px',
        display: '40px',
    };

    const iconSize = iconSizes[size] || iconSizes.medium;

    const IconComponent = icons[name];

    if (!IconComponent){
        console.warn(`Icono "{name}" no encontrado en la lista de iconos.`);
        return null; 
    }

    const iconStyles ={
        width: iconSize,
        height: iconSize,
        color: color || 'currentColor',
        display: 'inline-block',
        verticalAlign: 'middle',
    };

    return (

        <IconComponent
        style={iconStyles}
        aria-hidden="true"
        {...props}
        />
    );
};

export default IconSelector;
