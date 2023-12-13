import { Meta } from '@storybook/react';
import React from 'react';
import styles from './Card.module.scss';
import { Themes } from 'src/constants/constants';
import Card, {CardVariant, CardProps} from '.';

const cardVariantList: string[] = [];
Object.values(cardVariantList).map((item) => (
    cardVariantList.push(item)
));

export default {
    title: 'Card',
    component: Card,
    parameters: {
        docs: {
            description: {
                component: 'Card Component used to display and guide users to content'
            }
        }
    },
    args:{ 
        variant: 'vertical',
        title: 'Report: NBA Christmas Day schedule set',
        description: 'The Celtics visit the Lakers, the Bucks will face the Knicks, the 76ers will take on the Heat and the Mavs battle the Suns.',
        tag: 'NFL',
        url: 'https://google.com'
    }
} as Meta;

const Template = (args:CardProps) => (
    <div className="story">
        <Card {...args} />
    </div>
);

const RowTemplate4 = (args:CardProps) => (
    <ul className="row">
        <Card {...args} />
        <Card {...args} />
        <Card {...args} />
        <Card {...args} />
    </ul>
)

const RowTemplate3 = (args:CardProps) => (
    <ul className="row">
        <Card {...args} />
        <Card {...args} />
        <Card {...args} />
    </ul>
)

const RowTemplate2 = (args:CardProps) => (
    <ul className="row">
        <Card {...args} />
        <Card {...args} />
    </ul>
)

const ColumnTemplate = (args:CardProps) => (
    <ul className="column">
        <Card {...args} />
        <Card {...args} />
        <Card {...args} />
        <Card {...args} />
    </ul>
)

export const CardComponent = Template.bind({});
export const CardRow4 = RowTemplate4.bind({});
export const CardRow3 = RowTemplate3.bind({});
export const CardRow2 = RowTemplate2.bind({});
export const CardColumn = ColumnTemplate.bind({});
