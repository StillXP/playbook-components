import React from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';
import { Logo } from '../Logo/Logo';

export enum CardVariant {
    'vertical' = 'vertical',
    'horizontal' = 'horizontal',
    'hero' = 'hero',
    'subHero' = 'subHero',
    'text' = 'text',
}

export interface CardProps {
    customStyle?: string;
    description?: string;
    tag?: string;
    title?: string;
    url: string;
    variant?: CardVariant;
}

const Card: React.FC<CardProps> = ({
    customStyle,
    description,
    tag,
    title,
    url,
    variant
}) => {
    
    const cardClasses = classNames(
        styles.card,
        customStyle && customStyle,
        `card`,
        `card__${variant}`,
    );

    let content;
    content = (
        <li className='list-item'>
            <a className={cardClasses} href={url}>
                {(variant != CardVariant.text) && <div className="thumbnail"></div>}
                <div className="text">
                    <div className="title">{title}</div>
                    {(variant = CardVariant.hero) && <div className="description">{description}</div>}
                    <div className="metadata">
                        <Logo size="100" image="Official"/>
                        <div className="tag">
                            {tag}
                        </div>
                    </div>
                </div>
            </a>
        </li>
    )
    return content;
}

export default Card;