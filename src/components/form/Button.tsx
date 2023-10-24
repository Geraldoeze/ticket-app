import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    text?: string;
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    variant: 'primary' | 'secondary';
    classNames?: string;
    btnClass?: string;
    isLoading?: boolean;
    isLoadingText?: string;
    style?: {};
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
    children, 
    text, 
    disabled,
    type, 
    onClick, 
    variant = 'primary', 
    classNames, 
    isLoading, 
    style,
    isLoadingText, 
}) => {
    let cls = classNames ? ' ' + classNames : '';
    let vCls = variant === 'primary'
    ? 'flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1'
    : 'flex justify-center rounded bg-white py-2 px-6 font-medium text-black hover:shadow-1';
    let classes = vCls + '' + cls 
    let dspText = isLoading ? isLoadingText : text || children
    return (
        <div className='flex justify-end gap-4.5'>
            <button
            style={style}
                disabled={disabled}
                aria-disabled={disabled}
                onClick={onClick}
                className={classes}
                type={type}
            >
                {dspText}
            </button>
        </div>
    )

}
export default Button;