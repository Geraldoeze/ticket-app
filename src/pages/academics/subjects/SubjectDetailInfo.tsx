import React, { useState, useEffect } from "react";
import { Header } from "../../../components/container";
import TextView from "../../../components/textview";
import { useNavigate } from "react-router-dom";
import TextViewGroup from "../../../components/textview/TextViewGroup";
import { ButtonEvent, ButtonEventGroup } from "../../../components/button";
import { Container, Section } from "../../../components/container";
import { Loader } from "../../../components/Loader";
import {
  deleteTicket,
  postMessage,
  getMessage,
  statusUpdate,
} from "../../../api/httpRequest";
import { Button } from "../../../components/form";
export default function SubjectDetailInfo({
  data,
  userInfo,
  show,
}: {
  userInfo: object;
  data: any;
  show: boolean;
}) {
  const navigate = useNavigate();
  const [comment, setComments] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchmessage = async () => {
      const result = await getMessage(data?._id);
      console.log(result);
      if (result?.status == 200) {
        setMessage(result.data.messageData);
      }
    };

    fetchmessage();
    setUpdateStatus(data?.status);
  }, [data?._id]);
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

  // get date
  function getCurrentDateTime() {
    const now = new Date();
    const date = now.toISOString().slice(0, 10); // Get YYYY-MM-DD format
    const time = now.toLocaleTimeString(); // Get HH:mm:ss format
    return `${date} ${time}`;
  }

  const handleComments = (e: Event) => {
    setComments(e.target.value);
    console.log(comment);
  };
  const submitComment = async () => {
    const newMessage = {
      date: getCurrentDateTime(),
      comment,
    };
    if (comment?.length > 2) {
      setMessage((prev) => [...prev, newMessage]);
      setComments("");
      const sendMessage = await postMessage({
        ticketId: data?._id,
        message: {
          comment: comment,
          date: getCurrentDateTime(),
        },
      });
      console.log(sendMessage);
    }
  };

  // handle status update
  const handleStatusUpdate = async (newStatus: string) => {
    setUpdateStatus(newStatus);
    try {
      const send = await statusUpdate({ status: newStatus }, data?._id);
      console.log(send);
    } catch (err) {}
  };
  return show ? (
    <Container>
      <Section>
        <ButtonEventGroup>
          <ButtonEvent
            variant="edit"
            onClick={() => handleStatusUpdate("completed")}
          >
            Resolved
          </ButtonEvent>
          <ButtonEvent
            variant="edit"
            onClick={() => handleStatusUpdate("uncompleted")}
          >
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
          <TextView title="Customer Name">{data?.customer_name}</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Country">{data?.country}</TextView>
          <TextView title="Phone Number">{data?.phone_number}</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="State">{data?.state}</TextView>
          <TextView title="Address/Location">{data?.city}</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Date">{data?.date}</TextView>
          <TextView title="Status">{updateStatus}</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Communication Mode">
            {data?.communication_mode}
          </TextView>
          <TextView title="Transfer Mode">{data?.transfer_mode} </TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Email">{data?.email}</TextView>
          <TextView title="Request Attention To">{data?.action_request}</TextView>
        </TextViewGroup>
        <TextViewGroup>
          
          <TextView title="Description">{data?.description}</TextView>
        </TextViewGroup>
        <TextViewGroup>
          <TextView title="Customer Request">
            {data?.customer_request?.map((val) => val + "," + " ")}
          </TextView>
          <TextView title=""></TextView>
        </TextViewGroup>
      </Section>
      {/* <Loader show={true} /> */}
      {/* Render the messages */}
      <Section>
        <ul>
          {message.map((msg, index) => (
            <li key={index} className="m-5">
              <strong>
                <span className="mr-3 text-lg"> {userInfo?.username}</span>{" "}
                {msg.date}:
              </strong>
              <div>{msg.comment}</div>
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
