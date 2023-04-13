import './button.styles.scss'
import React from 'react';

type TypesButtonProps = {
    className: string;
    children: React.ReactNode;
    onClick: () => void;
}

const Button = (props: TypesButtonProps) => {
    let { className, children, ...rest } = props;


    return <button {...rest} type='button' className={className}>
        {children}
    </button>
}

export default Button