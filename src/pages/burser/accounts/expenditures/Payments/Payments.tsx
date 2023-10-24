import React from "react";
import DefaultLayout from "../../../../../layout/DefaultLayout";
import Breadcrumb from "../../../../../components/BreadCrumb";
import Table from "../../../../../components/table";
import { useNavigate } from "react-router";
import {
  getAllIdsInArray,
  idExistInArray,
  toggleId,
  toggleIdInArray,
} from "../../../../../services/utils/helpers";
import {
  ButtonEvent,
  ButtonEventGroup,
} from "../../../../../components/button";
import Modal from "../../../../../components/modal";
import StudentsFilter from "../../../../users/student/StudentFilter";
import { ROUTES_CONFIG } from "../../../../../layout/config";

export default function Payments() {
  const navigate = useNavigate();
  let data = React.useMemo(
    () => [
      {
        id: "123",
        studentName: "James Maddison",
        date: "06/10/2023",
        paymentMethod: "POS",
        amount: "₦67,000",
        purpose: "Library",
        status: "Successful",
      },
      {
        id: "933",
        studentName: "Mario Odama",
        status: "Pending",
        date: "06/10/2023",
        paymentMethod: "Cash",
        amount: "₦67,000",
        purpose: "Examination Result",
      },
      {
        id: "483",
        studentName: "Musa Abdulraman",
        status: "Failed",
        date: "07/10/2023",
        paymentMethod: "Bank Deposit",
        amount: "₦67,000",
        purpose: "Graduation",
        term: "Third",
      },
      {
        id: "023",
        studentName: "Ada Ejiofor",
        status: "Refunded",
        date: "23/07/2023",
        paymentMethod: "POS",
        amount: "₦67,000",
        purpose: "Hostel",
      },
      {
        id: "033",
        studentName: "Ruth Awifor",
        status: "Successful",
        date: "02/12/2023",
        paymentMethod: "Bank Transfer",
        amount: "₦67,000",
        purpose: "Security",
      },
      {
        id: "039",
        studentName: "Ruth Awifor",
        status: "Verified",
        date: "06/11/2023",
        paymentMethod: "credit/debit card",
        amount: "₦67,000",
        purpose: "Development",
      },
      {
        id: "003",
        studentName: "Ruth Awifor",
        status: "Pending",
        date: "09/10/2023",
        paymentMethod: "Cash",
        amount: "₦97,000",
        purpose: "Sports",
      },
    ],
    []
  );
  const [pageLimit, setPageLimit] = React.useState<string | number>(50);
  const [page, setPage] = React.useState<string | number>(13);
  const [singleSelect, setSingleSelect] = React.useState<string>("");
  const [multiSelect, setMultiSelect] = React.useState<string[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const enableDelete = singleSelect || multiSelect?.length > 0 ? true : false;
  const enableViewData =
    singleSelect || multiSelect?.length === 1 ? true : false;
  let checkData = [...data] as Array<any>;

  const [showSearchInputs, setShowSearchInputs] = React.useState(false);

  const handleChangePageLimit = (v: any) => setPageLimit(v);
  const handleChangePage = (v: any) => setPage(v);
  const handlePageChange = (p: any) =>
    p && parseInt(p, 10) > 0 ? setPage(p) : setPage(1);
  const handleViewItem = () => {
    let burser;
    if (singleSelect) {
      burser = singleSelect;
    }

    if (multiSelect && multiSelect?.length === 1) {
      burser = multiSelect[0] as any;
      navigate("/app/admins/accounts/payments");
    }

    if (!burser) return;

    navigate("/app/admins/accounts/paymentdetails");
  };
  const handleRemoveItem = () => {
    if (!singleSelect && multiSelect?.length !== 1) return;

    if (singleSelect) {
      //delete
    }

    if (multiSelect) {
      //delete the one
    }
  };
  const handleAddItem = () => navigate("/app/admins/accounts/addpayments");
  //functions to handle table input selections
  const handleSearch = (e: any) => alert(search + "...");
  const handleCheckItem = (id: string) =>
    setSingleSelect(toggleId(id, singleSelect));
  const handleMultiCheckItem = (id: string) =>
    setMultiSelect((prevState: Array<string>) =>
      toggleIdInArray([...prevState], id)
    );
  const handleToggleSelectAllItems = () =>
    multiSelect.length !== data.length
      ? setMultiSelect((prevState: Array<string>) => [
          ...getAllIdsInArray(data, "id"),
        ])
      : setMultiSelect((prevState: Array<string>) => []);
  const handleApplyTableFilter = () => {
    setShowFilter(false);
  };

  const handleToggleSearchInputs = () => {
    setShowSearchInputs((prevState) => !prevState);
  };

  //function to applythe filters
  const appplyFilters = () => {};

  return (
    <DefaultLayout>
      <Breadcrumb
        homeRoute={ROUTES_CONFIG.admin.entities.dashboard}
        homeRouteName="Dashboard"
        pageName="Payments"
      />

      <Table.HeaderView>
        <Table.HeaderViewItem>
          <Table.SearchTable
            name="Search Payments"
            placeholder="Search Payments..."
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
            <ButtonEvent
              hide={!enableDelete}
              variant="delete"
              disabled
              onClick={handleRemoveItem}
            >
              Delete
            </ButtonEvent>
            <ButtonEvent variant="sheet" onClick={() => {}}>
              Download
            </ButtonEvent>
            <ButtonEvent variant="print" onClick={() => {}}>
              Print
            </ButtonEvent>
            <ButtonEvent variant="filter" onClick={() => setShowFilter(true)}>
              Filter
            </ButtonEvent>
            <ButtonEvent variant="add" onClick={handleAddItem}>
              Add
            </ButtonEvent>
          </ButtonEventGroup>
        </Table.HeaderViewItem>
      </Table.HeaderView>
      <Table show>
        <Table.TableRow>
          <Table.Row rowIndex={0}>
            <Table.RowCheckInput
              id="000"
              isChecked={multiSelect.length > 0}
              onChecked={handleToggleSelectAllItems}
            />
            Receipt ID
          </Table.Row>
          <Table.Row>Student Name</Table.Row>
          <Table.Row>Date</Table.Row>
          <Table.Row>Amount</Table.Row>
          <Table.Row>Payment Method</Table.Row>
          <Table.Row>Purpose</Table.Row>
          <Table.Row>Status</Table.Row>
        </Table.TableRow>

        <Table.TableItems>
          {checkData?.map((user: any, index: number) => (
            <Table.CellRows
              useSelectOption
              onClick={() => navigate(user?.id)}
              key={user?.id + "-" + index}
            >
              <Table.Cell cellIndex={0}>
                <Table.RowCheckInput
                  id={user?.id}
                  // isChecked={singleSelect === user?.id}
                  isChecked={idExistInArray(multiSelect, user?.id)}
                  onChecked={handleMultiCheckItem}
                />
                {user?.id}
              </Table.Cell>
              <Table.Cell>{user?.studentName}</Table.Cell>
              <Table.Cell>{user?.date}</Table.Cell>
              <Table.Cell>{user?.amount}</Table.Cell>
              <Table.Cell>{user?.paymentMethod}</Table.Cell>
              <Table.Cell>{user?.purpose}</Table.Cell>
              <Table.StatusCell
                variant={
                  user?.status === "Successful" || user?.status === "Verified"
                    ? "success"
                    : user?.status === "Pending"
                    ? "warning"
                    : user?.status === "Failed"
                    ? "error"
                    : "primary" // Default color for other statuses
                }
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
        title="Teachers Filters"
      >
        <StudentsFilter
          onCancel={() => setShowFilter(false)}
          onFilter={appplyFilters}
        />
      </Modal>
    </DefaultLayout>
  );
}
