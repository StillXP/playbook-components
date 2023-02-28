import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import './DropdownMenu.scss';
import { ChevronDown, ChevronUp } from '../Icon/Icon';
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
        
        <div className='wrapper'>
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
                <span className='icon'> {isOpen ? <ChevronUp/> : <ChevronDown/>} </span>
            </div>
            {errorState && <div className='error'> {errorMessage} </div>}
            {isOpen && (
                <div
                    className='list'
                    ref={menuRef}
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
                            <span className='item__title'>{item.title}</span>
                            {item.description != '' && <span className='item__description'> {item.description} </span>}
                        </button>
                    )}
                </div>
            )}
        </div>
    );

};

export default DropdownMenu;