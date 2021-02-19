import React, {useState} from 'react';
import {Merchant} from 'models/merchant.types';
import {LinkButton} from 'shared/linkButton/linkButton.component';
import {useDispatch} from 'react-redux';
import {togglePropertyIsBill} from 'store/merchants/merchants.action';
import './merchantsRow.scss'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/all';

export interface MerchantRowProps {
    merchant: Merchant
}

export const MerchantRow = ({merchant: {name, id, isBill, transactions}}: MerchantRowProps) => {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={'merchant-row-container'}>
            <div className={'merchant-row'}>
                <div onClick={() => setOpen(prevState => !prevState)} className={'merchant-name-container'}>
                    <div>{isOpen ?
                        <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</div>
                    <span className={'name'}>{name}</span>
                </div>
                <LinkButton onClick={() => dispatch(togglePropertyIsBill({id, value: !isBill}))}
                            content={isBill ? 'Remove bill' : 'Add as bill'}/>
            </div>
            <div style={isOpen ? {} : {display: 'none'}}>
                {transactions.map(transaction =>
                    <div key={transaction.id} className={'transaction-item'}>
                        <span className={'transaction-date'}>{transaction.date}</span>
                        <span>{transaction.amount} $</span>

                    </div>)}
            </div>
        </div>
    )
};
