import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, Props } from './Dropdown';

const meta: Meta = {
    title: 'Dropdown',
    component: Dropdown,
    args: {
        size: 'large',
        state: 'default',
        width: 'hug',

    }
}

export default meta;

const Template: Story<Props> = (args) => <Dropdown {...args}/>

export const Default = Template.bind({})

Default.args = {

}