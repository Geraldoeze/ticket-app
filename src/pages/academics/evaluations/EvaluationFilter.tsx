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

type SubjectFilterProps = {
    onFilter: (data: any) => void;
    onCancel: () => void;
}


export default function EvaluationFilter(props: SubjectFilterProps) {
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
                        <h3 className="text-lg font-bold">Student ID</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />

                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Assessment Type</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />

                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Assessment Date</h3>
                        <Checkbox name="code" value="code" isSelected={category['gender-male']} onChecked={handleCheckedEvent} />

                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Max Score</h3>
                        <Checkbox name="School Teacher" value="School Teacher" isSelected={category['gender-male']} onChecked={handleCheckedEvent} />

                    </div>

                </div>

                {/* Column 2: Gender filter */}
                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Course</h3>
                        <Checkbox name="Name" value="name" isSelected={name} onChecked={handleCheckedEvent} />

                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Teacher</h3>
                        <Checkbox name="privilege-admin" value="Admin" isSelected={name['privilege-admin']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-account" value="Accountant" isSelected={name['privilege-account']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-registrar" value="Registrar" isSelected={name['privilege-registrar']} onChecked={handleCheckedEvent} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Term/Semester</h3>
                        <Checkbox name="privilege-admin" value="Admin" isSelected={name['privilege-admin']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-account" value="Accountant" isSelected={name['privilege-account']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-registrar" value="Registrar" isSelected={name['privilege-registrar']} onChecked={handleCheckedEvent} />
                    </div>
                    <div className="mb-2">
                        <h3 className="text-lg font-bold">Academic Year</h3>
                        <Checkbox name="edu-high-school" value="High School" isSelected={name['edu-high-school']} onChecked={handleCheckedEvent} />
                        <Checkbox name="edu-college" value="College" isSelected={name['edu-college']} onChecked={handleCheckedEvent} />
                        <Checkbox name="edu-ond" value="OND" isSelected={name['edu-ond']} onChecked={handleCheckedEvent} />
                    </div>

                </div>

                {/* Column 3: Employment date, Status, Class name match filters */}
                <div>
                    <div>
                        <h3 className="text-lg font-bold">Grade</h3>
                        <Checkbox name="languages" value="languages" isSelected={category['languages']} onChecked={handleCheckedEvent} />
                        <Checkbox name="sciences" value="sciences" isSelected={category['sciences']} onChecked={handleCheckedEvent} />
                        <Checkbox name="humanities" value="humanities" isSelected={category['humanities']} onChecked={handleCheckedEvent} />
                        <Checkbox name="arts" value="arts" isSelected={category['arts']} onChecked={handleCheckedEvent} />
                        <Checkbox name="vocational subjects" value="vocational subjects" isSelected={category['vocational subjects']} onChecked={handleCheckedEvent} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Term/Semester</h3>
                        <Checkbox name="privilege-admin" value="Admin" isSelected={name['privilege-admin']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-account" value="Accountant" isSelected={name['privilege-account']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-registrar" value="Registrar" isSelected={name['privilege-registrar']} onChecked={handleCheckedEvent} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Academic Year</h3>
                        <Checkbox name="privilege-admin" value="Admin" isSelected={name['privilege-admin']} onChecked={handleCheckedEvent} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Assessment Category</h3>
                        <Checkbox name="privilege-admin" value="Admin" isSelected={name['privilege-admin']} onChecked={handleCheckedEvent} />
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
