import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Flag, Props } from './Flag';

const meta: Meta = {
    title: 'Flag',
    component: Flag,
    argTypes: {
        children: {
            defaultValue: 'Flag'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Flag {...args}/>

export const Live = Template.bind({})

export const Upcoming = Template.bind({})

export const Duration = Template.bind({})

export const Queue = Template.bind({})

export const Network = Template.bind({})

Live.args = {
    variant: 'live',
    children: 'LIVE',
}

Upcoming.args = {
    variant: 'upcoming',
    children: 'THU 7:30 PM',
}

Duration.args = {
    variant: 'duration',
    children: '12:08',
}

Queue.args = {
    variant: 'queue',
    children: 'Queue',
}

Network.args = {
    variant: 'network',
    children: 'Icon Soon',
}