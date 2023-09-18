import { Meta } from '@storybook/react';
import { Themes, IconSizes } from 'src/constants/constants';
import DynamicLogo, { IDynamicLogo } from '.';
import React from 'react';

const sizeList = Object.keys(IconSizes).filter((item) => Number.isInteger(Number(item)));

export default {
    title: 'DynamicLogo',
    component: DynamicLogo,
    parameters: {
        docs: {
            description: {
                component: 'Dynamic logo that supports AWS logo or icon',
            },
        },
    },
    args: {
        iconName: 'ArenaSoccer',
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: sizeList,
            defaultValue: sizeList[3],
        },
        theme: {
            control: { type: 'radio' },
            options: Themes,
            defaultValue: Themes.light,
        },
    },
} as Meta;

const Template = (args: IDynamicLogo) => (
    <DynamicLogo {...args} />
);

export const DynamicLogoComponent = Template.bind({});