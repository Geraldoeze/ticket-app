const InputWithIcon = ({
    label,
    value,
    onChange,
    id,
    name,
    classNames,
    isRequired,
    disabled,
    inputType = 'text',
    placeholder,
    children,
    leftIcon,
    rightIcon,
    inputProps,
}) => {
    const containerClass = classNames ? 'w-fulls ' + classNames : 'w-fulls';
    const requiredField = isRequired ? <span className='text-danger'>&#42;</span> : null;

    return (
        <div className={containerClass}>
            <label
                className='mb-3 block text-sm font-medium text-black dark:text-white'
                htmlFor={name}
            >
                {label}{requiredField}
            </label>
            <div className='relative'>
                {
                    leftIcon ? (
                        <span className='absolute left-4.5 top-4'>
                            {children}
                        </span>
                    ) : null
                }
                <input
                    disabled={disabled}
                    aria-disabled={disabled}
                    className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                    type={inputType}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    {...inputProps}
                />
                {
                    rightIcon ? (
                        <span className='absolute left-4.5 top-4'>
                            {children}
                        </span>
                    ) : null
                }
            </div>
        </div>
    )
}

export default InputWithIcon;