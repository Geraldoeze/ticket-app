import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import { Button, FormGroup, TextArea } from "../../../components/form";
import FieldInput from "../../../components/FieldInput";
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';

import {
    Header
} from "../../../components/container";
import SelectField, {
    SelectFieldOption,
} from "../../../components/SelectField";
import TextView from "../../../components/textview";

export default function NewEvaluation() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [calendar, setCalendar] = React.useState<any>(new Date());

    const [evaluation, setEvaluation] = React.useState<any>({
        subject_name: "",
        classes: "",
        subject_credit: "",
        remarks: "",
        teachers: "",
        subject_description: "",
        subject_category: "",
        curriculum_alignment: "",
        prerequisites: "",
        prerequisites_description: "",
        subject_objectives: "",
        key_topics: "",
        teaching_methodology: "",
        assessment_methods: "",
        resources_and_materials: "",
        careers_and_future_pathways: "",
        additional_support: "",
        extracurricular_opportunities: "",
        cross_curricular_connections: "",
        recommended_electives: "",
        enrichment_or_extension_opportunities: "",
        revision_or_study_tips: "",
    });


    const handleSave = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 4000)
    }

    return (
        <DefaultLayout>
            <BreadCrumb
                pageName="New Evaluations"
                homeRoute="/app/admins/academics/evaluations"
                homeRouteName="Evaluations"
            />
            <div className="grid grid-cols-1 gap-1">
                <div className="col-span-5 xl:col-span-3">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="p-7">
                            <FormGroup>
                                <FieldInput
                                    label="Students"
                                    id="students"
                                    name="students"
                                    placeholder="Students"
                                    value={evaluation?.students}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, students: val }))
                                    }
                                />
                                <SelectField
                                    id="teachers"
                                    name="teachers"
                                    value={evaluation?.teachers}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, teachers: val }))
                                    }
                                    label="Teachers"
                                >
                                    <SelectFieldOption isDefault value="class_A">
                                        Dr Adjiboye
                                    </SelectFieldOption>
                                    <SelectFieldOption value="class_b">Mrs Stellar</SelectFieldOption>
                                    <SelectFieldOption value="class_c">Mr Ojo</SelectFieldOption>
                                </SelectField>
                            </FormGroup>
                            <FormGroup>
                                <SelectField
                                    id="course"
                                    name="course"
                                    value={evaluation?.course}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, course: val }))
                                    }
                                    label="Course"
                                >
                                    <SelectFieldOption isDefault value="A">
                                        English
                                    </SelectFieldOption>
                                    <SelectFieldOption value="B">Mathematics</SelectFieldOption>
                                    <SelectFieldOption value="C">French</SelectFieldOption>
                                    <SelectFieldOption value="D">Physics</SelectFieldOption>
                                </SelectField>
                                <SelectField
                                    id="assessment_type"
                                    name="assessment_type"
                                    value={evaluation?.assessment_type}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, assessment_type: val }))
                                    }
                                    label="Assessment Type"
                                >
                                    <SelectFieldOption isDefault value="class_A">
                                        Test
                                    </SelectFieldOption>
                                    <SelectFieldOption value="class_b">Quiz</SelectFieldOption>
                                    <SelectFieldOption value="class_c">Assignment</SelectFieldOption>
                                    <SelectFieldOption value="class_c">Project</SelectFieldOption>
                                    <SelectFieldOption value="class_c">Exam</SelectFieldOption>
                                </SelectField>
                            </FormGroup>



                            <FormGroup>
                                <FieldInput
                                    label="Assessment Title"
                                    id="assessment_title"
                                    name="assessment_title"
                                    placeholder="Assessment Title"
                                    value={evaluation?.assessment_title}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, assessment_title: val }))
                                    }
                                />
                                <TextArea
                                    label="Assessment Description"
                                    id="assessment_description"
                                    name="assessment_description"
                                    placeholder="assessment_description"
                                    value={evaluation?.assessment_description}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, assessment_description: val }))
                                    }
                                />
                            </FormGroup>

                            <FormGroup>
                                <div style={{ width: "100%" }}>
                                    <TextView title='Assessment Date'></TextView>
                                    <DatePicker
                                        className={'date_picker'}
                                        selected={evaluation?.assessment_date}
                                        onSelect={(val) => setEvaluation((s: any) => ({ ...s, assessment_date: val }))
                                        } //when day is clicked
                                        onChange={(val) => setEvaluation((s: any) => ({ ...s, assessment_date: val }))
                                        } //only when value has changed
                                    />
                                </div>
                                <TextArea
                                    label="Assessment Duration"
                                    id="assessment_duration"
                                    name="assessment_duration"
                                    placeholder="Assessment Duration"
                                    value={evaluation?.assessment_duration}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, assessment_duration: val }))
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <SelectField
                                    id="grade"
                                    name="grade"
                                    value={evaluation?.grade}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, grade: val }))
                                    }
                                    label="Grade"
                                >
                                    <SelectFieldOption isDefault value="sciences">
                                        A
                                    </SelectFieldOption>
                                    <SelectFieldOption value="humanities">B</SelectFieldOption>
                                    <SelectFieldOption value="languages">C</SelectFieldOption>
                                    <SelectFieldOption value="arts">D</SelectFieldOption>
                                </SelectField>
                                <TextArea
                                    label="Maximum Score"
                                    id="maximum_score"
                                    name="maximum_score"
                                    placeholder="Maximum Score"
                                    value={evaluation?.maximum_score}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, maximum_score: val }))
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <SelectField
                                    id="supervisors"
                                    name="supervisors"
                                    value={evaluation?.supervisors}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, supervisors: val }))
                                    }
                                    label="Supervisors"
                                >
                                    <SelectFieldOption isDefault value="sciences">
                                        Sciences
                                    </SelectFieldOption>
                                    <SelectFieldOption value="true">True</SelectFieldOption>
                                    <SelectFieldOption value="false">False</SelectFieldOption>
                                </SelectField>
                                <SelectField
                                    id="term"
                                    name="term"
                                    value={evaluation?.term}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, term: val }))
                                    }
                                    label="Term/Semester"
                                >
                                    <SelectFieldOption isDefault value="sciences">
                                        1st
                                    </SelectFieldOption>
                                    <SelectFieldOption value="true">2nd</SelectFieldOption>
                                    <SelectFieldOption value="false">3rd</SelectFieldOption>
                                </SelectField>
                            </FormGroup>
                            <FormGroup>
                                <SelectField
                                    id="academic_year"
                                    name="academic_year"
                                    value={evaluation?.academic_year}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, academic_year: val }))
                                    }
                                    label="Academic Year"
                                >
                                    <SelectFieldOption isDefault value="sciences">
                                        Sciences
                                    </SelectFieldOption>
                                    <SelectFieldOption value="true">True</SelectFieldOption>
                                    <SelectFieldOption value="false">False</SelectFieldOption>
                                </SelectField>
                                <SelectField
                                    id="questions"
                                    name="questions"
                                    value={evaluation?.questions}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, questions: val }))
                                    }
                                    label="Questions"
                                >
                                    <SelectFieldOption isDefault value="sciences">
                                        1st
                                    </SelectFieldOption>
                                    <SelectFieldOption value="true">2nd</SelectFieldOption>
                                    <SelectFieldOption value="false">3rd</SelectFieldOption>
                                </SelectField>
                            </FormGroup>


                            <FormGroup>
                                <TextArea
                                    label="Feedback"
                                    id="feedback"
                                    name="feedback"
                                    placeholder="feedback"
                                    value={evaluation?.feedback}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, feedback: val }))
                                    }
                                />
                                <SelectField
                                    id="completion_status"
                                    name="completion_status"
                                    value={evaluation?.completion_status}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, completion_status: val }))
                                    }
                                    label="Completion Status"
                                >
                                    <SelectFieldOption isDefault value="sciences">
                                        1st
                                    </SelectFieldOption>
                                    <SelectFieldOption value="true">2nd</SelectFieldOption>
                                    <SelectFieldOption value="false">3rd</SelectFieldOption>
                                </SelectField>
                            </FormGroup>

                            <FormGroup>
                                <TextArea
                                    label="Remarks/Comments"
                                    id="remarks"
                                    name="remarks"
                                    placeholder="Remarks/Comments"
                                    value={evaluation?.remarks}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, remarks: val }))
                                    }
                                />
                                <TextArea
                                    label="Proctoring Details"
                                    id="proctoring_details"
                                    name="proctoring_details"
                                    placeholder="Proctoring Details"
                                    value={evaluation?.proctoring_details}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, proctoring_details: val }))
                                    }
                                />
                            </FormGroup>

                            <FormGroup>
                                <TextArea
                                    label="Resources and References"
                                    id="resources_and_references"
                                    name="resources_and_references"
                                    placeholder="Resources and References"
                                    value={evaluation?.resources_and_references}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, resources_and_references: val }))
                                    }
                                />
                                <TextArea
                                    label="Rubrics/Grading Criteria"
                                    id="rubrics"
                                    name="rubrics"
                                    placeholder="Rubrics/Grading Criteria"
                                    value={evaluation?.rubrics}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, rubrics: val }))
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextArea
                                    label="Academic Integrity"
                                    id="academic_integrity"
                                    name="academic_integrity"
                                    placeholder="Academic Integrity"
                                    value={evaluation?.academic_integrity}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, academic_integrity: val }))
                                    }
                                />
                                <TextArea
                                    label="Accommodations/Accessibility"
                                    id="accommodations"
                                    name="accommodations"
                                    placeholder="Accommodations/Accessibility"
                                    value={evaluation?.accommodations}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, accommodations: val }))
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextArea
                                    label="Retake/Revision Policies"
                                    id="retake"
                                    name="retake"
                                    placeholder="Retake/Revision Policies"
                                    value={evaluation?.retake}
                                    onChange={(val: string) =>
                                        setEvaluation((s: any) => ({ ...s, retake: val }))
                                    }
                                />
                            </FormGroup>


                            <Button
                                classNames='w-25'
                                variant='primary'
                                onClick={handleSave}
                                disabled={isLoading}
                                isLoading={isLoading}
                                isLoadingText='Creating...'
                                type={"button"}>
                                Create
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
