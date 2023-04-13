import './button.styles.scss'
import React from 'react';

type TypesButtonProps = {
    className: string;
    children: React.ReactNode
}

const Button = (props: TypesButtonProps) => {
    let { className, children } = props;


    return <button type='button' className={className}>
        {children}
    </button>
}

export default Button