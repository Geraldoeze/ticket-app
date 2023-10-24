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

export default function Expenses() {
  const navigate = useNavigate();
  let data = React.useMemo(
    () => [
      {
        id: "123",
        paidBy: "Cash",
        date: "06/10/2023",
        amount: "₦67,000",
        description: "payment for sports wares for students",
        vendor: "Abc Shop",
      },
      {
        id: "933",
        paidBy: "Credit Card",
        date: "06/10/2023",
        amount: "₦67,000",
        description: "payment for sports wares for students",
        vendor: "Online",
      },
      {
        id: "483",
        paidBy: "Check",
        date: "06/10/2023",
        amount: "₦67,000",
        description: "payment for sports wares for students",
        vendor: "Vendor",
      },
      {
        id: "023",
        paidBy: "Cash",
        date: "06/10/2023",
        amount: "₦67,000",
        description: "payment for sports wares for students",
        vendor: "Sony Center",
      },
      {
        id: "033",
        paidBy: "Bank Transfer",
        date: "06/10/2023",
        amount: "₦67,000",
        description: "payment for sports wares for students",
        vendor: "Vendor",
      },
      {
        id: "039",
        paidBy: "Bank Transfer",
        date: "06/10/2023",
        amount: "₦67,000",
        description: "payment for sports wares for students",
        vendor: "Abc Store",
      },
      {
        id: "003",
        paidBy: "Cash",
        date: "06/10/2023",
        amount: "₦67,000",
        description: "payment for sports wares for students",
        vendor: "Vendor",
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
      navigate("/app/admins/accounts/expenses");
    }

    if (!burser) return;

    navigate("/app/admins/accounts/expensedetails");
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
  const handleAddItem = () =>
    navigate(`${ROUTES_CONFIG.admin.entities.addExpenses}`);

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
        pageName="Expenses"
      />

      <Table.HeaderView>
        <Table.HeaderViewItem>
          <Table.SearchTable
            name="Search Expenses"
            placeholder="Search Expenses..."
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
            Expense ID
          </Table.Row>
          <Table.Row>Date</Table.Row>
          <Table.Row>Description</Table.Row>
          <Table.Row>Vendor</Table.Row>
          <Table.Row>Amount</Table.Row>
          <Table.Row>Paid By</Table.Row>
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
              <Table.Cell>{user?.date}</Table.Cell>
              <Table.Cell>{user?.description.substring(0, 200)}...</Table.Cell>
              <Table.Cell>{user?.vendor}</Table.Cell>
              <Table.Cell>{user?.amount}</Table.Cell>
              <Table.Cell>{user?.paidBy}</Table.Cell>
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
