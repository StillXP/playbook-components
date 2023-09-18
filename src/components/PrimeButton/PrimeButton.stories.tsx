import { Meta } from '@storybook/react';
import React from 'react';
import { Themes } from 'src/constants/constants';
import PrimeButton, { ButtonSizes, ButtonTypes, ButtonProps } from '.';

const buttonSizeList: string[] = [];
Object.values(ButtonSizes).map((item) => (
    buttonSizeList.push(item)
));

const buttonThemeList: string[] = [];
Object.values(Themes).map((item) => (
    buttonThemeList.push(item)
));

const buttonTypeList: string[] = [];
Object.values(ButtonTypes).map((item) => (
    buttonTypeList.push(item)
));

// Icons for Storybook demo
const buttonIconList: string[] = ['', 'Headphones', 'Flask', 'Hot'];

export default {
    title: 'Prime Button',
    component: PrimeButton,
    parameters: {
        docs: {
            description: {
                component: 'A button component',
            },
        },
    },
    args: {
        size: 'large',
        type: 'primary',
        theme: 'light', 
        children: 'Button',
        disabled: false,
        hasLeftArrow: false,
        hasRightArrow: false,
        isLoading: false,
        isResponsive: false,
        url: 'http://www.google.com',
    },
    argTypes: {
        iconLeft: {
            control: { type: 'select' },
            options: buttonIconList,
            defaultValue: buttonIconList[0],
        },
        iconRight: {
            control: { type: 'select' },
            options: buttonIconList,
            defaultValue: buttonIconList[0],
        },
        size: {
            control: { type: 'select' },
            options: buttonSizeList,
            defaultValue: buttonSizeList[0],
        },
        theme: {
            control: { type: 'radio' },
            options: buttonThemeList,
            defaultValue: buttonThemeList[0],
        },
        type: {
            control: { type: 'radio' },
            options: buttonTypeList,
            defaultValue: buttonTypeList[0],
        },
    },
} as Meta;

const Template = (args:ButtonProps) => (
    <PrimeButton {...args} />
);

export const ButtonComponent = Template.bind({});