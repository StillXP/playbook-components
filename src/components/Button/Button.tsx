import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import './Button.scss';
import { Sizes, Styles, Width, Themes, Radius } from 'src/constants/constants';
import * as icons from '../Icon/Icon';
export interface Props {

    /** Label that describes Button function */
    ariaLabel: string;

    /** Aria Required */
    ariaRequired: true;

    /** Button Text */
    children: string;

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
    icon: boolean;

    /** Logo */
    logo: boolean;
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
    logo = false
}: Props) => {
    const buttonClasses = classNames(
        `button`,
        `button__${theme}__${style}`,
        `button__${size}`,
        `button__${width}`,
        `radius__${radius}`,
        disabled && `button__${theme}__${style}__disabled` 
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
                {(icon && size != 'small') && <span className={classNames(
                    `button__icon`,
                    `button__icon__${size}`
                )}><icons.PlayCircle/></span>}
                {children}
                {(logo && size != 'small') && <span className={classNames(
                    `button__logo`,
                    `button__logo__${size}`
                )}></span>}
            </a>        
        );
    } else { 
        content = (
            <button 
                className={buttonClasses}
                aria-label={ariaLabel}
                aria-required={ariaRequired}
            >
                {(icon && size != 'small') && <span className={classNames(
                    `button__icon`,
                    `button__icon__${size}`
                )}><icons.PlayCircle/></span>}
                {children}
                {(logo && size != 'small') && <span className={classNames(
                    `button__logo`,
                    `button__logo__${size}`
                )}></span>}
            </button>        
        );

    }

    return (
        content
    );
}
