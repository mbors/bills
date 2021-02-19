import React from 'react';
import './linkButton.scss';

export interface LinButtonProps {
    content: string,
    onClick: () => void
}

export const LinkButton = ({content, onClick}: LinButtonProps) => {

    return (
        <button onClick={onClick} className={'link-button'}>{content}</button>
    )
};
