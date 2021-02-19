import React, {useState, useEffect, useRef} from 'react';
import './accordion.scss';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/all';


interface AccordionProps {
    children: JSX.Element | JSX.Element[],
    onClick: () => void,
}

const Accordion = ({children, onClick}: AccordionProps) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={'accordion'}>
            <div onClick={() => setOpen(prevState => !prevState)}>{isOpen ? <MdKeyboardArrowDown/> :
                <MdKeyboardArrowUp/>}</div>
            <div>{children}</div>
        </div>

    )
};

export default Accordion;
