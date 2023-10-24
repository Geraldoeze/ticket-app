import React from "react";
import {BsPersonAdd, BsFiletypeXlsx} from 'react-icons/bs';
import {FiFilter, FiDownloadCloud} from 'react-icons/fi';
import {AiOutlinePlus, AiFillDelete, AiOutlineFolderView} from 'react-icons/ai';
import {BiPrinter, BiEdit} from 'react-icons/bi';


interface ButtonProps {
    children?: React.ReactNode;
    text?: string;
    disabled?: boolean;
    size?: 'xsm' |'sm' | 'md' | 'lg';
    variant?: 'primary' | 'outline' | 'rounded';
    classNames?: string;
    btnProps?: any;
    elevation?: number;
    width?: string;
    height?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

interface ButtonEventProps {
    children?: React.ReactNode;
    disabled?: boolean;
    variant?: 'user' | 'filter' | 'add' | 'download' | 'sheet' | 'print' | 'delete' | 'view' | 'edit';
    onClick: () => void;
    hide?: boolean;
}

export const ButtonEventGroup: React.FC<{children: React.ReactNode; dir?: 'left' | 'right'}> = ({children, dir}) => (
    <div className={`flex flex-row flex-wrap gap-1 items-center ${dir === 'left' ? 'justify-start' : 'justify-end'}`}>{children}</div>
)

export const ButtonEvent: React.FC<ButtonEventProps> = ({variant, children, disabled, onClick, hide}) => {
    const icon = variant === 'user' ? <BsPersonAdd/> 
    : variant === 'filter' ? <FiFilter/> 
    : variant === 'download' ? <FiDownloadCloud/>
    : variant === 'sheet' ? <BsFiletypeXlsx/>
    : variant === 'print' ? <BiPrinter/>
    : variant === 'delete' ? <AiFillDelete/>
    : variant === 'view' ? <AiOutlineFolderView/>
    : variant === '' ? <BiEdit/>
    : <AiOutlinePlus/>

    return !hide ? <div aria-disabled={disabled} onClick={() => !disabled ? onClick() : () => {}} className='flex flex-row items-center justify-end py-1 px-4 ml-2 border cursor-pointer
    font-medium text-black dark:text-white'>{icon} &nbsp;&nbsp;{children}
    </div> : null;
}

export default function Button({ 
    children, 
    text, 
    disabled, 
    onClick, 
    size, 
    variant = 'primary', 
    classNames, 
    btnProps,
    elevation, 
    width,
    height,
}: ButtonProps){
    let cls = classNames ? 'flex justify-end gap-4.5 ' + classNames : 'flex justify-end gap-4.5';
    let btnCls = variant === 'primary'
        ? 'flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray rounded'
        : variant === 'rounded' ? 'rounded-full bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white w-12 h-12 flex items-center justify-center'
        : 'flex justify-center rounded bg-white py-2 px-6 font-medium text-black rounded'
    btnCls = size === 'xsm' ? btnCls +' w-10' : size === 'sm' ? btnCls +' w-32' : size === 'md' ? btnCls + ' w-64' : size === 'lg' ? btnCls + ' w-128': ' w-100';
    btnCls = elevation ? btnCls +' hover:shadow-'+elevation : btnCls;
    btnCls = width ? btnCls +' w-'+width : btnCls;
    btnCls = height ? btnCls +' h-'+height : btnCls;

    return (
        <div className={cls}>
            <button
                disabled={disabled}
                aria-disabled={disabled}
                onClick={onClick}
                className={btnCls}
                type='submit'
                {...btnProps}
            >
                {text || children}
            </button>
        </div>
    )

}