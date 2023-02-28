import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import DropdownMenu, { Props } from './DropdownMenu';

const testList = [
        {
            id: 0,
            title: 'Item 1',
            description: 'item description',
            selected: false,
            key: 'item'
        },
        {
            id: 1,
            title: 'Item 2',
            description: 'item description',
            selected: false,
            key: 'item'
        },
        {
            id: 2,
            title: 'Item 3',
            description: 'item description',
            selected: false,
            key: 'item'
        },
        {
            id: 3,
            title: 'Item 4',
            description: 'Item description',
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