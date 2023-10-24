import React, { Fragment } from 'react';

const Checkbox: React.FC<{
    isSelected: boolean;
    value: string;
    name: string;
    onChecked: (name: string, value: string) => void;
}> = ({ isSelected, onChecked, value, name }) => (
    <div className="my-2">
        <input value={value} checked={isSelected} onChange={() => onChecked(name, value)} type="checkbox" id={name} />
        <label htmlFor={name} className="ml-2">{value}</label>
    </div>
)

type QuestionFilterProps = {
    onFilter: (data: any) => void;
    onCancel: () => void;
}

export default function QuestionFilter(props: QuestionFilterProps) {
    const [name, setName] = React.useState<any>({});
    const [code, setCode] = React.useState<any>({});
    const [category, setCategory] = React.useState<any>({});
    const [edu, setEdu] = React.useState<any>({});

    const handleCheckedEvent = (key: string, val: string) => {
        if (key.match(/name-(\w+)/)) {
            if (name[key]) {
                let ns = Object.assign({}, name);
                delete ns[key];
                setName(ns);
            } else {
                setName((ps: any) => ({ ...ps, [key]: val }))
            }
        }

        if (key.match(/code-(\w+)/)) {
            if (code[key]) {
                let ns = Object.assign({}, code);
                delete ns[key];
                setCode(ns);
            } else {
                setCode((ps: any) => ({ ...ps, [key]: val }))
            }
        }

        if (key.match(/gender-(\w+)/)) {
            if (category[key]) {
                let ns = Object.assign({}, category);
                delete ns[key];
                setCategory(ns);
            } else {
                setCategory((ps: any) => ({ ...ps, [key]: val }))
            }
        }
    }

    const handleFilter = () => {
        props.onFilter({
            name: name,
            code: code,
            category,
            status,
        })
    }

    return (
        <div>
            <div className="grid grid-cols-12 md:grid-cols-3 gap-3 text-left mb3">
                {/* Column 1: */}
                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Category</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Difficulty Level</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Question Type</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Question ID</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>

                </div>

                {/* Column 2: Gender filter */}
                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Keyword</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold"> Creation Date</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Modified Date</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>
                    

                </div>

                {/* Column 3: Employment date, Status, Class name match filters */}
                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Author/Creator</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Tag/Label</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Sorting Option</h3>
                        <Checkbox name="Ascending" value="ascending" isSelected={name} onChecked={handleCheckedEvent} />
                        <Checkbox name="Descending" value="descending" isSelected={name} onChecked={handleCheckedEvent} />
                    </div>
                </div>
            </div>



            <div className="-mx-3 flex flex-wrap gap-y-4">
                <div className="w-full px-3 2xsm:w-1/2">
                    <button type="button" onClick={() => props.onCancel()}
                        className="block w-full rounded border border-stroke bg-gray p-3 text-center 
                    font-medium text-black transition hover:border-primary hover:bg-primary
                    hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white 
                    dark:hover:primary dark:hover:primary">
                        Cancel
                    </button>
                </div>
                <div className="w-full px-3 2xsm:w-1/2">
                    <button type="button" onClick={handleFilter}
                        className="block w-full rounded border border-primary bg-primary p-3 text-center 
                    font-medium text-white transition hover:bg-opacity-90">
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    )
}
