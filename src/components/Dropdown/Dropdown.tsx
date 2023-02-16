import React, { useState, MouseEventHandler, ReactNode} from 'react';
import classNames from 'classnames';
import './Dropdown.scss';
import { Sizes, Width, States } from 'src/constants/constants';
import { ChevronUp, ChevronDown } from '../Icon/Icon';

export interface Props {

    ariaLabel: string;

    ariaRequired: true; 

    label: ReactNode;

    option: ReactNode;

    errorMessage: ReactNode;

    type: "dropdown";

    selected: Boolean;

    size: Sizes;

    state: States;

    width: Width;

}

export const Dropdown = ({
    ariaLabel = 'a11y label',
    ariaRequired,
    label = 'Label',
    option = 'Option',
    errorMessage = 'Error Message',
    selected = false,
    size = 'large',
    state = 'default',
    width,
}: Props) => {
    const [dropdownState, setState] = useState(state);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [isLabel, toggleLabel] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
        toggleLabel(!isLabel);
    };

    const isDefault = () => {
        setState('default');
    }

    const isError = () => {
        setState('error');
        setError(true);
    }    

    const isActive = () => {
        setState('active');
        toggleLabel(true);

    }

    const dropdownClasses = classNames(
        `dropdown`,
        `dropdown__${dropdownState}`,
        `dropdown__${size}`,
        `dropdown__${width}`
    )
    
    let content;

    content = (
        <div
            className='container'
        >
            <span
                className={dropdownClasses}
                aria-label={ariaLabel}
                aria-required={ariaRequired}
                onClick={handleOpen}
            >
                {isLabel ? (
                    <span className='text'>
                        <span className='label'> {label} </span>
                        <span className='option'> {option} </span>
                    </span>
                ):(
                    <span className='text'>
                        <span className='option'> {option} </span>
                    </span>
                )
                }

                {open ? 
                    <span className='icon'> <ChevronUp/> </span>
                :
                    <span className='icon'> <ChevronDown/> </span>
                }
            </span>

            {dropdownState === 'error' ?
                <span
                    className='dropdown__error__message'
                >
                    {errorMessage}
                </span>
                :
                null
            }

        </div>
    )
    

    return (
        content
    );
}