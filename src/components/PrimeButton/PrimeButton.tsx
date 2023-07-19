import React from 'react';
import classNames from 'classnames';
import './PrimeButton.scss';
import { Sizes, Styles, Themes } from 'src/constants/constants';

export interface Props {
    children: string;
    size: Sizes;
    style: Styles;
    theme: Themes;
    url?: string;
}

export const PrimeButton = ({
    children,
    size = 'large',
    style = 'primary',
    theme = 'light',
    url = '#'
}: Props) => {
    const classes = classNames(
        `button`,
        `button_${theme}__${style}`,
        `button_${size}`,
    )
    let content;
    content = (
        <a
            className={classes}
            href={url}
        >{children}
        </a>
    )
    return content;
}