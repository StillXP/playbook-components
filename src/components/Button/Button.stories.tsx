import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from './Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    args: {
        ariaLabel: 'a11y label',
        children: 'Button',
        disabled: false,
        radius: '8',
        size: 'large',
        theme: 'light',
        type: 'button',
        url: '',
        width: 'hug',
    }
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args}/>

export const Primary = Template.bind({})

export const Secondary = Template.bind({})

export const Tertiary = Template.bind({})

Primary.args = {
    style: 'primary'
}

Secondary.args = {
    style: 'secondary',
}

Tertiary.args = {
    style: 'tertiary',
}