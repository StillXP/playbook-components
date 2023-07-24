import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Logo, Props } from './Logo';

const meta: Meta = {
    title: 'Logo',
    component: Logo,
    args: {
        size: '100',
        image: 'Default'
    }
}

export default meta;

const Template: Story<Props> = (args) => <Logo {...args}/>

export const Default = Template.bind({})
