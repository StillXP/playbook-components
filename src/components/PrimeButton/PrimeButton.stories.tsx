import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { PrimeButton, Props } from './PrimeButton';

const meta: Meta = {
    title: '🔴 Prime Button',
    component: PrimeButton,
    args: {
        children: 'Button',
        size: 'large',
        style: 'primary',
        theme: 'light'
    }
}

export default meta;

const Template: Story<Props> = (args) => <PrimeButton {...args}/>

export const Prime = Template.bind({})