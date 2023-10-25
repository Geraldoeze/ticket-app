import React, { useEffect } from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import BreadCrumb from "../../../components/BreadCrumb";
import Table from "../../../components/table";
import { useNavigate } from "react-router";
import {
  getAllIdsInArray,
  idExistInArray,
  toggleId,
  toggleIdInArray,
} from "../../../services/utils/helpers";
import { ButtonEvent, ButtonEventGroup } from "../../../components/button";
import Modal from "../../../components/modal";
import SubjectFilter from "./SubjectFilter";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { getTickets } from "../../../api/httpRequest";

// import SubjectFilter from './SubjectFilter';

export default function Subjects() {
  const navigate = useNavigate();
  // let data = React.useMemo(
  //   () => [
  //     {
  //       id: "15456433",
  //       title: "Game Tickets",
  //       status: "created",
  //       creator: "Mr Idris",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "73456423",
  //       title: "Game Tickets",
  //       status: "pending",
  //       creator: "Mr Idris",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "45456423",
  //       title: "Game Tickets",
  //       status: "active",
  //       creator: "Mr Idris",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "74096423",
  //       title: "Game Tickets",
  //       status: "active",
  //       creator: "Mr Idris",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "76556423",
  //       title: "Game Tickets",
  //       status: "pending",
  //       creator: "Mr Idris",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "73451223",
  //       title: "Game Tickets",
  //       status: "pending",
  //       creator: "Mr Idris",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "73456459",
  //       title: "Game Tickets",
  //       status: "pending",
  //       creator: "Mr Idris",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "73456479",
  //       title: "Flight Ticket",
  //       status: "pending",
  //       creator: "Mr Idris",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "73456480",
  //       title: "Flight Ticket",
  //       status: "active",
  //       creator: "Mr Danfulani",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "73456481",
  //       title: "Flight Ticket",
  //       status: "active",
  //       creator: "Mr Danfulani",
  //       date: "24-10-2022",
  //       priority: "high",
  //     },
  //     {
  //       id: "73456482",
  //       title: "Flight Ticket",
  //       status: "active",
  //       creator: "Mr Danfulani",
  //       date: "24-10-2022",
  //       priority: "Medium",
  //     },
  //     {
  //       id: "73456484",
  //       title: "Flight Ticket",
  //       status: "completed",
  //       creator: "Mr Danfulani",
  //       date: "24-10-2022",
  //       priority: "Medium",
  //     },
  //     {
  //       id: "73456482",
  //       title: "Flight Ticket",
  //       status: "active",
  //       creator: "Mr Danfulani",
  //       date: "22-09-2022",
  //       priority: "Medium",
  //     },

  //     {
  //       id: "730926482",
  //       title: "Flight Ticket",
  //       status: "active",
  //       creator: "Mr Danfulani",
  //       date: "22-09-2022",
  //       priority: "Medium",
  //     },

  //     {
  //       id: "73456782",
  //       title: "Flight Ticket",
  //       status: "completed",
  //       creator: "Mr Danfulani",
  //       date: "22-09-2022",
  //       priority: "Medium",
  //     },
  //     {
  //       id: "73456522",
  //       title: "Flight Ticket",
  //       status: "completed",
  //       creator: "Mr Danfulani",
  //       date: "22-09-2022",
  //       priority: "Medium",
  //     },
  //   ],
  //   []
  // );
  const [pageLimit, setPageLimit] = React.useState<string | number>(50);
  const [page, setPage] = React.useState<string | number>(13);
  const [singleSelect, setSingleSelect] = React.useState<string>("");
  const [multiSelect, setMultiSelect] = React.useState<string[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const enableDelete = singleSelect || multiSelect?.length > 0 ? true : false;
  const enableViewData =
    singleSelect || multiSelect?.length === 1 ? true : false;
  //   let checkData = [...data] as Array<any>;
  const [checkData, setCheckData] = React.useState<any>([]);

  useEffect(() => {
    const getAll = async () => {
      const result = await getTickets();
      console.log(result.data);
      if (result?.status == 200) {
        setCheckData(result?.data?.response);
      } else {
        alert("Error while Fetching Data");
      }
    };
    getAll();
  }, []);

  const handleChangePageLimit = (v: any) => setPageLimit(v);
  const handleChangePage = (v: any) => setPage(v);
  const handlePageChange = (p: any) =>
    p && parseInt(p, 10) > 0 ? setPage(p) : setPage(1);

  const handleViewItem = () => {
    
    if (multiSelect?.length !== 1) return;
    const subjectID = multiSelect?.toString();
    navigate(`/main/ticket/${subjectID}`);
  };

  const handleRemoveItem = () => {
    if (multiSelect?.length <= 0) return;
    // if (singleSelect) {
    //     //delete
    // }
    if (multiSelect?.length >= 1) {
      //delete the id's selected
      setCheckData((prevData: any) =>
        prevData.filter((data: any) => !multiSelect.includes(data.id))
      );
      setMultiSelect([]);
    }
  };
  const handleAddItem = () => navigate("/main/ticket/new");
  //functions to handle table input selections
  const handleSearch = (e: any) => alert(search + "...");
  const handleCheckItem = (id: string) =>
    setSingleSelect(toggleId(id, singleSelect));
  const handleMultiCheckItem = (id: string) =>
    setMultiSelect((prevState: Array<string>) =>
      toggleIdInArray([...prevState], id)
    );
  const handleToggleSelectAllItems = () =>
    multiSelect.length !== checkData.length
      ? setMultiSelect((prevState: Array<string>) => [
          ...getAllIdsInArray(checkData, "_id"),
        ])
      : setMultiSelect((prevState: Array<string>) => []);
  const handleApplyTableFilter = () => {
    setShowFilter(false);
  };
  //function to applythe filters
  const appplyFilters = () => {};

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 30;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(14);

    const title = "Ticket Report";
    const headers = [["ID", "TITLE", " CREATOR", "DATE", "PRIORITY", "STATUS"]];

    const data = checkData.map((ticket: any) => [
      ticket.id,
      ticket.title,
      ticket.creator,
      ticket.date,
      ticket.priority,

      ticket.status,
      ticket.amount,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    autoTable(doc, content);
    doc.save("subject.pdf");
  };
  return (
    <DefaultLayout>
      <BreadCrumb pageName="Ticket" homeRoute="#" homeRouteName="Dashboard" />

      <Table.HeaderView>
        <Table.HeaderViewItem>
          <Table.SearchTable
            name="Search Ticket"
            placeholder="Search Ticket..."
            value={search}
            onChange={setSearch}
            onSubmit={handleSearch}
          />
        </Table.HeaderViewItem>
        <Table.HeaderViewItem classNames="mt-5 sm:mt-0">
          <ButtonEventGroup>
            <ButtonEvent
              hide={!enableViewData}
              variant="view"
              onClick={handleViewItem}
            >
              View
            </ButtonEvent>
            {/* <ButtonEvent
              hide={!enableDelete}
              variant="delete"
              onClick={handleRemoveItem}
            >
              Delete
            </ButtonEvent> */}
            {/* <ButtonEvent variant="sheet" onClick={exportPDF}>
              Download
            </ButtonEvent>
            <ButtonEvent variant="print" onClick={() => {}}>
              Print
            </ButtonEvent> */}
            {/* <ButtonEvent variant="filter" onClick={() => setShowFilter(true)}>
              Filter
            </ButtonEvent> */}
            <ButtonEvent variant="add" onClick={handleAddItem}>
              Add
            </ButtonEvent>
          </ButtonEventGroup>
        </Table.HeaderViewItem>
      </Table.HeaderView>
      <div id="ticket-table">
        <Table show>
          <Table.TableRow>
            <Table.Row rowIndex={0}>
              <Table.RowCheckInput
                id="000"
                isChecked={multiSelect.length > 0}
                onChecked={handleToggleSelectAllItems}
              />
              ID
            </Table.Row>
            <Table.Row>Title</Table.Row>
            <Table.Row>Creator</Table.Row>
            <Table.Row>Date</Table.Row>
            <Table.Row>Priority</Table.Row>

            <Table.Row>Status</Table.Row>
          </Table.TableRow>

          <Table.TableItems>
            {checkData?.map((user: any, index: number) => (
              <Table.CellRows
                useSelectOption={false}
                onClick={() => navigate(`/main/ticket/${user?._id}`)}
                key={user?._id + "-" + index}
              >
                <Table.Cell cellIndex={0}>
                  <Table.RowCheckInput
                    id={user?._id}
                    // isChecked={singleSelect === user?.id}
                    isChecked={idExistInArray(multiSelect, user?._id)}
                    onChecked={handleMultiCheckItem}
                  />
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{user?.title}</Table.Cell>
                <Table.Cell>{user?.creator}</Table.Cell>
                <Table.Cell>{user?.date}</Table.Cell>
                <Table.Cell>{user?.priority}</Table.Cell>
                <Table.StatusCell
                  variant={user?.status === "active" ? "success" : "primary"}
                >
                  {user?.status}
                </Table.StatusCell>
              </Table.CellRows>
            ))}
          </Table.TableItems>
        </Table>
        <Table.Pagination
          show
          totalPages={200}
          activePage={Number(page)}
          activeLimit={Number(pageLimit)}
          nextPage={2}
          prevPage={1}
          pageLimit={[5, 10, 15, 20, 25, 50, 100, 200]}
          onPrevPage={handlePageChange}
          onNextPage={handlePageChange}
          onSelectPage={handleChangePage}
          onChangeLimit={handleChangePageLimit}
        />
        <Modal
          onHide={() => setShowFilter(false)}
          onProceed={handleApplyTableFilter}
          show={showFilter}
          title="Ticket Filters"
        >
          <SubjectFilter
            onCancel={() => setShowFilter(false)}
            onFilter={appplyFilters}
          />
        </Modal>
      </div>
    </DefaultLayout>
  );
}
