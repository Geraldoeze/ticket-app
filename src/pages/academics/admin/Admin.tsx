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

import { getUsers } from "../../../api/httpRequest";
import { getLocalStorageItem } from "../../../utils/storage";

import Logo from "../../../images/logo/vastImage.jpeg";

// import SubjectFilter from './SubjectFilter';

export default function Admin() {
  const navigate = useNavigate();

  const [pageLimit, setPageLimit] = React.useState<string | number>(5);
  const [page, setPage] = React.useState<string | number>(1);
  const [totalpage, setTotalPage] = React.useState<number | string>(1);
  const [singleSelect, setSingleSelect] = React.useState<string>("");
  const [multiSelect, setMultiSelect] = React.useState<string[]>([]);
  const [search, setSearch] = React.useState<string>("");

  const [showFilter, setShowFilter] = React.useState<boolean>(false);

  const [checkData, setCheckData] = React.useState<any>([
 
  ]);

  useEffect(() => {
    const getData = JSON.parse(getLocalStorageItem());
    const getAll = async () => {
      if (!!getData) {
        const result = await getUsers(getData?.adminId, page, pageLimit);
        console.log(result.data);
        if (result?.status == 200) {
          setCheckData(result?.data?.response);
          setTotalPage(result.data?.numberOfPages);
        } else {
          alert("Error while Fetching Data");
        }
      }
    };
    getAll();
  }, [pageLimit, page]);

  const enableDelete = singleSelect || multiSelect?.length > 0 ? true : false;
  const handleChangePageLimit = (v: any) => setPageLimit(v);
  const handleChangePage = (v: any) => setPage(v);
  const handlePageChange = (p: any) =>
    p && parseInt(p, 10) > 0 ? setPage(p) : setPage(1);

  const handleViewItem = () => {
    if (multiSelect?.length !== 1) return;
    const subjectID = multiSelect?.toString();
    navigate(`/app/tickets/${subjectID}`);
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
  const handleAddItem = () => navigate("/app/admins/dashboard/new");
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

  return (
    <DefaultLayout>
      <BreadCrumb pageName="Admin" homeRoute="#" homeRouteName="Dashboard" />

      <Table.HeaderView>
        <Table.HeaderViewItem>
          {/* <Table.SearchTable
            name="Search Admin"
            placeholder="Search Admin..."
            value={search}
            onChange={setSearch}
            onSubmit={handleSearch}
          /> */}
        </Table.HeaderViewItem>
        <Table.HeaderViewItem classNames="mt-5 sm:mt-0">
          <ButtonEventGroup>
            {/* <ButtonEvent
              hide={!enableDelete}
              variant="delete"
              onClick={handleRemoveItem}
            >
              Delete
            </ButtonEvent> */}
            <ButtonEvent variant="add" onClick={handleAddItem}>
              Add New User
            </ButtonEvent>
          </ButtonEventGroup>
        </Table.HeaderViewItem>
      </Table.HeaderView>
      {checkData?.length == 0 && (
        <h2 className="mt-10 text-center text-2xl">
          You have not created a User.
          <br /> Kindly create one
        </h2>
      )}
      {checkData?.length >= 1 && (
        <>
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
                <Table.Row>Username</Table.Row>
                <Table.Row>Email</Table.Row>
                <Table.Row>Password</Table.Row>
              </Table.TableRow>

              <Table.TableItems>
                {checkData?.map((user: any, index: number) => (
                  <Table.CellRows
                    useSelectOption={false}
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

                    <Table.Cell>{user?.username}</Table.Cell>
                    <Table.Cell>{user?.email ?? 'test@testUser.com'}</Table.Cell>
                    <Table.Cell>{user?.password}</Table.Cell>
                  </Table.CellRows>
                ))}
              </Table.TableItems>
            </Table>
            <Table.Pagination
              show
              totalPages={totalpage}
              activePage={Number(page)}
              activeLimit={Number(pageLimit)}
              nextPage={Number(page) + 1}
              prevPage={Number(page) - 1}
              pageLimit={[5, 10, 15, 20]}
              onPrevPage={handlePageChange}
              onNextPage={handlePageChange}
              onSelectPage={handleChangePage}
              onChangeLimit={handleChangePageLimit}
            />
          </div>
        </>
      )}
    </DefaultLayout>
  );
}
