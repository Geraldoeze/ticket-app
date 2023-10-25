import { Header } from "../../../components/container";
import TextView from "../../../components/textview";
import { useNavigate } from "react-router-dom";
import TextViewGroup from "../../../components/textview/TextViewGroup";
import { ButtonEvent, ButtonEventGroup } from "../../../components/button";
import { Container, Section } from "../../../components/container";
import { deleteTicket } from "../../../api/httpRequest";

export default function SubjectDetailInfo({
  data,
  show,
}: {
  data: any;
  show: boolean;
}) {
  const navigate = useNavigate();
  const handleDeleteSubject = async (id: string | number) => {
    console.log(id);
    
      const remove = await deleteTicket(id)
      console.log(remove)
      if (remove?.status === 200) {
        navigate("/app/tickets");
      } else {
        alert("Ticket not deleted.")
      }
    
  };
  console.log(data);
  return show ? (
    <Container>
      <Section>
        <ButtonEventGroup>
          {/* <ButtonEvent variant="edit" onClick={() => {}}>
            Edit
          </ButtonEvent> */}

          <ButtonEvent
            variant="delete"
            onClick={() => handleDeleteSubject(data?._id)}
          >
            Delete
          </ButtonEvent>
        </ButtonEventGroup>
        <Header variant="h2">Subject Informtion</Header>
        <TextViewGroup>
          <TextView title="ID">{data?._id}</TextView>
          <TextView title="Title">{data?.title}</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Date">{data?.date}</TextView>
          <TextView title="Status">{data?.status}</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Priority">{data?.priority}</TextView>
          <TextView title="Category">{data?.category} </TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Description">{data?.description}</TextView>
          <TextView title=""></TextView>
        </TextViewGroup>
      </Section>
    </Container>
  ) : null;
}
