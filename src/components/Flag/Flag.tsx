import * as React from 'react';
import { ReactNode } from 'react';
import './Flag.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
        
    /** Flag Text */
    children: ReactNode;

    /** Flag Variants: */
    variant: 'live' | 'upcoming' | 'duration' | 'queue' | 'network';

}

export const Flag = ({
    children = 'Flag',
    variant = 'live',
}: Props) => {
    let content;
    
    // If statement to add the P+ logo if it's a network Flag
    if (variant === 'network'){
        content = (
            <div className={('flag' + '__' + variant) + ' flag' }>
                {children}
            </div>  
        )
    } else {
        content = (
            <div className={('flag' + '__' + variant) + ' flag' }>
                {children}
            </div>
        );
    }

    return (
        content
    )
}