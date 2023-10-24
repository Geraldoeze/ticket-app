import React, { Fragment } from "react";
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

type ClassFilterProps = {
  onFilter: (data: any) => void;
  onCancel: () => void;
};

export default function ClassFilter(props: ClassFilterProps) {
  const [name, setName] = React.useState<any>({});
  const [code, setCode] = React.useState<any>({});
  const [category, setCategory] = React.useState<any>({});
  const [edu, setEdu] = React.useState<any>({});
  const [filter_data, setFilter_Data] = React.useState<any>({
    course_name: "",
    teacher_name: "",
    room_number: "",
    class_time: "",
    days_combination: "",
    seat_capacity: "",
  });
  const handleCheckedEvent = (key: string, val: string) => {
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
    props.onFilter({
      name: name,
      code: code,
      category,
      status,
    });
  };

  return (
    <div>
      <div className="mb3 grid grid-cols-1 gap-3 text-left md:grid-cols-2">
        {/* Column 1: */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Course</h3>
            <FieldInput
              value={filter_data?.course_name}
              onChange={(val) =>
                setFilter_Data((e: any) => ({ ...e, course_name: val }))
              }
              placeholder="name"
              name="course"
              id="course"
              label=""
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Teachers</h3>

            <FieldInput
              value={filter_data?.teacher_name}
              onChange={(val) =>
                setFilter_Data((e: any) => ({ ...e, teacher_name: val }))
              }
              placeholder="name"
              name="teacher"
              id="teacher"
              label=""
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Room</h3>
            <FieldInput
              value={filter_data?.room_number}
              onChange={(val) =>
                setFilter_Data((e: any) => ({ ...e, room_number: val }))
              }
              placeholder="name"
              name="course"
              id="course"
              label=""
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Time</h3>
            <Checkbox
              name="morning"
              value="morning"
              isSelected={category["morning"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="afternoon"
              value="afternoon"
              isSelected={category["afternoon"]}
              onChecked={handleCheckedEvent}
            />
            <FieldInput
              value={filter_data?.class_time}
              onChange={(val) =>
                setFilter_Data((e: any) => ({ ...e, class_time: val }))
              }
              placeholder="class time"
              name="time"
              id="time"
              label=""
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Days</h3>
            <Checkbox
              name="monday"
              value="monday"
              isSelected={category["monday"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="tuesday"
              value="tuesday"
              isSelected={category["tuesday"]}
              onChecked={handleCheckedEvent}
            />
            <FieldInput
              value={filter_data?.days_combination}
              onChange={(val) =>
                setFilter_Data((e: any) => ({ ...e, days_combination: val }))
              }
              placeholder=" days"
              name="days"
              id="days"
              label=""
            />
          </div>
        </div>

        {/* Column 2: Gender filter */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Capacity</h3>
            <FieldInput
              value={filter_data?.seat_capacity}
              onChange={(val) =>
                setFilter_Data((e: any) => ({ ...e, seat_capacity: val }))
              }
              placeholder="seats"
              name="seats"
              id="seats"
              label=""
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Enrollment Status</h3>
            <Checkbox
              name="open"
              value="open"
              isSelected={category["open"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="closed"
              value="closed"
              isSelected={category["closed"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="available_seat"
              value="available_seat"
              isSelected={category["available_seat"]}
              onChecked={handleCheckedEvent}
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Course Category</h3>
            <Checkbox
              name="Name"
              value="name"
              isSelected={name["name"]}
              onChecked={handleCheckedEvent}
            />
          </div>
        </div>

        {/* Column 3: Employment date, Status, Class name match filters */}
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Grade Level</h3>
            <Checkbox
              name="grade_level"
              value="grade_level"
              isSelected={name["grade_level"]}
              onChecked={handleCheckedEvent}
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Sorting Options</h3>
            <Checkbox
              name="Ascending"
              value="ascending"
              isSelected={name["ascending"]}
              onChecked={handleCheckedEvent}
            />
            <Checkbox
              name="Descending"
              value="descending"
              isSelected={name["decending"]}
              onChecked={handleCheckedEvent}
            />
          </div>
        </div>
      </div>

      <div className="-mx-3 flex flex-wrap gap-y-4">
        <div className="w-full px-3 sm:w-1/2">
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
