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

export default function Salaries() {
  const navigate = useNavigate();
  let data = React.useMemo(
    () => [
      {
        id: "4683",
        employeID: "453",
        employeName: "Jon Snow",
        position: "Teacher",
        department: "Teaching Faculty",
        netSalary: "₦67,000",
      },
      {
        id: "4503",
        employeID: "753",
        employeName: "Musa Abdulraman",
        position: "Teacher",
        department: "Teaching Faculty",
        netSalary: "₦67,000",
      },
      {
        id: "4580",
        employeID: "053",
        employeName: "Ada Ejiofor",
        position: "Teacher",
        department: "Teaching Faculty",
        netSalary: "₦67,000",
      },
      {
        id: "5583",
        employeID: "853",
        employeName: "Ruth Awifor",
        position: "Teacher",
        department: "Teaching Faculty",
        netSalary: "₦67,000",
      },
      {
        id: "4580",
        employeID: "800",
        employeName: "Jon Snow",
        position: "Teacher",
        department: "Teaching Faculty",
        netSalary: "₦67,000",
      },
      {
        id: "5683",
        employeID: "673",
        employeName: "John Doe",
        position: "Teacher",
        department: "Teaching Faculty",
        netSalary: "₦67,000",
      },
      {
        id: "9583",
        employeID: "003",
        employeName: "Jon Snow",
        position: "Teacher",
        department: "Teaching Faculty",
        netSalary: "₦67,000",
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
      navigate("/app/admins/accounts/salaries");
    }

    if (!burser) return;

    navigate("/app/admins/accounts/salarydetails");
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
  const handleAddItem = () => navigate("/app/admins/accounts/addsalary");

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
        pageName="Salaries"
      />

      <Table.HeaderView>
        <Table.HeaderViewItem>
          <Table.SearchTable
            name="Search Salaries"
            placeholder="Search Salaries..."
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
            Reference ID
          </Table.Row>
          <Table.Row>Employee ID</Table.Row>
          <Table.Row>Employee Name</Table.Row>
          <Table.Row>Position</Table.Row>
          <Table.Row>Department</Table.Row>
          <Table.Row>Net Salary</Table.Row>
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
              <Table.Cell>{user?.employeID}</Table.Cell>
              <Table.Cell>{user?.employeName}</Table.Cell>
              <Table.Cell>{user?.position}</Table.Cell>
              <Table.Cell>{user?.department}</Table.Cell>
              <Table.Cell>{user?.netSalary}</Table.Cell>
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
