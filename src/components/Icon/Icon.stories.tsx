import * as React from 'react';
import { Meta } from '@storybook/react';
import './Icon.scss';
import * as Icons from './Icon';

export default {
    title: 'Icons',
    component: Icons as unknown,
    parameters: {
        docs: {
            description: {
                component: 'Icons',
            },
        },
    },
    args: {
        width: '20',
        height: '20',
        title: 'This is a Title for screen readers.',
    },
    argTypes: {
    },
} as Meta;

const Template = (args:React.FC<React.SVGProps<SVGSVGElement>>) => (
    <div className={'storybookRow'}>
        { Object.values(Icons).map((Value) => {
            const iconName = Value.name;
            return (
                <div key={Value.name} className={'storybookColumn'}>
                    <Value key={Value.name} {...args} />
                    {iconName}
                </div>
            );
        })}
    </div>
);

export const IconsComponent = Template.bind({});