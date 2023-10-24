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
import PayrollFilter from "./PayrollFilter";
import { ROUTES_CONFIG } from "../../../../../layout/config";

export default function PayrollPage() {
  const navigate = useNavigate();
  let data = React.useMemo(
    () => [
      {
        id: "123",
        employeeName: "James Maddison",
        status: "Paid",
        payPeriod: "Weekly",
        totalEarnings: "₦67,000",
        paymentMethod: "Direct Deposit",
      },
      {
        id: "933",
        employeeName: "Mario Odama",
        status: "Due",
        payPeriod: "Weekly",
        totalEarnings: "₦67,000",
        paymentMethod: "Electronic Transfer",
      },
      {
        id: "483",
        employeeName: "Musa Abdulraman",
        payPeriod: "Bi-Weekly",
        status: "Due",
        totalEarnings: "₦67,000",
        paymentMethod: "Direct Deposit",
      },
      {
        id: "023",
        employeeName: "Ada Ejiofor",
        status: "Paid",
        payPeriod: "Monthly",
        totalEarnings: "₦67,000",
        paymentMethod: "Direct Deposit",
      },
      {
        id: "033",
        employeeName: "Ruth Awifor",
        status: "Paid",
        payPeriod: "Monthly",
        totalEarnings: "₦67,000",
        paymentMethod: "Electronic Transfer",
      },
      {
        id: "039",
        employeeName: "Ruth Awifor",
        status: "Paid",
        payPeriod: "Weekly",
        totalEarnings: "₦67,000",
        paymentMethod: "Physical Check",
      },
      {
        id: "003",
        employeeName: "Ruth Awifor",
        status: "Due",
        payPeriod: "Bi-Weekly",
        totalEarnings: "₦67,000",
        paymentMethod: "Direct Deposit",
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
  const enableViewData =
    singleSelect || multiSelect?.length === 1 ? true : false;
  let checkData = [...data] as Array<any>;
  const enableDelete = singleSelect || multiSelect?.length > 0 ? true : false;

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
      navigate("/apps/admins/" + burser.id);
    }

    if (!burser) return;

    navigate("/app/admins/accounts/payrolls" + burser?.id);
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
  const handleAddItem = () => navigate("/app/admins/accounts/addpayroll");
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
  //function to applythe filters
  const appplyFilters = () => {};

  return (
    <DefaultLayout>
      <Breadcrumb
        homeRoute={ROUTES_CONFIG.admin.entities.dashboard}
        homeRouteName="Dashboard"
        pageName="Payrolls"
      />

      <Table.HeaderView>
        <Table.HeaderViewItem>
          <Table.SearchTable
            name="Search Student"
            placeholder="Search Students Payments..."
            value={search}
            onChange={setSearch}
            onSubmit={handleSearch}
          />
        </Table.HeaderViewItem>
        <Table.HeaderViewItem classNames="mt-5 sm:mt-0">
          <ButtonEventGroup>
            <ButtonEvent
              hide={!enableDelete}
              variant="delete"
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
            Employee ID
          </Table.Row>
          <Table.Row>Employee Name</Table.Row>
          <Table.Row>Pay Period</Table.Row>
          <Table.Row>Total Earnings</Table.Row>
          <Table.Row>Payment Method</Table.Row>
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
              <Table.Cell>{user?.employeeName}</Table.Cell>
              <Table.Cell>{user?.payPeriod}</Table.Cell>
              <Table.Cell>{user?.totalEarnings}</Table.Cell>
              <Table.Cell>{user?.paymentMethod}</Table.Cell>
              <Table.StatusCell
                variant={user?.status === "Paid" ? "success" : "error"}
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
        title="Payroll Filters"
      >
        <PayrollFilter
          onCancel={() => setShowFilter(false)}
          onFilter={appplyFilters}
        />
      </Modal>
    </DefaultLayout>
  );
}
