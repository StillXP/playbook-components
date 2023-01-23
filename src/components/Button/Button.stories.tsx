import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from './Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    args: {
        children: 'Button',
        size: 'large',
        theme: 'light',
        width: 'hug',
    }
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args}/>

export const Primary = Template.bind({})

export const Secondary = Template.bind({})

export const Tertiary = Template.bind({})

Primary.args = {
    type: 'primary',
}

Secondary.args = {
    type: 'secondary',
}

Tertiary.args = {
    type: 'tertiary',
}