import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import { Button, FormGroup, TextArea } from "../../../components/form";
import FieldInput from "../../../components/FieldInput";
import { Header } from "../../../components/container";
import SelectField, {
  SelectFieldOption,
} from "../../../components/SelectField";

export default function NewQuestion() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [questions, setQuestions] = React.useState<any>({
    category: "",
    sub_category: "",
    question_text: "",
    question_type: "",
    options_answer: "",
    correct_answer: "",
    difficulty_level: "",
    points_weightage: "",
    tags_labels: "",
    explanation_rationale: "",
    references_resources: "",
    bloom_taxonomy: "",
    accessibility_consideration: "",
    language: "",
    term: "",
    source_copyright: "",
  });

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="New Questions"
        homeRoute="/app/admins/academics"
        homeRouteName="Questions"
      />
      <div className="grid grid-cols-1 gap-1">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-7">
              <FormGroup>
                <SelectField
                  id="category"
                  name="category"
                  value={questions?.category}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, category: val }))
                  }
                  label="Category"
                >
                  <SelectFieldOption isDefault value="english">
                    English
                  </SelectFieldOption>
                  <SelectFieldOption value="mathematics">
                    Mathematics
                  </SelectFieldOption>
                  <SelectFieldOption value="physics">Physics</SelectFieldOption>
                </SelectField>
                <FieldInput
                  label="Sub Category"
                  id="sub_category"
                  name="sub_category"
                  placeholder="Sub Category"
                  value={questions?.sub_category}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, sub_category: val }))
                  }
                />
              </FormGroup>
              <FormGroup>
                <FieldInput
                  label="Question Text"
                  id="question_text"
                  name="question_text"
                  placeholder="Question Text"
                  value={questions?.question_text}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, question_text: val }))
                  }
                />
                <SelectField
                  id="question_type"
                  name="question_type"
                  value={questions?.question_type}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, question_type: val }))
                  }
                  label="Question Type"
                >
                  <SelectFieldOption isDefault value="multiple-choice">
                    Multiple Choice
                  </SelectFieldOption>
                  <SelectFieldOption value="true/false">
                    True or False
                  </SelectFieldOption>
                  <SelectFieldOption value="eassy">Eassy</SelectFieldOption>
                  <SelectFieldOption value="fill-in-the-blank">
                    Fill in the blank
                  </SelectFieldOption>
                  <SelectFieldOption value="matching">
                    Matching
                  </SelectFieldOption>
                </SelectField>
              </FormGroup>
              <FormGroup>
                <SelectField
                  id="options_answer"
                  name="options_answer"
                  value={questions?.options_answer}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, options_answer: val }))
                  }
                  label="Options/Answer"
                >
                  <SelectFieldOption isDefault value="adetutu">
                    Mrs Adetutu
                  </SelectFieldOption>
                  <SelectFieldOption value="ekong">Mr Ekong</SelectFieldOption>
                  <SelectFieldOption value="faridah">
                    Miss Faridah
                  </SelectFieldOption>
                </SelectField>

                <FieldInput
                  label="Correct Answer"
                  id="correct_answer"
                  name="correct_answer"
                  placeholder="Correct Answer"
                  value={questions?.correct_answer}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, correct_answer: val }))
                  }
                />
              </FormGroup>
              <FormGroup>
                <SelectField
                  id="difficulty_level"
                  name="difficulty_level"
                  value={questions?.difficulty_level}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, difficulty_level: val }))
                  }
                  label="Difficulty Level"
                >
                  <SelectFieldOption isDefault value="easy">
                    Easy
                  </SelectFieldOption>
                  <SelectFieldOption value="moderate">
                    Moderate
                  </SelectFieldOption>
                  <SelectFieldOption value="difficult">
                    Difficult
                  </SelectFieldOption>
                </SelectField>

                <FieldInput
                  label="Points/Weightage"
                  id="points_weightage"
                  name="points_weightage"
                  placeholder="Points"
                  value={questions?.points_weightage}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, points_weightage: val }))
                  }
                />
              </FormGroup>
              <FormGroup>
                {/* Multi text */}
                <FieldInput
                  label="Tags/Labels"
                  id="tags_labels"
                  name="tags_labels"
                  placeholder="Tags or labels"
                  value={questions?.tags_labels}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, tags_labels: val }))
                  }
                />
                <FieldInput
                  label="Explanation/Rationale"
                  id="explanation_rationale"
                  name="explanation_rationale"
                  placeholder="Explanation Rationale"
                  value={questions?.explanation_rationale}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({
                      ...s,
                      explanation_rationale: val,
                    }))
                  }
                />
              </FormGroup>

              <FormGroup>
                <SelectField
                  id="term"
                  name="term"
                  value={questions?.term}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, term: val }))
                  }
                  label="Term"
                >
                  <SelectFieldOption isDefault value="first">
                    First Term
                  </SelectFieldOption>
                  <SelectFieldOption value="second">
                    Second Term
                  </SelectFieldOption>
                  <SelectFieldOption value="third">
                    Third Term
                  </SelectFieldOption>
                </SelectField>
                <SelectField
                  id="bloom_taxonomy"
                  name="bloom_taxonomy"
                  value={questions?.bloom_taxonomy}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, bloom_taxonomy: val }))
                  }
                  label="Bloom's Taxonomy Level"
                >
                  <SelectFieldOption isDefault value="remembering">
                    Remembering
                  </SelectFieldOption>
                  <SelectFieldOption value="understanding">
                    Understanding
                  </SelectFieldOption>
                  <SelectFieldOption value="applying">
                    Applying
                  </SelectFieldOption>
                  <SelectFieldOption value="analyzing">
                    Analyzing
                  </SelectFieldOption>
                  <SelectFieldOption value="evaluating">
                    Evaluating
                  </SelectFieldOption>
                  <SelectFieldOption value="creating">
                    Creating
                  </SelectFieldOption>
                </SelectField>
              </FormGroup>
              <FormGroup>
                <SelectField
                  id="accessibility_consideration"
                  name="accessibility_consideration"
                  value={questions?.accessibility_consideration}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({
                      ...s,
                      accessibility_consideration: val,
                    }))
                  }
                  label="Accessibility Considerations"
                >
                  <SelectFieldOption isDefault value="sciences">
                    1st
                  </SelectFieldOption>
                  <SelectFieldOption value="true">2nd</SelectFieldOption>
                  <SelectFieldOption value="true">3rd</SelectFieldOption>
                </SelectField>

                <SelectField
                  id="language"
                  name="language"
                  value={questions?.language}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({ ...s, language: val }))
                  }
                  label="Language"
                >
                  <SelectFieldOption isDefault value="english">
                    English
                  </SelectFieldOption>
                  <SelectFieldOption value="french">French</SelectFieldOption>
                  <SelectFieldOption value="german">German</SelectFieldOption>
                </SelectField>
              </FormGroup>
              <FormGroup>
                <TextArea
                  label="References/Resources"
                  id="references_resources"
                  name="references_resources"
                  placeholder="References Resources"
                  value={questions?.references_resources}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({
                      ...s,
                      references_resources: val,
                    }))
                  }
                />
                <TextArea
                  label="Source/Copyright"
                  id="source_copyright"
                  name="source_copyright"
                  placeholder="Source Copyright"
                  value={questions?.source_copyright}
                  onChange={(val: string) =>
                    setQuestions((s: any) => ({
                      ...s,
                      source_copyright: val,
                    }))
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
