import React from 'react';
import classNames from 'classnames';
import { Themes, IconSizes } from 'src/constants/constants';
import * as Icons from '../Icon/Icon';
import styles from './DynamicLogo.module.scss';

export interface IDynamicLogo {
    customStyleLogo?: string;
    iconName?: string;
    theme?: Themes;
    size?: IconSizes;
}

const DynamicLogo: React.FC<IDynamicLogo> = ({
    customStyleLogo,
    iconName,
    theme,
    size,
}) => {
    let MatchedIcon;

    if (iconName) {
        const IconComponent = Object.entries(Icons).find((Value) => Value[0] === iconName);
        MatchedIcon = IconComponent ? IconComponent[1] : null;
    }

    if (MatchedIcon) {
        return (
            <MatchedIcon className={classNames(
                customStyleLogo,
                styles.icon,
                `icon`,
                `icon__${size}`,
                `icon__${theme}`
            )}
            />
        );
    }
    return null;
};

export default DynamicLogo;