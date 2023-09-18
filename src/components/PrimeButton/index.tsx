import React from 'react';
import classNames from 'classnames';
import styles from './PrimeButton.module.scss';
import { Themes } from 'src/constants/constants';
import { ArrowBack, ArrowForward } from '../Icon/Icon';
import DynamicLogo from '../DynamicLogo';

export enum ButtonSizes {
    'small' = 'small',
    'medium' = 'medium',
    'large' = 'large',
}

export enum ButtonTypes {
    'primary' = 'primary',
    'secondary' = 'secondary',
    'tertiary' = 'tertiary',
}

export interface ButtonProps {
    children?: React.ReactNode;
    customClass?: string,
    dataTracking?: string,
    dataAttr?: { [key: string]: string},
    disabled?: boolean,
    externalUrl?: string,
    hasLeftArrow?: boolean,
    hasRightArrow?: boolean,
    iconLeft?: string,
    iconRight?: string,
    isLoading?: boolean,
    isResponsive?: boolean,
    newWindow?: boolean,
    onClick?: () => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
    size?: ButtonSizes;
    testId?: string;
    theme?: Themes,
    type?: ButtonTypes,
    url?: string;
}

const PrimeButton: React.FC<ButtonProps> = ({
    children,
    customClass,
    dataTracking,
    disabled,
    dataAttr,
    externalUrl,
    hasLeftArrow,
    hasRightArrow,
    iconLeft,
    iconRight,
    isLoading,
    isResponsive,
    newWindow,
    onClick,
    onKeyDown,
    size = ButtonSizes.small,
    testId,
    theme = 'light',
    type = ButtonTypes.primary,
    url,
}) => {
    const buttonClasses = classNames(
        customClass,
        styles.button,
        `button`,
        `button__${type}`,
        size && `button__${size}`,
        theme && `button__${theme}`,
        disabled ? `button__disabled` : `button__enabled`,
        isLoading && `button__loading`,
        isResponsive && `button__responsive`,
    );
    const isTrackingValid = dataTracking !== undefined && dataTracking !== '';
    function handleDisabledEvent(e: { preventDefault: () => void; }) {
        e.preventDefault();
    }

    let content;
    if (externalUrl) {
        content = (
            <a
                {...dataAttr}
                className={buttonClasses}
                data-testid={testId}
                data-tracking={isTrackingValid ? dataTracking : undefined}
                href={externalUrl}
                onClick={disabled
                    ? handleDisabledEvent
                    : onClick}
                {...newWindow && ({
                    target: '_blank',
                })}
            >
                {isLoading ? (
                    // <NavMore2 /> svg version below broken down to animate loading dots
                    <svg className={`loadingSvg`} height="14" width="40">
                        <circle className={`dotFlashing`} cx="10" cy="7" r="3" />
                        <circle className={`dotFlashing`} cx="20" cy="7" r="3" />
                        <circle className={`dotFlashing`} cx="30" cy="7" r="3" />
                    </svg>
                ) : (
                    <div className={`button__content`}>
                        {/* Left Arrow  */}
                        {hasLeftArrow && (
                            <ArrowBack className={`icon icon__left`} height="100%" />
                        )}

                        {/* Any Left Icon */}
                        {iconLeft && (
                            <DynamicLogo customStyleLogo={`icon icon__left`} iconName={iconLeft} />
                        )}

                        { children }

                        {/* Right Arrow  */}
                        {iconRight && (
                            <DynamicLogo customStyleLogo={`icon icon__right`} iconName={iconRight} />
                        )}

                        {/* Any Right Icon */}
                        {hasRightArrow && (
                            <ArrowForward className={`icon icon__right`} height="100%" />
                        )}
                    </div>
                ) }
            </a>
        );
    } else if (url) {
        content = (
            <a
                {...dataAttr}
                className={buttonClasses}
                data-testid={testId}
                data-tracking={isTrackingValid ? dataTracking : undefined}
                href={url}
                onClick={disabled
                    ? handleDisabledEvent
                    : onClick}
                {...newWindow && ({
                    target: '_blank',
                })}
            >
                {isLoading ? (
                    <svg className={`loadingSvg`} height="14" width="40">
                        <circle className={`dotFlashing`} cx="10" cy="7" r="3" />
                        <circle className={`dotFlashing`} cx="20" cy="7" r="3" />
                        <circle className={`dotFlashing`} cx="30" cy="7" r="3" />
                    </svg>
                ) : (
                    <div className={`button__content`}>
                        {hasLeftArrow && (
                            <ArrowBack className={`icon icon__left`} height="100%" />
                        )}

                        {iconLeft && (
                            <DynamicLogo customStyleLogo={`icon icon__left`} iconName={iconLeft} />
                        )}

                        { children }

                        {iconRight && (
                            <DynamicLogo customStyleLogo={`icon icon__right`} iconName={iconRight} />
                        )}

                        {hasRightArrow && (
                            <ArrowForward className={`icon icon__right`} height="100%" />
                        )}
                    </div>
                ) }
            </a>
        );
    } else {
        content = (
            <button
                {...dataAttr}
                className={buttonClasses}
                data-testid={testId}
                onClick={disabled ? handleDisabledEvent : onClick}
                onKeyDown={disabled ? handleDisabledEvent : onKeyDown}
                type="button"
            >
                {isLoading ? (
                    <svg className={`loadingSvg`} height="14" width="40">
                        <circle className={`dotFlashing`} cx="10" cy="7" r="3" />
                        <circle className={`dotFlashing`} cx="20" cy="7" r="3" />
                        <circle className={`dotFlashing`} cx="30" cy="7" r="3" />
                    </svg>
                ) : (
                    <div className={`button__content`}>
                        {hasLeftArrow && (
                            <ArrowBack className={`icon icon__left`} height="100%" />
                        )}

                        {iconLeft && (
                            <DynamicLogo customStyleLogo={`icon icon__left`} iconName={iconLeft} />
                        )}

                        { children }

                        {iconRight && (
                            <DynamicLogo customStyleLogo={`icon icon__right`} iconName={iconRight} />
                        )}

                        {hasRightArrow && (
                            <ArrowForward className={`icon icon__right`} height="100%" />
                        )}
                    </div>
                ) }
            </button>
        );
    }

    return content;
};

export default PrimeButton;