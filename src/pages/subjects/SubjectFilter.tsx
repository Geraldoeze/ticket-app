import React, { Fragment, useState } from "react";
import FieldInput from "../../../components/FieldInput";

const Checkbox: React.FC<{
  isSelected: boolean;
  value: string;
  name: string;
  onChecked: (name: string, value: string) => void;
}> = ({ isSelected, onChecked, value, name }) => (
  <div className="my-2">
    <input
      value={value}
      checked={isSelected}
      onChange={() => onChecked(name, value)}
      type="checkbox"
      id={name}
    />
    <label htmlFor={name} className="ml-2">
      {value}
    </label>
  </div>
);

type SubjectFilterProps = {
  onFilter: (data: any) => void;
  onCancel: () => void;
};

export default function SubjectFilter(props: SubjectFilterProps) {
  const [name, setName] = React.useState<any>({});
  const [code, setCode] = React.useState<any>({});
  const [category, setCategory] = React.useState<any>({});
  const [edu, setEdu] = React.useState<any>({});
  const [ticketFilter, setTicketFilter] = React.useState<any>({
    title: "",
    creator: "",
    amount: "",
    priority: "",
  });

  const handleCheckedEvent = (key: string, val: string) => {
    console.log(key, val);
    setTicketFilter((e: any) => ({...e, val}))
    if (key.match(/name-(\w+)/)) {
      if (name[key]) {
        let ns = Object.assign({}, name);
        delete ns[key];
        setName(ns);
      } else {
        setName((ps: any) => ({ ...ps, [key]: val }));
      }
    }

    if (key.match(/code-(\w+)/)) {
      if (code[key]) {
        let ns = Object.assign({}, code);
        delete ns[key];
        setCode(ns);
      } else {
        setCode((ps: any) => ({ ...ps, [key]: val }));
      }
    }

    if (key.match(/gender-(\w+)/)) {
      if (category[key]) {
        let ns = Object.assign({}, category);
        delete ns[key];
        setCategory(ns);
      } else {
        setCategory((ps: any) => ({ ...ps, [key]: val }));
      }
    }
  };

  const handleFilter = () => {
    console.log(ticketFilter)
    props.onFilter({
      name: name,
      code: code,
      category,
      status,
    });
  };

  return (
    <div>
      <div className="mb3 grid grid-cols-1 gap-3 text-left sm:grid-cols-2 md:grid-cols-3">
        {/* Column 1: */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Title</h3>
            <FieldInput
              value={ticketFilter?.title}
              onChange={(val) =>
                setTicketFilter((e: any) => ({ ...e, title: val }))
              }
              placeholder="name"
              name="name"
              id="name"
              label=""
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">Creator</h3>
            <FieldInput
              value={ticketFilter?.creator}
              onChange={(val) =>
                setTicketFilter((e: any) => ({ ...e, creator: val }))
              }
              placeholder="code"
              name="code"
              id="code"
              label=""
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">Amount</h3>
            <FieldInput
              value={ticketFilter?.amount}
              onChange={(val) =>
                setTicketFilter((e: any) => ({ ...e, amount: val }))
              }
              placeholder="teacher"
              name="teacher"
              id="teacher"
              label=""
            />
          </div>
          <div>
            <h3 className="text-lg font-bold"></h3>
            <FieldInput
              value={ticketFilter?.priority}
              onChange={(val) =>
                setTicketFilter((e: any) => ({ ...e, priority: val }))
              }
              placeholder="credits"
              name="credits"
              id="credits"
              label=""
            />
          </div>

          <div>
            <h3 className="text-lg font-bold">Grade Level </h3>
            <Checkbox
              name="junior"
              value="junior"
              isSelected={category["junior"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="senior"
              value="senior"
              isSelected={category["senior"]}
              onChecked={handleCheckedEvent}
            />
          </div>
        </div>

        {/* Column 2: Gender filter */}
        <div>
          <div>
            <h3 className="text-lg font-bold"> Status</h3>
            <Checkbox
              name="active"
              value="active"
              isSelected={category["active"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="inactive"
              value="inactive"
              isSelected={category["inactive"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="discontinued"
              value="discontinued"
              isSelected={category["discontinued"]}
              onChecked={handleCheckedEvent}
            />
          </div>

          
          <div className="mb-2">
            <h3 className="text-lg font-bold">Subject Availability</h3>
            <Checkbox
              name="availability"
              value="Subject Availability"
              isSelected={name["cls-kg-nurs"]}
              onChecked={handleCheckedEvent}
            />
          </div>
        </div>

      
      </div>

      <div className="-mx-3 flex flex-wrap gap-y-4">
        <div className="w-full px-3  sm:w-1/2">
          <button
            type="button"
            onClick={() => props.onCancel()}
            className="dark:hover:primary dark:hover:primary block w-full rounded border border-stroke bg-gray 
                    p-3 text-center font-medium text-black transition
                    hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark 
                    dark:bg-meta-4 dark:text-white"
          >
            Cancel
          </button>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <button
            type="button"
            onClick={handleFilter}
            className="block w-full rounded border border-primary bg-primary p-3 text-center 
                    font-medium text-white transition hover:bg-opacity-90"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
