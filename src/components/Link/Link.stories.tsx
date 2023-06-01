import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, Props } from './Link';

const meta: Meta = {
    title: 'Link',
    component: Link,
    args: {
        children: 'link',
        url: 'https://google.com'
    }
}

export default meta;

const Template: Story<Props> = (args) => <Link {...args}/>

const List: Story<Props> = (args) => 
        <div style={{display: "inline-flex", flexDirection:"column"}}>
            <Link {...args}/>
            <Link {...args}/>
            <Link {...args}/>
            <Link {...args}/>
            <Link {...args}/>
        </div>
export const Default = Template.bind({})

export const Listed = List.bind({})