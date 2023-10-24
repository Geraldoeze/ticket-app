import React from 'react';

export default function Password({
    label,
    value,
    onChange,
    id,
    name,
    classNames,
    isRequired,
    disabled,
    maxLength,
    minLength,
    placeholder,
    togglePassword,
    description,
    error,
    onTogglePassword
}: {
    label: string;
    value: string;
    onChange: (val: string) => void;
    id: string;
    name: string;
    classNames?: string;
    isRequired?: boolean;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    placeholder: string;
    description?: string;
    error?: string;
    togglePassword: boolean;
    onTogglePassword: (val: boolean) => void;
}) {
    const containerClass = classNames ? 'w-full ' + classNames : 'w-full';
    const requiredField = isRequired ? <span className='text-danger'>&#42;</span> : null;

    return (
        <div className={containerClass}>
            <label
                className='mb-3 block text-sm font-medium text-black dark:text-white'
                htmlFor='password'
            >
                {label}{requiredField}
            </label>
            <div className='relative'>
                <input
                    disabled={!!disabled}
                    aria-aria-disabled={!!disabled}
                    className='w-full rounded border border-stroke bg-gray py-3 pl-4.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                    type={togglePassword ? 'text' : 'password'}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    name={name || 'password'}
                    id={id || 'password'}
                    placeholder={placeholder || '************'}
                    maxLength={maxLength}
                    minLength={minLength}
                />
                <span className='absolute right-4 top-4'>
                    {
                        togglePassword ? (
                            <div>
                                <span
                                    className='font-bold cursor-pointer' 
                                    onClick={() => onTogglePassword(!togglePassword)}>
                                    hide
                                </span>
                            </div>
                        ) : (
                            <div>
                                <span
                                    className='font-bold cursor-pointer'
                                    onClick={() => onTogglePassword(!togglePassword)}>
                                    show
                                </span>
                            </div>
                        )
                    }
                </span>
            </div>
            {description && !error ? (<small>{description}</small>) : null}
            {error ? (<small className='text-danger'>{error}</small>) : null}
        </div>
    )
}
