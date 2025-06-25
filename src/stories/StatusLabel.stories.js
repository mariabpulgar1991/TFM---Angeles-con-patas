
import React from 'react';
import StatusLabel from '../components/StatusLabel';

export default {
  title: 'Atoms/StatusLabel',
  component: StatusLabel,
  tags: ['autodocs'],
};

const Template = (args) => <StatusLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'status-label-default',
};

export const ActiveSuccess = Template.bind({});
ActiveSuccess.args = {
  variant: 'status-label-active-success',
};

export const ActiveNormal = Template.bind({});
ActiveNormal.args = {
  variant: 'status-label-active-normal',
};

export const ActiveInformative = Template.bind({});
ActiveInformative.args = {
  variant: 'status-label-active-informative',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'status-label-warning',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'status-label-error',
};

export const StatusDefault = Template.bind({});
StatusDefault.args = {
  variant: 'status-status-label-default',
};

export const StatusSuccess = Template.bind({});
StatusSuccess.args = {
  variant: 'status-status-label-active-success',
};

export const StatusNormal = Template.bind({});
StatusNormal.args = {
  variant: 'status-status-label-active-normal',
};

export const StatusWarning = Template.bind({});
StatusWarning.args = {
  variant: 'status-status-label-warning',
};

export const StatusError = Template.bind({});
StatusError.args = {
  variant: 'status-status-label-error',
};
