import React, { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import './Button.scss';
import { ButtonSizes, ButtonTypes, ButtonWidth, Themes } from 'src/constants/constants';
import { ChevronLeft } from '../Icon/Icon';
export interface Props {
    
    /** Button Text */
    children: ReactNode;

    /** URL */
    url?: string;

    /** Click Handler */
    onClick?: MouseEventHandler<HTMLButtonElement>;

    /** Button Types */
    type: ButtonTypes;

    /** Button Sizes */
    size: ButtonSizes;

    /** Theme */
    theme: Themes;

    /** Width Types */
    width: ButtonWidth;

    /** Icon */
    icon: Boolean;
}

/** Foundational set of buttons that are used for primary, secondary, and tertiary actions within a page */
export const Button = ({
    children,
    type = 'primary',
    size = 'large',
    theme = 'light',
    url,
    width,
    icon,
}: Props) => {
    const buttonClasses = classNames(
        `button`,
        `button__${theme}__${type}`,
        `button__${size}`,
        `button__${width}`,
    )
    let content;
    if (url) {        
        content = (
            <a 
                className={buttonClasses}
                href={url}
            >
                {children}
            </a>        
        );
    } else if (icon) {  
        content = (
            <button className={buttonClasses}>
                <ChevronLeft/>
                {children}
            </button>   
        )

    } else { 
        content = (
            <button 
                className={buttonClasses}
            >
                {children}
            </button>        
        );

    }

    return (
        content
    );
}
