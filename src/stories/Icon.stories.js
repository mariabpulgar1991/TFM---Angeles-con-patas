import React from 'react';
import Icon from '../components/IconSelector';
import { icons } from '../tokens/icons';


const iconNames = Object.keys(icons);

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'Nombre del icono a mostrar.',
      defaultValue: iconNames[0] || 'plus',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large', 'extraLarge', 'display'],
      description: 'Tamaño del icono.',
      defaultValue: 'medium',
    },
    color: {
      control: 'color',
      description: 'Color del icono.',
      defaultValue: '#333',
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: iconNames[0] || 'plus',
  size: 'medium',
  color: '#333',
};


export const AllIcons = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gap: '20px',
      padding: '20px',
    }}
  >
    {iconNames.map((iconName) => (
      <div
        key={iconName}
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 0,
        }}
      >
        <Icon name={iconName} size="large" />
        <span style={{ fontSize: '12px', marginTop: '8px', wordBreak: 'break-word' }}>
          {iconName}
        </span>
      </div>
    ))}
  </div>
);


export const AllSizes = () => (
  <div>
    <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Icon name={iconNames[0] || 'plus'} size="small" /> Small (16px)
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Icon name={iconNames[0] || 'plus'} size="medium" /> Medium (20px)
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Icon name={iconNames[0] || 'plus'} size="large" /> Large (24px)
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Icon name={iconNames[0] || 'plus'} size="extraLarge" /> Extra Large (28px)
    </p>
    <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Icon name={iconNames[0] || 'plus'} size="display" /> Display (40px)
    </p>
  </div>
);

// export const DifferentColors = () => (
//   <div>
//     <p>
//       <Icon name={iconNames[0] || 'plus'} size="medium" color="blue" /> Blue
//     </p>
//     <p>
//       <Icon name={iconNames[0] || 'plus'} size="medium" color="red" /> Red
//     </p>
//     <p>
//       <Icon name={iconNames[0] || 'plus'} size="medium" color="green" /> Green
//     </p>
//   </div>
// );



