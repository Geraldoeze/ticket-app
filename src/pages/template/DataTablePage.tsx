import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import BreadCrumb from '../../components/BreadCrumb';
import Table from '../../components/table';
import { useNavigate } from 'react-router';
import { getAllIdsInArray, idExistInArray, toggleId, toggleIdInArray } from '../../services/utils/helpers';
import { ButtonEvent, ButtonEventGroup } from '../../components/button';
import Modal from '../../components/modal'
import DataFilter from './DataFilter';


export default function TemplateTable() {
  const navigate = useNavigate();
  let data = React.useMemo(
    () => [
      {
        id: '123',
        fullName: 'James Maddison',
        status: 'suspended',
        role: 'teacher',
        employeeType: 'academic',
        email: 'james.maddison@gmail.com',
        phone: '+2348012300000',
        photo: 'https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY='
      },
      {
        id: '933',
        fullName: 'Mario Odama',
        status: 'active',
        role: 'driver',
        employeeType: 'none academic',
        email: 'mmodama@gmail.com',
        phone: '+2348972308700',
        photo: '',
      },
      {
        id: '483',
        fullName: 'Musa Abdulraman',
        status: 'pending',
        role: 'teacher',
        employeeType: 'academic',
        email: 'musy123@gmail.com',
        phone: '+23447123456789',
        photo: 'https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY='
      },
      {
        id: '023',
        fullName: 'Ada Ejiofor',
        status: 'active',
        role: 'cleaner',
        employeeType: 'none academic',
        email: 'ada.ejiofor@gmail.com',
        phone: '+23480123456239',
        photo: 'https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY='
      },
      {
        id: '033',
        fullName: 'Ruth Awifor',
        status: 'inactive',
        role: 'teacher',
        employeeType: 'academic',
        email: 'ruth@gmail.com',
        phone: '+23480123456789',
        photo: 'https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY='
      },
      {
        id: '039',
        fullName: 'Ruth Awifor',
        status: 'inactive',
        role: 'teacher',
        employeeType: 'academic',
        email: 'ruth@gmail.com',
        phone: '+23480123456789',
        photo: 'https://randomuser.me/api/portraits/men/75.jpg'
      },
      {
        id: '003',
        fullName: 'Ruth Awifor',
        status: 'inactive',
        role: 'teacher',
        employeeType: 'academic',
        email: 'ruth@gmail.com',
        phone: '+23480123456789',
        photo: 'https://media.istockphoto.com/id/1354898579/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.webp?s=1024x1024&w=is&k=20&c=oE3F8y9YR2S1ANzC1nog8aNs2K08kUg5fIUhI_zYTTY='
      },
    ],
    []
  );
  const [pageLimit, setPageLimit] = React.useState<string | number>(50);
  const [page, setPage] = React.useState<string | number>(13);
  const [singleSelect, setSingleSelect] = React.useState<string>('');
  const [multiSelect, setMultiSelect] = React.useState<string[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const [showFilter, setShowFilter] = React.useState<boolean>(false);
  const enableDelete = singleSelect || multiSelect?.length > 0 ? true : false;
  const enableViewData = singleSelect || multiSelect?.length === 1 ? true : false
  let checkData = [...data] as Array<any>;

  const handleChangePageLimit = (v: any) => setPageLimit(v);
  const handleChangePage = (v: any) => setPage(v);
  const handlePageChange = (p: any) => p && parseInt(p, 10) > 0 ? setPage(p) : setPage(1);
  const handleViewItem = () => {
    let datumId;
    if (singleSelect){
      datumId = singleSelect;
    }

    if (multiSelect && multiSelect?.length === 1) {
      datumId = multiSelect[0] as any;
      navigate('/apps/templates/DetailPage')
      // navigate('/apps/templates/DetailPage'+datumId)
    }

    if (!datumId) return;
    navigate('/apps/templates/DetailPage')
    // navigate('/apps/templates/DetailPage'+datumId)
  }
  const handleRemoveItem = () => {
    if (!singleSelect && multiSelect?.length !== 1) return;

    if (singleSelect) {
      //delete
    }

    if (multiSelect) {
      //delete the one
    }
  }
  const handleAddItem = () => navigate('/app/templates/NewFormPage')
  //functions to handle table input selections
  const handleSearch = (e: any) => alert(search+"...")
  const handleCheckItem = (id: string) => setSingleSelect(toggleId(id, singleSelect));
  const handleMultiCheckItem = (id: string) => setMultiSelect((prevState: Array<string>) => toggleIdInArray([...prevState], id));
  const handleToggleSelectAllItems = () => multiSelect.length !== data.length 
    ? setMultiSelect((prevState: Array<string>) => [...getAllIdsInArray(data, 'id')])
    : setMultiSelect((prevState: Array<string>) => [])
  const handleApplyTableFilter = () => {
    setShowFilter(false);
  }
  //function to applythe filters
  const appplyFilters = () => {}

  return (
    <DefaultLayout>
      <BreadCrumb 
        pageName='Template Table' 
        homeRoute='/app/dashboard'
        homeRouteName='Dashboard'
      />
      <Table.HeaderView>
        <Table.HeaderViewItem>
          <Table.SearchTable 
            name="Search Template"
            placeholder="Search Template List..."
            value={search}
            onChange={setSearch}
            onSubmit={handleSearch}
          />
        </Table.HeaderViewItem>
        <Table.HeaderViewItem classNames="mt-5 sm:mt-0">
            <ButtonEventGroup>
              {/* NOTE: Reomove disble to use the onClick handlers */}
              <ButtonEvent hide={!enableViewData} variant="view" onClick={handleViewItem}>View</ButtonEvent>
              <ButtonEvent hide={!enableDelete} variant="delete" disabled onClick={handleRemoveItem}>Delete</ButtonEvent>
              <ButtonEvent variant="sheet" onClick={() => {}}>Download</ButtonEvent>
              <ButtonEvent variant="print" onClick={() => {}}>Print</ButtonEvent>
              <ButtonEvent variant="filter" onClick={() => setShowFilter(true)}>Filter</ButtonEvent>
              <ButtonEvent variant="add" onClick={handleAddItem}>Add</ButtonEvent>
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
          <Table.Row>Role</Table.Row>
        </Table.TableRow>
        
        <Table.TableItems>
          {
            checkData?.map((user: any, index: number) => (
              <Table.CellRows useSelectOption onClick={() => navigate(user?.id)} key={user?.id + '-' + index}>
                <Table.Cell cellIndex={0}>
                  <Table.RowCheckInput 
                    id={user?.id} 
                    // isChecked={singleSelect === user?.id} 
                    isChecked={idExistInArray(multiSelect, user?.id)} 
                    onChecked={handleMultiCheckItem}
                  />
                  {user?.id}
                </Table.Cell>
                <Table.Cell>{user?.fullName}</Table.Cell>
                <Table.Cell><Table.Photo photoURL={user?.photo} desc="teacher"/></Table.Cell>
                <Table.Cell>{user?.phone}</Table.Cell>
                <Table.Cell>{user?.email}</Table.Cell>
                <Table.Cell>{user?.role}</Table.Cell>
                </Table.CellRows>
            ))
          }
        </Table.TableItems>

      </Table>
      <Table.Pagination
        show
        totalPages={200}
        activePage={Number(page)}
        activeLimit={Number(pageLimit)}
        nextPage={2}
        prevPage={1}
        pageLimit={[5,10,15,20,25,50,100,200]}
        onPrevPage={handlePageChange} 
        onNextPage={handlePageChange}
        onSelectPage={handleChangePage}
        onChangeLimit={handleChangePageLimit}
      />
      <Modal 
        onHide={() => setShowFilter(false)}
        onProceed={(handleApplyTableFilter)}
        show={showFilter} 
        title="Teachers Filters"  
      >
        <DataFilter onCancel={() => setShowFilter(false)} onFilter={appplyFilters}/>
      </Modal>
    </DefaultLayout>
  )
}
