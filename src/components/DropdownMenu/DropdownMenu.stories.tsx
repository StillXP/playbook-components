import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import DropdownMenu, { Props } from './DropdownMenu';

const testList = [
        {
            id: 0,
            iconLeft: true,
            iconRight: true,
            logo: true,
            title: 'Menu Item 1',
            description: 'Menu item description',
            selected: false,
            key: 'item'
        },
        {
            id: 1,
            iconLeft: false,
            iconRight: true,
            logo: false,
            title: 'Menu Item 2',
            description: 'Menu item description',
            selected: false,
            key: 'item'
        },
        {
            id: 2,
            iconLeft: true,
            iconRight: false,
            logo: false,
            title: 'Menu Item 3',
            description: 'Menu item description',
            selected: false,
            key: 'item'
        },
        {
            id: 3,
            iconLeft: false,
            iconRight: false,
            logo: true,
            title: 'Menu Item 4',
            description: 'Menu item description',
            selected: false,
            key: 'item'
        }
]


const meta: Meta = {
    title: 'DropdownMenu',
    component: DropdownMenu,
    args: {
        errorState: false,
        errorMessage: '',
        list: testList,
        size: 'large',
        title: 'Items',
    }
}



export default meta;

const Template: Story<Props> = (args) => <DropdownMenu {...args}/>

export const Default = Template.bind({})

Default.args = {

}