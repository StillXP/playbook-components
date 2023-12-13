import { Meta } from '@storybook/react';
import GridRow, { GridCol, IGridCol } from '.';
import './Grid.storybook.module.scss';
import React from 'react';
import Card, { CardVariant, CardProps } from '../Card';;

interface IGridItem {
    [key: string]: IGridCol,
}

export default {
    title: 'Grid',
    component: GridRow,
    parameters: {
        docs: {
            description: {
                component: 'Grid',
            },
        },
    },
    args: {
        item1: {
            mobile: 6, tablet: 3, desktop: 4,
        },
        item2: {
            mobile: 6, tablet: 6, desktop: 4,
        },
        item3: {
            mobile: 12, tablet: 3, desktop: 4,
        },
        item4: {
            mobile: 6, tablet: 6, desktop: 6,
        },
        item5: {
            mobile: 12, tablet: 12, desktop: 12,
        },
        item6: {
            mobile: 12, tablet: 3, desktop: 3,
        },
        item7: {
            mobile: 3, tablet: 3, desktop: 3,
        },
        item8: {
            mobile: 6, tablet: 3, desktop: 3,
        },
        item9: {
            mobile: 3, tablet: 3, desktop: 3,
        },
        hero: {
            mobile: 12, tablet: 12, desktop: 8, wide: 6
        },
        trending: {
            mobile: 12, tablet: 12, desktop: 4, wide: 3
        },
        assoc: {
            mobile: 0, tablet: 0, desktop: 0, wide: 3
        }
    },
    argTypes: {
    },
} as Meta;

const Template = (args: IGridItem) => {
    const {
        item1, item2, item3, item4, item5, item6, item7, item8, item9, hero, trending, assoc
    } = args;

    return (
        <section className='main'>
            <GridRow>
                <GridCol {...hero} area='main'>
                    <div className='main-content'>
                        <Card
                            title='Report: NBA Christmas Day schedule set'
                            description='The Celtics visit the Lakers, the Bucks will face the Knicks, the 76ers will take on the Heat and the Mavs battle the Suns.'
                            tag='NBA'
                            url=''
                            variant={CardVariant.hero}
                        />
                        <div className='divider-assoc'/>
                        <div className='sub-articles'>
                            <Card
                                title='QB2 Lock helps Hawks rally in preseason opener'
                                description='Example Hero Description'
                                tag='NFL'
                                url=''
                                variant={CardVariant.subHero}
                            />
                            <Card
                                title='Spain through to first Women’s World Cup semifinal'
                                description='Example Hero Description'
                                tag='NFL'
                                url=''
                                variant={CardVariant.subHero}
                            />
                        </div>
                    </div>
                </GridCol>
                <GridCol {...assoc} area='assoc'>
                    <div className='assoc-articles'>
                        <Card
                            title='QB2 Lock helps Hawks rally in preseason opener'
                            description='Example Hero Description'
                            tag='NFL'
                            url=''
                            variant={CardVariant.subHero}
                        />
                        <Card
                            title='Spain through to first Women’s World Cup semifinal'
                            description='Example Hero Description'
                            tag='NFL'
                            url=''
                            variant={CardVariant.subHero}
                        />
                    </div>
                </GridCol>
                <GridCol {...trending} area='side'>
                    <div className='divider'/>
                    <Card
                        title='Lions Jackson second RB to abruptly retire in camp'
                        description='Example Hero Description'
                        tag='NFL'
                        url=''
                        variant={CardVariant.text}
                    />
                    <div className='divider'/>
                    <Card
                        title='Report: Saints signing former Cowboys, Giants linebacker'
                        description='Example Hero Description'
                        tag='NFL'
                        url=''
                        variant={CardVariant.text}
                    />
                    <div className='divider'/>
                    <Card
                        title='Exec: Padded helmet covers could be used in games'
                        description='Example Hero Description'
                        tag='NFL'
                        url=''
                        variant={CardVariant.text}
                    />
                    <div className='divider'/>
                    <Card
                        title='Nebraska DB Myles Farmer suspended indefinitely'
                        description='Example Hero Description'
                        tag='NFL'
                        url=''
                        variant={CardVariant.text}
                    />
                    <div className='divider'/>
                    <Card
                        title='James family announces cause of Bronnys cardiac arrest'
                        description='Example Hero Description'
                        tag='NFL'
                        url=''
                        variant={CardVariant.text}
                    />
                </GridCol>
                <GridCol {...item5} area='ad'>
                    <div className='ad'>
                        AD BLOCK
                    </div>
                </GridCol>
            </GridRow>
            <div className='rail'>
                RIGHT RAIL 350PX WIDTH
            </div>
        </section>
    );



    /* return (
        <section className='main'>
            <GridRow>
                <GridCol {...item1}>
                    <Card
                        title='Title'
                        description='Example Description that goes across multiple lines'
                        tag='nfl'
                        url=''
                        variant={CardVariant.vertical}
                    />
                </GridCol>
                <GridCol {...item2}>
                    <Card
                        title='Title'
                        description='Example Description that goes across multiple lines'
                        tag='nfl'
                        url=''
                        variant={CardVariant.hero}
                    />
                </GridCol>
                <GridCol {...item3}>
                    <Card
                        title='Title'
                        description='Example Description that goes across multiple lines'
                        tag='nfl'
                        url=''
                        variant={CardVariant.vertical}
                    />
                </GridCol>
                <GridCol {...item4}>
                    <Card
                        title='Title'
                        description='Example Description that goes across multiple lines'
                        tag='nfl'
                        url=''
                        variant={CardVariant.vertical}
                    />
                </GridCol>
                <GridCol {...item5}>
                    <Card
                        title='Title'
                        description='Example Description that goes across multiple lines'
                        tag='nfl'
                        url=''
                        variant={CardVariant.vertical}
                    />
                </GridCol>
                <GridCol {...item6}>
                    <Card
                        title='Title'
                        description='Example Description that goes across multiple lines'
                        tag='nfl'
                        url=''
                        variant={CardVariant.vertical}
                    />
                </GridCol>
                <GridCol {...item7}>
                    <Card
                        title='Title'
                        description='Example Description that goes across multiple lines'
                        tag='nfl'
                        url=''
                        variant={CardVariant.vertical}
                    />
                </GridCol>
                <GridCol {...item8}>
                    <Card
                        title='Title'
                        description='Example Description that goes across multiple lines'
                        tag='nfl'
                        url=''
                        variant={CardVariant.vertical}
                    />
                </GridCol>
                <GridCol {...item9}>
                    <Card
                        title='Title'
                        description='Example Description that goes across multiple lines'
                        tag='nfl'
                        url=''
                        variant={CardVariant.vertical}
                    />
                </GridCol>
            </GridRow>
            <div className='rail'>
                RIGHT RAIL 350PX WIDTH
            </div>
        </section>
    ); */
};

export const GridComponent = Template.bind({});