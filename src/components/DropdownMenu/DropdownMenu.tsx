import React, { useState, useRef, createElement } from 'react';
import classNames from 'classnames';
import './DropdownMenu.scss';
import * as icons from '../Icon/Icon';
import { Item, DropdownSizes } from 'src/constants/constants';

export interface Props {
    title: string;
    errorMessage?: string;
    errorState: boolean;
    list?: Item[];
    size?: DropdownSizes;
}

const DropdownMenu = ({
    title = 'Title',
    errorMessage = 'Error Message',
    errorState = false,
    list = [],
    size = 'large'
}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Option');
    const [hasSelection, setHasSelection] = useState(false);
    const menuRef = useRef<HTMLInputElement>(null);

    const closeOpenMenus = (e: { target: any; }) =>{
        if(menuRef.current && isOpen && !menuRef.current.contains(e.target)){
          setIsOpen(false)
        }
    }

    document.addEventListener('mousedown',closeOpenMenus)

    const toggleClick = () => {
        setIsOpen(!isOpen);
    }

    const selectItem = (item: Item) => {
        list.forEach(i => i.selected = false);
        setSelectedItem(item.title);
        setHasSelection(true);
        setIsOpen(false);
        item.selected = true;
    }

    return (
        
        <div 
            className='wrapper'
            ref={menuRef}
        >
            <div 
                className={classNames(
                    'dropdown',
                    `dropdown__${size}`,
                    isOpen && 'dropdown__open',
                    errorState && 'dropdown__error'
                )}
                onClick={toggleClick}
            >
                <span className='data'>
                    {(size == 'large' && (hasSelection || isOpen)) && <span 
                        className={classNames(
                            'title',
                            isOpen && 'title__open',
                            errorState && 'title__error'
                        )}
                    > 
                        {title} 
                    </span>}
                    <span 
                        className={classNames(
                            'selection',
                            isOpen && 'selection__open',
                            hasSelection && 'selection__selected'
                        )}
                    > 
                        {selectedItem} </span>
                </span>
                <span className='icon'> {isOpen ? <icons.BracketsChevUp/> : <icons.BracketsChevDown/>} </span>
            </div>
            {(errorState && !isOpen) && <div className='error'> {errorMessage} </div>}
            {isOpen && (
                <div
                    className='list'
                    
                >
                    {list.map((item) => 
                        <button
                            className={classNames(
                                'item',
                                item.selected && 'item__selected'
                            )}
                            key={item.id}
                            onClick={() => selectItem(item)}
                        >
                            {item.logo && <span className='item__icon'> <icons.ArenaNfl/> </span>}
                            {item.iconLeft && <span className='item__icon'> <icons.BracketsCheck/> </span>}
                            <span className='details'>
                                <span className='item__title'>{item.title}</span>
                                {item.description != '' && <span className='item__description'> {item.description} </span>}
                            </span>
                            {item.iconRight && <span className='item__icon'> <icons.ArenaSoccer/> </span>}
                        </button>
                    )}
                </div>
            )}
        </div>
    );

};

export default DropdownMenu;