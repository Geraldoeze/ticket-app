import React, { useState } from "react";
import { Header } from "../../../components/container";
import TextView from "../../../components/textview";
import { useNavigate } from "react-router-dom";
import TextViewGroup from "../../../components/textview/TextViewGroup";
import { ButtonEvent, ButtonEventGroup } from "../../../components/button";
import { Container, Section } from "../../../components/container";
import { deleteTicket } from "../../../api/httpRequest";

import {
  Button,
  FormGroup,
  Textarea,
  Input,
  TextArea,
} from "../../../components/form";
export default function SubjectDetailInfo({
  data,
  show,
}: {
  data: any;
  show: boolean;
}) {
  const navigate = useNavigate();
  const [comment, setComments] = useState("");
  const [message, setMessage] = useState([]);
  const handleDeleteSubject = async (id: string | number) => {
    console.log(id);

    const remove = await deleteTicket(id);
    console.log(remove);
    if (remove?.status === 200) {
      navigate("/app/tickets");
    } else {
      alert("Ticket not deleted.");
    }
  };
  console.log(data);

  // get date
  function getCurrentDateTime() {
    const now = new Date();
    const date = now.toISOString().slice(0, 10); // Get YYYY-MM-DD format
    const time = now.toLocaleTimeString(); // Get HH:mm:ss format
    return `${date} ${time}`;
  }

  const handleComments = (e) => {
    setComments(e.target.value);
    console.log(comment);
  };
  const submitComment = () => {
    const newMessage = {
      date: getCurrentDateTime(),
      message: comment,
    };
    if (comment?.length > 2) {
      setMessage((prev) => [...prev, newMessage]);
      setComments("");
    }
  };
  return show ? (
    <Container>
      <Section>
        <ButtonEventGroup>
          <ButtonEvent variant="edit" onClick={() => {}}>
            Resolved
          </ButtonEvent>
          <ButtonEvent variant="edit" onClick={() => {}}>
            Unresolved
          </ButtonEvent>
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
          <TextView title="Customer Name">{data?.customer_name}</TextView>
          <TextView title="Phone Number">{data?.phone_number}</TextView>
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
          <TextView title="Type">{data?.customer_type}</TextView>
          <TextView title="Description">{data?.description}</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Location">{data?.location}</TextView>
          <TextView title=""></TextView>
        </TextViewGroup>
      </Section>
      
      {/* Render the messages */}
      <Section>
        <ul>
          {message.map((msg, index) => (
            <li key={index} className="m-5">
              <strong>
                <span className="mr-3 text-lg"> test@test.com</span> {msg.date}:
              </strong>
              <div>{msg.message}</div>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <textarea
          value={comment}
          onChange={handleComments}
          className={`dark:focus:border-primary} w-full rounded border 
        border-stroke bg-gray py-3 pl-4.5 pr-4.5
        text-black focus:border-primary
        focus-visible:outline-none dark:border-strokedark
        dark:bg-meta-4 dark:text-white`}
          placeholder="Add Comments"
        ></textarea>
        <Button
          classNames="w-25 flex justify-end"
          variant="secondary"
          style={{ background: "#32a544", color: "#fff" }}
          onClick={submitComment}
          type="button"
          isLoadingText="Saving..."
        >
          Submit
        </Button>
      </Section>
    </Container>
  ) : null;
}
