import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TextArea, FormGroup, Button } from "../../../components/form";

import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";

import FieldInput from "../../../components/FieldInput";

import SelectField, {
  SelectFieldOption,
} from "../../../components/SelectField";


//-------------------------------------------------------------------------------

const classData =   {
      "class_id": 1234,
      "course": "english",
      "code": "ENG",
      "department": "A",
      "room": "humanities",
      "room_id": "D1",
      "supervising_teachers": "ekong",
      "time": "12:00pm",
      "days": "sciences",
      "capacity": "12",
      "teachers": "adetutu",
      "enrollment": "10",
      "prerequisites": "lorem Ipsum",
      "description": "Sango Ota",
      "grade_level": "sciences",
      "term": "sciences",
      "status": "sciences",
      "type": "sciences",
      "online": "sciences",
      "credit": "sciences",
      "exam_schedule": "sciences",
      "textbook": "lorem Ipsum",
      "additional_resources": "lorem Ipsum",
      "attendance_tracking": "sciences",
      "grades": "lorem Ipsum",
      "class_meeting": "lorem ipsum",
    };

//-------------------------------------------------------------------------------

export default function EditClass() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { classId } = useParams();

  

  const [classes, setClasses] = React.useState<any>({
    course: classData?.course,
    code: classData?.code,
    department: classData?.department,
    teachers: classData?.teachers,
    supervising_teachers: classData?.supervising_teachers,
    room: classData?.room,
    room_id: classData?.room_id,
    time: classData?.time,
    days: classData?.days,
    capacity: classData?.capacity,
    enrollment: classData?.enrollment,
    prerequisites: classData?.prerequisites,
    description: classData?.description,
    grade_level: classData?.grade_level,
    term: classData?.term,
    status: classData?.status,
    type: classData?.type,
    online: classData?.online,
    credits: classData?.credit,
    exam_schedule: classData?.exam_schedule,
    textbook: classData?.textbook,
    additional_resources: classData?.additional_resources,
    attendance_tracking: classData?.attendance_tracking,
    grades: classData?.grades,
    class_meeting: classData?.class_meeting,
  });
  
  useEffect(() => {

    //fetch details using the classId
   
    
  }, [])

  console.log(classData.code, classes )

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };
  
  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="Edit Class"
        homeRoute="/app/admins/academics/classes"
        homeRouteName="Classes"
      />
      <div className="grid grid-cols-1 gap-1">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-7">
              <FormGroup>
                <SelectField
                  id="course"
                  name="course"
                  value={classes?.course}
                  onChange={(val: string) =>{
                    console.log(val)
                    setClasses((s: any) => ({ ...s, course: val }))
                  }}
                  label="Course"
                >
                  <SelectFieldOption value="english">English</SelectFieldOption>
                  <SelectFieldOption value="mathematics">
                    Mathematics
                  </SelectFieldOption>
                  <SelectFieldOption value="physics">Physics</SelectFieldOption>
                </SelectField>
                <FieldInput
                  label="Code"
                  id="code"
                  name="code"
                  placeholder="code"
                  value={classes?.code}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, code: val }))
                  }
                />
              </FormGroup>
              <FormGroup>
                <SelectField
                  id="department"
                  name="department"
                  value={classes?.department}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, department: val }))
                  }
                  label="Department"
                >
                  <SelectFieldOption value="A">
                    Medicine
                  </SelectFieldOption>
                  <SelectFieldOption value="B">Agriculture</SelectFieldOption>
                  <SelectFieldOption value="C">Chemistry</SelectFieldOption>
                </SelectField>
                <SelectField
                  id="teacher"
                  name="teacher"
                  value={classes?.teachers}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, teachers: val }))
                  }
                  label="Class Teachers"
                >
                  <SelectFieldOption value="adetutu">
                    Mrs Adetutu
                  </SelectFieldOption>
                  <SelectFieldOption value="ekong">Mr Ekong</SelectFieldOption>
                  <SelectFieldOption value="faridah">
                    Miss Faridah
                  </SelectFieldOption>
                </SelectField>
              </FormGroup>
              <FormGroup>
                <SelectField
                  id="supervising_teachers"
                  name="supervising_teachers"
                  value={classes?.supervising_teachers}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({
                      ...s,
                      supervising_teachers: val,
                    }))
                  }
                  label="Supervising Teachers"
                >
                  <SelectFieldOption value="adetutu">
                    Mrs Adetutu
                  </SelectFieldOption>
                  <SelectFieldOption value="ekong">Mr Ekong</SelectFieldOption>
                  <SelectFieldOption value="faridah">
                    Miss Faridah
                  </SelectFieldOption>
                </SelectField>

                <SelectField
                  id="room"
                  name="room"
                  value={classes?.room}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, room: val }))
                  }
                  label="Room"
                >
                  <SelectFieldOption value="sciences">
                    A1
                  </SelectFieldOption>
                  <SelectFieldOption value="humanities">LT2</SelectFieldOption>
                  <SelectFieldOption value="languages">LT3</SelectFieldOption>
                  <SelectFieldOption value="arts">Codel</SelectFieldOption>
                </SelectField>
              </FormGroup>
              <FormGroup>
                <FieldInput
                  label="Room ID"
                  id="room_id"
                  name="room_id"
                  placeholder="Room ID"
                  value={classes?.room_id}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, room_id: val }))
                  }
                />
                <FieldInput
                  label="Time"
                  id="time"
                  name="time"
                  placeholder="Time"
                  value={classes?.time}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, time: val }))
                  }
                />
              </FormGroup>
              <FormGroup>
                <SelectField
                  id="days"
                  name="days"
                  value={classes?.days}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, days: val }))
                  }
                  label="Days"
                >
                  <SelectFieldOption value="sciences">
                    Monday
                  </SelectFieldOption>
                  <SelectFieldOption value="true">Teusday</SelectFieldOption>
                  <SelectFieldOption value="false">Wednesday</SelectFieldOption>
                  <SelectFieldOption value="false">Thursday</SelectFieldOption>
                  <SelectFieldOption value="false">Friday</SelectFieldOption>
                </SelectField>
                <FieldInput
                  label="Capacity"
                  id="capacity"
                  name="capacity"
                  placeholder="capacity"
                  value={classes?.capacity}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, capacity: val }))
                  }
                />
              </FormGroup>
              <FormGroup>
                <FieldInput
                  label="Enrollment"
                  id="enrollment"
                  name="enrollment"
                  placeholder="Enrollment"
                  value={classes?.enrollment}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, enrollment: val }))
                  }
                />
                <FieldInput
                  label="Prerequisites"
                  id="prerequisites"
                  name="prerequisites"
                  placeholder="prerequisites"
                  value={classes?.prerequisites}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, prerequisites: val }))
                  }
                />
              </FormGroup>

              <FormGroup>
                <TextArea
                  label="Description"
                  id="description"
                  name="description"
                  placeholder="description"
                  value={classes?.description}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, description: val }))
                  }
                />
                <SelectField
                  id="grade_level"
                  name="grade_level"
                  value={classes?.grade_level}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, grade_level: val }))
                  }
                  label="Grade Level"
                >
                  <SelectFieldOption value="sciences">
                    A
                  </SelectFieldOption>
                  <SelectFieldOption value="true">B</SelectFieldOption>
                  <SelectFieldOption value="false">C</SelectFieldOption>
                  <SelectFieldOption value="false">D</SelectFieldOption>
                </SelectField>
              </FormGroup>
              <FormGroup>
                <SelectField
                  id="term"
                  name="term"
                  value={classes?.term}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, term: val }))
                  }
                  label="Term/Semester"
                >
                  <SelectFieldOption value="sciences">
                    1st
                  </SelectFieldOption>
                  <SelectFieldOption value="true">2nd</SelectFieldOption>
                  <SelectFieldOption value="true">3rd</SelectFieldOption>
                </SelectField>

                <SelectField
                  id="status"
                  name="status"
                  value={classes?.status}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, status: val }))
                  }
                  label="Class Status"
                >
                  <SelectFieldOption value="sciences">
                    Open
                  </SelectFieldOption>
                  <SelectFieldOption value="true">Closed</SelectFieldOption>
                  <SelectFieldOption value="false">Cancelled</SelectFieldOption>
                </SelectField>
              </FormGroup>

              <FormGroup>
                <SelectField
                  id="type"
                  name="type"
                  value={classes?.type}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, type: val }))
                  }
                  label="Class Type"
                >
                  <SelectFieldOption value="sciences">
                    Lecture
                  </SelectFieldOption>
                  <SelectFieldOption value="true">Lab</SelectFieldOption>
                  <SelectFieldOption value="true">Seminar</SelectFieldOption>
                  <SelectFieldOption value="true">Worshop</SelectFieldOption>
                </SelectField>

                <SelectField
                  id="online"
                  name="online"
                  value={classes?.online}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, online: val }))
                  }
                  label="Online/In-person"
                >
                  <SelectFieldOption value="sciences">
                    Online
                  </SelectFieldOption>
                  <SelectFieldOption value="true">In Person</SelectFieldOption>
                </SelectField>
              </FormGroup>

              <FormGroup>
                <SelectField
                  id="credits"
                  name="credits"
                  value={classes?.credits}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, credits: val }))
                  }
                  label="Course Credits"
                >
                  <SelectFieldOption value="sciences">
                    Lecture
                  </SelectFieldOption>
                  <SelectFieldOption value="true">Lab</SelectFieldOption>
                  <SelectFieldOption value="true">Seminar</SelectFieldOption>
                  <SelectFieldOption value="true">Worshop</SelectFieldOption>
                </SelectField>

                <SelectField
                  id="exam_schedule"
                  name="exam_schedule"
                  value={classes?.exam_schedule}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, exam_schedule: val }))
                  }
                  label="Exam Schedule"
                >
                  <SelectFieldOption value="sciences">
                    Online
                  </SelectFieldOption>
                  <SelectFieldOption value="true">In Person</SelectFieldOption>
                </SelectField>
              </FormGroup>
              <FormGroup>
                <TextArea
                  label="Textbook"
                  id="textbook"
                  name="textbook"
                  placeholder="Textbook"
                  value={classes?.textbook}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, textbook: val }))
                  }
                />
                <TextArea
                  label="Additional Resources"
                  id="additional_resources"
                  name="additional_resources"
                  placeholder="Additional Resources"
                  value={classes?.additional_resources}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({
                      ...s,
                      additional_resources: val,
                    }))
                  }
                />
              </FormGroup>
              <FormGroup>
                <SelectField
                  id="attendance_tracking"
                  name="attendance_tracking"
                  value={classes?.attendance_tracking}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, attendance_tracking: val }))
                  }
                  label="Attendance Tracking"
                >
                  <SelectFieldOption value="sciences">
                    Lecture
                  </SelectFieldOption>
                  <SelectFieldOption value="true">Lab</SelectFieldOption>
                  <SelectFieldOption value="true">Seminar</SelectFieldOption>
                </SelectField>

                <SelectField
                  id="grades"
                  name="grades"
                  value={classes?.grades}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, grades: val }))
                  }
                  label="Grades/Grading Scale"
                >
                  <SelectFieldOption value="sciences">
                    Online
                  </SelectFieldOption>
                  <SelectFieldOption value="true">In Person</SelectFieldOption>
                </SelectField>
              </FormGroup>
              <FormGroup>
                <TextArea
                  label="Class Meetings"
                  id="class_meeting"
                  name="class_meeting"
                  placeholder="Class Meetings"
                  value={classes?.class_meeting}
                  onChange={(val: string) =>
                    setClasses((s: any) => ({ ...s, class_meeting: val }))
                  }
                />
              </FormGroup>

              <Button
                classNames="w-25"
                variant="primary"
                onClick={handleSave}
                disabled={isLoading}
                isLoading={isLoading}
                isLoadingText="Submiting..."
                type={"button"}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
