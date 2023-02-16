import React, { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import './Button.scss';
import { Sizes, Styles, Width, Themes, Radius } from 'src/constants/constants';
import { ChevronLeft } from '../Icon/Icon';
export interface Props {

    /** Label that describes Button function */
    ariaLabel: string;

    /** Aria Required */
    ariaRequired: true;

    /** Button Text */
    children: ReactNode;

    /** Disabled State */
    disabled: boolean;

    /** URL */
    url?: string;

    /** Click Handler */
    onClick?: MouseEventHandler<HTMLButtonElement>;

    /** Button Type */
    type: "button";

    /** Corner Radius */
    radius: Radius;

    /** Button Sizes */
    size: Sizes;

    /** Button Styles */
    style: Styles;

    /** Theme */
    theme: Themes;

    /** Width Types */
    width: Width;

    /** Icon */
    icon: Boolean;
}

/** Foundational set of buttons that are used for primary, secondary, and tertiary actions within a page */
export const Button = ({
    ariaLabel = 'a11y label',
    ariaRequired,
    children,
    disabled = false,
    radius = '8',
    style = 'primary',
    size = 'large',
    theme = 'light',
    url,
    width,
    icon = false,
}: Props) => {
    const buttonClasses = classNames(
        `button`,
        `button__${theme}__${style}`,
        `button__${size}`,
        `button__${width}`,
        `radius__${radius}`
    )
    let content;
    if (url) {        
        content = (
            <a 
                className={buttonClasses}
                aria-label={ariaLabel}
                aria-required={ariaRequired}
                href={url}
            >
                {children}
            </a>        
        );
    } else if (icon) {  
        content = (
            <button 
                className={buttonClasses}
                aria-label={ariaLabel}
                aria-required={ariaRequired}
            >
                <ChevronLeft/>
                {children}
            </button>   
        )

    } else if (disabled) {
        content = (
            <button 
            className={buttonClasses}
            aria-label={ariaLabel}
            aria-required={ariaRequired}
            disabled
        >
            {children}
        </button>  
        )
    } else { 
        content = (
            <button 
                className={buttonClasses}
                aria-label={ariaLabel}
                aria-required={ariaRequired}
            >
                {children}
            </button>        
        );

    }

    return (
        content
    );
}
