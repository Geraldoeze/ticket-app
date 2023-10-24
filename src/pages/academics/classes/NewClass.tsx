import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import TextView from "../../../components/textview";
import { Button, FormGroup, Textarea, Input } from "../../../components/form";
import FieldInput from "../../../components/FieldInput";
import { Container, Header, Section } from "../../../components/container";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "../../../components/form/customSelect";
import { ROUTES_CONFIG } from "../../../layout/config";

type ClassFormData = {
  course: string;
  code: string;
  department: string;
  teachers: string;
  supervising_teachers: string;
  room: string;
  room_id: string;
  time: string;
  days: string;
  capacity: string;
  enrollment: string;
  prerequisites: string;
  description: string;
  grade_level: string;
  term: string;
  status: string;
  type: string;
  online: string;
  credits: string;
  exam_schedule: string;
  textbook: string;
  additional_resources: string;
  attendance_tracking: string;
  grades: string;
  class_meeting: string;
};

export default function NewClass() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const [classes, setClasses] = React.useState<any>({
    course: "",
    code: "",
    department: "",
    teachers: "",
    supervising_teachers: "",
    room: "",
    room_id: "",
    time: "",
    days: "",
    capacity: "",
    enrollment: "",
    prerequisites: "",
    description: "",
    grade_level: "",
    term: "",
    status: "",
    type: "",
    online: "",
    credits: "",
    exam_schedule: "",
    textbook: "",
    additional_resources: "",
    attendance_tracking: "",
    grades: "",
    class_meeting: "",
  });
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const methods = useForm<ClassFormData>();

  const onSubmit = (data: ClassFormData) => {
    console.log(data);
    const { errors } = methods.formState;

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
      return; // Exit the function if there are errors
    }

    setClasses(data);
    setShowConfirmation(true);
  };

  //   const handleSave = () => {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 4000);
  //   };

  const backPath = "/app/admins/academics/classes";
  console.log(classes)
  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="New Classes"
        homeRoute={ROUTES_CONFIG.admin.entities.classes}
        homeRouteName="Classes"
      />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-1">
            <div className="col-span-5 xl:col-span-3">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                {showConfirmation ? (
                  <ConfirmationPage classes={classes} />
                ) : (
                  <div className="p-7">
                    <Header variant="h2">Class Informtion</Header>
                    <FormGroup>
                      <Select
                        name="course"
                        label="Course"
                        rules={{ required: "Select a course" }}
                      >
                        <option value="">Select a course...</option>
                        <option value="english">English</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="physics">Physics</option>
                      </Select>
                      <Input
                        label="Code"
                        name="code"
                        placeholder="code"
                        rules={{ required: "Code is required" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Select
                        name="department"
                        label="Department"
                        rules={{ required: "Select Department" }}
                      >
                        <option value="">Select a department...</option>
                        <option value="A">Medicine</option>
                        <option value="B">Agriculture</option>
                        <option value="C">Chemistry</option>
                      </Select>
                      <Select
                        name="teacher"
                        label="Class Teachers"
                        rules={{ required: "Select class teacher" }}
                      >
                        <option value="">Select class teacher...</option>
                        <option value="adetutu">Mrs Adetutu</option>
                        <option value="ekong">Mr Ekong</option>
                        <option value="faridah">Miss Faridah</option>
                      </Select>
                    </FormGroup>
                    <FormGroup>
                      <Select
                        name="supervising_teachers"
                        label="Supervising Teachers"
                        rules={{ required: "Select supervising teacher" }}
                      >
                        <option value="">Select supervising teacher...</option>
                        <option value="adetutu">Mrs Adetutu</option>
                        <option value="ekong">Mr Ekong</option>
                        <option value="faridah">Miss Faridah</option>
                      </Select>

                      <Select
                        name="room"
                        rules={{ required: "Select room" }}
                        label="Room"
                      >
                        <option value="">Select room</option>
                        <option value="sciences">A1</option>
                        <option value="humanities">LT2</option>
                        <option value="languages">LT3</option>
                        <option value="arts">Codel</option>
                      </Select>
                    </FormGroup>
                    <FormGroup>
                      <Input
                        label="Room ID"
                        name="room_id"
                        placeholder="Room ID"
                        rules={{ required: "Room ID is required" }}
                      />
                      <Input
                        label="Time"
                        name="time"
                        placeholder="Time"
                        rules={{ required: "Time is required" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Select
                        name="days"
                        rules={{ required: "Select Days" }}
                        label="Days"
                      >
                        <option value="">Select Days...</option>
                        <option value="sciences">Monday</option>
                        <option value="true">Teusday</option>
                        <option value="false">Wednesday</option>
                        <option value="false">Thursday</option>
                        <option value="false">Friday</option>
                      </Select>
                      <Input
                        label="Capacity"
                        name="capacity"
                        placeholder="capacity"
                        rules={{ required: "Capacity is required" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        label="Enrollment"
                        rules={{ required: "Enrollment is required" }}
                        name="enrollment"
                        placeholder="Enrollment"
                      />
                      <Input
                        label="Prerequisites"
                        name="prerequisites"
                        placeholder="prerequisites"
                        rules={{ required: false }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Textarea
                        label="Description"
                        rules={{ required: "Description is required" }}
                        name="description"
                        placeholder="description"
                      />
                      <Select
                        name="grade_level"
                        rules={{ required: false }}
                        label="Grade Level"
                      >
                        <option value="">Select grade...</option>
                        <option value="sciences">A</option>
                        <option value="true">B</option>
                        <option value="false">C</option>
                        <option value="false">D</option>
                      </Select>
                    </FormGroup>
                    <FormGroup>
                      <Select
                        name="term"
                        label="Term/Semester"
                        rules={{ required: "Term is required" }}
                      >
                        <option value="">Select Term...</option>
                        <option value="sciences">1st</option>
                        <option value="true">2nd</option>
                        <option value="true">3rd</option>
                      </Select>

                      <Select
                        rules={{ required: false }}
                        name="status"
                        label="Class Status"
                      >
                        <option value="">Select class status...</option>
                        <option value="sciences">Open</option>
                        <option value="true">Closed</option>
                        <option value="false">Cancelled</option>
                      </Select>
                    </FormGroup>

                    <FormGroup>
                      <Select
                        name="type"
                        rules={{ required: false }}
                        label="Class Type"
                      >
                        <option value="">Select class type...</option>
                        <option value="sciences">Lecture</option>
                        <option value="true">Lab</option>
                        <option value="true">Seminar</option>
                        <option value="true">Worshop</option>
                      </Select>

                      <Select
                        name="online"
                        label="Online/In-person"
                        rules={{ required: "Select one" }}
                      >
                        <option value="">Select...</option>
                        <option value="sciences">Online</option>
                        <option value="true">In Person</option>
                      </Select>
                    </FormGroup>

                    <FormGroup>
                      <Select
                        name="credits"
                        rules={{ required: "Select credits" }}
                        label="Course Credits"
                      >
                        <option value="">Select credit...</option>
                        <option value="sciences">Lecture</option>
                        <option value="true">Lab</option>
                        <option value="true">Seminar</option>
                        <option value="true">Worshop</option>
                      </Select>

                      <Select
                        name="exam_schedule"
                        rules={{ required: false }}
                        label="Exam Schedule"
                      >
                        <option value="sciences">Online</option>
                        <option value="true">In Person</option>
                      </Select>
                    </FormGroup>
                    <FormGroup>
                      <Textarea
                        label="Textbook"
                        name="textbook"
                        placeholder="Textbook"
                        rules={{ required: false }}
                      />
                      <Textarea
                        label="Additional Resources"
                        name="additional_resources"
                        placeholder="Additional Resources"
                        rules={{ required: false }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Select
                        name="attendance_tracking"
                        rules={{ reqiured: false }}
                        label="Attendance Tracking"
                      >
                        <option value="">Select one</option>
                        <option value="sciences">Lecture</option>
                        <option value="true">Lab</option>
                        <option value="true">Seminar</option>
                      </Select>

                      <Select
                        name="grades"
                        label="Grades/Grading Scale"
                        rules={{ required: false }}
                      >
                        <option value="sciences">Online</option>
                        <option value="true">In Person</option>
                      </Select>
                    </FormGroup>
                    <FormGroup>
                      <Textarea
                        label="Class Meetings"
                        name="class_meeting"
                        placeholder="Class Meetings"
                        rules={{ required: false }}
                      />
                    </FormGroup>
                    <Section classNames="flex gap-6 justify-end">
                      <Button
                        classNames="w-25"
                        variant="primary"
                        onClick={() => navigate(backPath)}
                        type="button"
                        isLoadingText="Saving..."
                      >
                        Cancel
                      </Button>
                      <Button
                        classNames="w-25"
                        variant="primary"
                        onClick={() => console.log(methods.formState)}
                        isLoadingText="Creating..."
                        type="submit"
                      >
                        Create
                      </Button>
                    </Section>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </DefaultLayout>
  );
}

function ConfirmationPage({ classes }: { classes: ClassFormData }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/app/admins/academics/classes");
  };

  return (
    <Container>
      <Section>
        <Header variant="h2">Class Summary</Header>
        <TextView title="Course">{classes?.course}</TextView>
        <TextView title="Code">{classes?.code}</TextView>
        <TextView title="Department">{classes?.department}</TextView>
        <TextView title="Class Teachers">{classes?.teachers}</TextView>
        <TextView title="Supervising Teachers">{classes?.supervising_teachers}</TextView>
        <TextView title="Room">{classes?.room}</TextView>
        <TextView title="Room ID">{classes?.room_id}</TextView>
        <TextView title="Time">{classes?.time}</TextView>
        <TextView title="Days">{classes?.days}</TextView>
        <TextView title="Capacity">{classes?.capacity}</TextView>
        <TextView title="Enrollment">{classes?.enrollment}</TextView>
        <TextView title="Prerequisites">{classes?.prerequisites}</TextView>
        <TextView title="Description">{classes?.description}</TextView>
        <TextView title="Grade Level">{classes?.grade_level}</TextView>
        <TextView title="Term">{classes?.term}</TextView>
        <TextView title="Status">{classes?.status}</TextView>
        <TextView title="Type">{classes?.type}</TextView>
        <TextView title="Online">{classes?.online}</TextView>
        <TextView title="Credits">{classes?.credits}</TextView>
        <TextView title="Exam Schedule">{classes?.exam_schedule}</TextView>
        <TextView title="Textbook">{classes?.textbook}</TextView>
        <TextView title="Additional Resources">{classes?.additional_resources}</TextView>
        <TextView title="Attendance Tracking">{classes?.attendance_tracking}</TextView>
        <TextView title="Grades">{classes?.grades}</TextView>
        <TextView title="Class meeting">{classes?.class_meeting}</TextView>
      </Section>

      <Section>
        <Button
          classNames="w-25 ml-0"
          variant="primary"
          onClick={handleBackClick}
          type="button"
        >
          Back
        </Button>
      </Section>
    </Container>
  );
}
