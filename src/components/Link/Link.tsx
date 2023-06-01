import React from 'react';
import classNames from 'classnames';
import './Link.scss';

export interface Props {

    /** Link Text */
    children: string;

    /** URL */
    url: string;

}

export const Link = ({
    children,
    url
}: Props) => {
    const linkClasses = classNames(
        'link'
    )
    let content;
    content = (
        <li>
            <a
                className={linkClasses}
                href={url}
            >
                {children}
            </a>
        </li>
    );

    return content;
}