import classNames from "classnames";
import React from "react";
import './Headshot.scss';


export interface Props {
    size?: '200' | '250' | '300' | '400' | '450' | '500' | '600' 
    image: 'Default' | 'Official'
}

export const Headshot = ({
    size,
    image = 'Default'
}: Props) => {
    const headshotClasses = classNames(
        `headshot`,
        `headshot__${size}`
    )
    const imgPath = '/headshot/' + image + '.png';
    let content = (
        <img className={headshotClasses} src={imgPath} alt="image"/>
    )
    return content;
}
