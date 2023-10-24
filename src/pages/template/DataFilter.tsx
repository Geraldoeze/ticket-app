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

type TeachersFilterProps = {
    onFilter: (data: any) => void;
    onCancel: () => void;
}

export default function TeachersFilter(props: TeachersFilterProps) {
    const [ages, setAges] = React.useState<any>({});
    const [gender, setGender] = React.useState<any>({});
    const [status, setStatus] = React.useState<any>({});
    const [edu, setEdu] = React.useState<any>({});

    const handleCheckedEvent = (key: string, val: string) => {
        if (key.match(/age-(\w+)/)) {
            if (ages[key]) {
                let ns = Object.assign({}, status);
                delete ns[key];
                setAges(ns);
            } else {
                setAges((ps: any) => ({ ...ps, [key]: val }))
            }
        }

        if (key.match(/status-(\w+)/)) {
            if (ages[key]) {
                let ns = Object.assign({}, status);
                delete ns[key];
                setStatus(ns);
            } else {
                setStatus((ps: any) => ({ ...ps, [key]: val }))
            }
        }

        if (key.match(/gender-(\w+)/)) {
            if (ages[key]) {
                let ns = Object.assign({}, status);
                delete ns[key];
                setGender(ns);
            } else {
                setGender((ps: any) => ({ ...ps, [key]: val }))
            }
        }

        if (key.match(/edu-(\w+)/)) {
            if (ages[key]) {
                let ns = Object.assign({}, status);
                delete ns[key];
                setEdu(ns);
            } else {
                setEdu((ps: any) => ({ ...ps, [key]: val }))
            }
        }
    }

    const handleFilter = () => {
        props.onFilter({
            age: ages,
            education: edu,
            gender,
            status,
        })
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-5">
                {/* Column 1: */}
                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">Age</h3>
                        <Checkbox name="age-18-24" value="18-24" isSelected={ages['age-18-24']} onChecked={handleCheckedEvent} />
                        <Checkbox name="age-25-30" value="24-30" isSelected={ages['age-25-30']} onChecked={handleCheckedEvent} />
                        <Checkbox name="age-31-35" value="31-35" isSelected={ages['age-31-35']} onChecked={handleCheckedEvent} />
                        <Checkbox name="age-36-40" value="36-40" isSelected={ages['age-36-40']} onChecked={handleCheckedEvent} />
                        <Checkbox name="age-above-40" value="above 40" isSelected={ages['age-above-40']} onChecked={handleCheckedEvent} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Gender</h3>
                        <Checkbox name="gender-male" value="male" isSelected={gender['gender-male']} onChecked={handleCheckedEvent} />
                        <Checkbox name="gender-female" value="female" isSelected={gender['gender-female']} onChecked={handleCheckedEvent} />
                        <Checkbox name="gender-other" value="other" isSelected={gender['gender-other']} onChecked={handleCheckedEvent} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Status</h3>
                        <Checkbox name="status-pending" value="pending" isSelected={status['status-pending']} onChecked={handleCheckedEvent} />
                        <Checkbox name="gender-active" value="active" isSelected={status['status-active']} onChecked={handleCheckedEvent} />
                        <Checkbox name="gender-suspended" value="suspended" isSelected={status['status-suspended']} onChecked={handleCheckedEvent} />
                        <Checkbox name="gender-transfered" value="transfered" isSelected={status['status-transfered']} onChecked={handleCheckedEvent} />
                    </div>
                </div>

                {/* Column 2: Gender filter */}
                <div>
                    <div className="mb-2">
                        <h3 className="text-lg font-bold">Education</h3>
                        <Checkbox name="edu-high-school" value="High School" isSelected={ages['edu-high-school']} onChecked={handleCheckedEvent} />
                        <Checkbox name="edu-college" value="College" isSelected={ages['edu-college']} onChecked={handleCheckedEvent} />
                        <Checkbox name="edu-ond" value="OND" isSelected={ages['edu-ond']} onChecked={handleCheckedEvent} />
                        <Checkbox name="edu-hnd" value="HND" isSelected={ages['edu-hnd']} onChecked={handleCheckedEvent} />
                        <Checkbox name="edu-bsc" value="BSc" isSelected={ages['edu-bsc']} onChecked={handleCheckedEvent} />
                        <Checkbox name="edu-msc" value="Msc" isSelected={ages['edu-msc']} onChecked={handleCheckedEvent} />
                        <Checkbox name="edu-phd" value="PHD" isSelected={ages['edu-phd']} onChecked={handleCheckedEvent} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Privileges</h3>
                        <Checkbox name="privilege-admin" value="Admin" isSelected={ages['privilege-admin']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-account" value="Accountant" isSelected={ages['privilege-account']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-registrar" value="Registrar" isSelected={ages['privilege-registrar']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-admission" value="Admission" isSelected={ages['privilege-admission']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-hostel" value="Hostel" isSelected={ages['privilege-hostel']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-academic" value="Academic" isSelected={ages['privilege-academic']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-facilities" value="Facilities" isSelected={ages['privilege-facilities']} onChecked={handleCheckedEvent} />
                        <Checkbox name="privilege-vehicles" value="Vehicles" isSelected={ages['privilege-vehicles']} onChecked={handleCheckedEvent} />
                    </div>
                </div>

                {/* Column 3: Employment date, Status, Class name match filters */}
                <div>
                    <div className="mb-2">
                        <h3 className="text-lg font-bold">Class</h3>
                        <Checkbox name="kg" value="KG & Nurs" isSelected={ages['cls-kg-nurs']} onChecked={handleCheckedEvent} />
                        <Checkbox name="pry-1-6" value="Primary" isSelected={ages['pri-1-6']} onChecked={handleCheckedEvent} />
                        <Checkbox name="pry-1-3" value="PRI 1-3" isSelected={ages['pri-1-3']} onChecked={handleCheckedEvent} />
                        <Checkbox name="pri-4-6" value="PRI 4-6" isSelected={ages['pri-4-6']} onChecked={handleCheckedEvent} />
                        <Checkbox name="sec-1-6" value="Secondary" isSelected={ages['sec-1-6']} onChecked={handleCheckedEvent} />
                        <Checkbox name="sec-1-3" value="JSS 1-3" isSelected={ages['sec-1-3']} onChecked={handleCheckedEvent} />
                        <Checkbox name="sec-4-6" value="SSS 1-3" isSelected={ages['SSS 1-3']} onChecked={handleCheckedEvent} />
                        <Checkbox name="sec-4-6" value="SSS 1-3" isSelected={ages['SSS 1-3']} onChecked={handleCheckedEvent} />
                    </div>
                    <div className="mb-2">
                        <h3 className="text-lg font-bold">Teacher Type</h3>
                        <Checkbox name="type-fulltime" value="full-time" isSelected={ages['type-fulltime']} onChecked={handleCheckedEvent} />
                        <Checkbox name="type-parttime" value="part-time" isSelected={ages['type-parttime']} onChecked={handleCheckedEvent} />
                        <Checkbox name="type-subtitute" value="subtitute" isSelected={ages['type-subtitute']} onChecked={handleCheckedEvent} />
                        <Checkbox name="type-contract" value="contract" isSelected={ages['type-contract']} onChecked={handleCheckedEvent} />
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
