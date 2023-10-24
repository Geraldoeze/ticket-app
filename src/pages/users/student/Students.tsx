import React from "react";
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
import StudentsFilter from "./StudentFilter";
import { ROUTES_CONFIG } from "../../../layout/config";
import SearchBar from "../../../components/TableSearchbar";

export default function Students() {
  const navigate = useNavigate();
  let data = React.useMemo(
    () => [
      {
        id: "123",
        full_name: "James Maddison",
        status: "suspended",
        email: "james.maddison@gmail.com",
        phone: "+2348012300000",
        photo:
          "https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY=",
      },
      {
        id: "933",
        full_name: "Mario Odama",
        status: "active",
        email: "mmodama@gmail.com",
        phone: "+2348972308700",
        photo: "",
      },
      {
        id: "483",
        full_name: "Musa Abdulraman",
        status: "pending",
        email: "musy123@gmail.com",
        phone: "+23447123456789",
        photo:
          "https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY=",
      },
      {
        id: "023",
        full_name: "Ada Ejiofor",
        status: "active",
        email: "ada.ejiofor@gmail.com",
        phone: "+23480123456239",
        photo:
          "https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY=",
      },
      {
        id: "033",
        full_name: "Ruth Awifor",
        status: "inactive",
        email: "ruth@gmail.com",
        phone: "+23480123456789",
        photo:
          "https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY=",
      },
      {
        id: "039",
        full_name: "Ruth Awifor",
        status: "inactive",
        email: "ruth@gmail.com",
        phone: "+23480123456789",
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
      },
      {
        id: "003",
        full_name: "Ruth Awifor",
        status: "inactive",
        email: "ruth@gmail.com",
        phone: "+23480123456789",
        photo:
          "https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY=",
      },
    ],
    []
  );
  const [pageLimit, setPageLimit] = React.useState<string | number>(50);
  const [page, setPage] = React.useState<string | number>(13);
  const [singleSelect, setSingleSelect] = React.useState<string>("");
  const [id, setId] = React.useState<string>("");
  const [multiSelect, setMultiSelect] = React.useState<string[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const enableDelete = singleSelect || multiSelect?.length > 0 ? true : false;
  const enableViewData =
    singleSelect || multiSelect?.length === 1 ? true : false;
  let checkData = [...data] as Array<any>;

  const [filteredData, setFilteredData] = React.useState<any>(data)

  const handleChangePageLimit = (v: any) => setPageLimit(v);
  const handleChangePage = (v: any) => setPage(v);
  const handlePageChange = (p: any) =>
    p && parseInt(p, 10) > 0 ? setPage(p) : setPage(1);
  const handleViewItem = (id: string) => {
    let teacher;
    if (singleSelect) {
      teacher = singleSelect;
    }

    if (multiSelect && multiSelect?.length === 1) {
      teacher = multiSelect[0] as any;
      navigate(`/app/admins/users/students/${id}`);
    }

    if (!teacher) return;

    navigate(`/app/admins/users/students/${id}`);
  };
  
  const handleViewStudent = (id: string) => {
    navigate(`${ROUTES_CONFIG.admin.entities.students}/${id}`);
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
  const handleAddItem = () => navigate(ROUTES_CONFIG.admin.entities.newStudent);
  //functions to handle table input selections
  const handleSearch = (e: any) => alert(search + "...");
  const handleCheckItem = (id: string) =>
    setSingleSelect(toggleId(id, singleSelect));
  const handleMultiCheckItem = (id: string) => {
    setMultiSelect((prevState: Array<string>) =>
      toggleIdInArray([...prevState], id)
    );
    setId(id);
  };
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

  const searchOptions = [
    { label: 'Name', value: 'full_name' },
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    // Add other search options here
  ];

  const searchData = (searchValue: string, selectedOption: string) => {
    let value = ''
    const filteredData = data.filter((item) => {
       value = item[selectedOption as keyof typeof item];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchValue.toLowerCase());
      } else {
       return data;
      }
      
    });
    if (searchValue === '') {
      setFilteredData(data)
    } else {
      setFilteredData(filteredData)
    }
    
  };
  
 

 

  return (
    <DefaultLayout>
      <BreadCrumb
        pageName="Students"
        homeRoute={ROUTES_CONFIG.admin.entities.students}
        homeRouteName="Dashboard"
      />
      <Table.HeaderView>
        <Table.HeaderViewItem>
          <div className="w-72">
          <SearchBar options={searchOptions} onSearch={searchData} />
          </div>
          {/* <Table.SearchTable
            name="Search Student"
            placeholder="Search Students..."
            value={search}
            onChange={setSearch}
            onSubmit={handleSearch}
          /> */}
        </Table.HeaderViewItem>
        <Table.HeaderViewItem classNames="mt-5 sm:mt-0">
          <ButtonEventGroup>
            <ButtonEvent
              hide={!enableViewData}
              variant="view"
              onClick={() => handleViewItem(id)}
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
            ID
          </Table.Row>
          <Table.Row>Name</Table.Row>
          <Table.Row>Photo</Table.Row>
          <Table.Row>Phone</Table.Row>
          <Table.Row>Email</Table.Row>
          <Table.Row>Status</Table.Row>
        </Table.TableRow>

        <Table.TableItems>
          {filteredData?.map((user: any, index: number) => (
            <Table.CellRows
              useSelectOption={false}
              onClick={() => handleViewStudent(user?.id)}
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
              <Table.Cell>{user?.full_name}</Table.Cell>
              <Table.Cell>
                <Table.Photo photoURL={user?.photo} desc="teacher" />
              </Table.Cell>
              <Table.Cell>{user?.phone}</Table.Cell>
              <Table.Cell>{user?.email}</Table.Cell>
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
