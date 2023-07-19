import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Headshot, Props } from './Headshot';

const meta: Meta = {
    title: 'Headshot',
    component: Headshot,
    args: {
        size: '200',
        image: 'Placeholder'
    }
}

export default meta;

const Template: Story<Props> = (args) => <Headshot {...args}/>

export const Default = Template.bind({})