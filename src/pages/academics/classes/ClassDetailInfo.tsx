import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/container";
import TextView from "../../../components/textview";
import TextViewGroup from "../../../components/textview/TextViewGroup";
import { ButtonEvent, ButtonEventGroup } from "../../../components/button";
import { Container, Section } from "../../../components/container";
import { ROUTES_CONFIG } from "../../../layout/config";

export default function ClassDetailInfo({
  data,
  show,
}: {
  data: any;
  show: boolean;
}) {
  const navigate = useNavigate();

  const handleEditClass = () =>
    navigate(`${ROUTES_CONFIG.admin.entities.editClasses}/123}`);
  const handleDeleteClass = (id: string | number) => {
    console.log(id);
  };
  return show ? (
    <Container>
      <Section>
        <ButtonEventGroup>
          <ButtonEvent variant="edit" onClick={handleEditClass}>
            Edit
          </ButtonEvent>

          <ButtonEvent
            variant="delete"
            onClick={() => handleDeleteClass("123")}
          >
            Delete
          </ButtonEvent>
        </ButtonEventGroup>
        <Header variant="h2">Class Informtion</Header>
        <TextViewGroup>
          <TextView title="Class ID">123445</TextView>
          <TextView title="Course">Civic Education</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Class Code">ENG</TextView>
          <TextView title="Department">Languages</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Supervising Teachers">Miss Farida</TextView>
          <TextView title="Class Teacher">Miss Fatima</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Room">D1</TextView>
          <TextView title="Room ID">D1</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Time">12:00pm</TextView>
          <TextView title="Days">Monday, Friday</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Capacity">12</TextView>
          <TextView title="Enrollment">10</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Prerequisites">lorem Ipsum</TextView>
          <TextView title="Grade Level">lorem Ipsum</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Term/Semester">First</TextView>
          <TextView title="Class Status">active</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Class Type">lecture</TextView>
          <TextView title="Online/In-person">Online</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Course Credits">A</TextView>
          <TextView title="Exam Schedule">lorem Ipsum</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Attendance Tracking">lorem Ipsum</TextView>
          <TextView title="Grades/Grading Scale">lorem Ipsum</TextView>
        </TextViewGroup>
        <TextView title="Description">Sango Ota</TextView>
        <TextView title="Textbook">lorem Ipsum</TextView>
        <TextView title="Additional Resources">lorem Ipsum</TextView>
        <TextView title="Class Meetings">lorem Ipsum</TextView>
      </Section>
    </Container>
  ) : null;
}
