import { Header } from "../../../components/container";
import TextView from "../../../components/textview";
import TextViewGroup from "../../../components/textview/TextViewGroup";
import { ButtonEvent, ButtonEventGroup } from "../../../components/button";
import { Container, Section } from "../../../components/container";

export default function SubjectDetailInfo({
  data,
  show,
}: {
  data: any;
  show: boolean;
}) {
  const handleDeleteSubject = (id: string | number) => {
    console.log(id);
  };
  return show ? (
    <Container>
  
      <Section>
        <ButtonEventGroup>
          <ButtonEvent variant="edit" onClick={() => {}}>
            Edit
          </ButtonEvent>

          <ButtonEvent
            variant="delete"
            onClick={() => handleDeleteSubject("123")}
          >
            Delete
          </ButtonEvent>
        </ButtonEventGroup>
        <Header variant="h2">Subject Informtion</Header>
        <TextViewGroup>
          <TextView title="ID">123445</TextView>
          <TextView title="Title">Game Ticket</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Date">20-06-2022</TextView>
          <TextView title="Status">Pending</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Priority">High</TextView>
          <TextView title="Category">Category A</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Description">This is the ticket</TextView>
          <TextView title="Result">Excellent</TextView>
        </TextViewGroup>
      </Section>
    </Container>
  ) : null;
}
