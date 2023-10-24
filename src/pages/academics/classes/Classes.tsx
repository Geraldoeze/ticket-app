import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import Table from '../../../components/table';
import { useNavigate } from 'react-router';
import { getAllIdsInArray, idExistInArray, toggleId, toggleIdInArray } from '../../../services/utils/helpers';
import { ButtonEvent, ButtonEventGroup } from '../../../components/button';
import Modal from '../../../components/modal'
import ClassFilter from './ClassFilter';


export default function Classes() {
    const navigate = useNavigate();
    let data = React.useMemo(
        () => [
            {
                id: '15456430',
                courses: '12',
                code: 'ENV',
                number_of_teachers: '12',
                room: 'A2',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456431',
                courses: '12',
                code: 'RDS',
                number_of_teachers: '12',
                room: 'LT1',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456432',
                courses: '12',
                code: 'ODU',
                number_of_teachers: '12',
                room: 'L1',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456433',
                courses: '12',
                code: 'MME',
                number_of_teachers: '12',
                room: 'B6',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456434',
                courses: '12',
                code: 'ACO',
                number_of_teachers: '12',
                room: 'A2',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456435',
                courses: '12',
                code: 'CMO',
                number_of_teachers: '12',
                room: '9',
                time: '12:00am',
                days: ['Teusday',],
                capacity: '3453'
            },
            {
                id: '15456436',
                courses: '12',
                code: 'CWO',
                number_of_teachers: '12',
                room: 'active',
                time: '12:00am',
                days: ['Monday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456437',
                courses: '12',
                code: 'eng',
                number_of_teachers: '12',
                room: 'active',
                time: '12:00am',
                days: ['Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456438',
                courses: '12',
                code: 'KDB',
                number_of_teachers: '12',
                room: '5',
                time: '11:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456439',
                courses: '12',
                code: 'CIA',
                number_of_teachers: '12',
                room: '3',
                time: '15:00pm',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456440',
                courses: '12',
                code: 'MI6',
                number_of_teachers: '12',
                room: '1',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456441',
                courses: '12',
                code: 'FBI',
                number_of_teachers: '12',
                room: '12',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456442',
                courses: '12',
                code: 'eng',
                number_of_teachers: '12',
                room: 'D4',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },
            {
                id: '15456443',
                courses: '12',
                code: 'eng',
                number_of_teachers: '12',
                room: 'M1',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            },

            {
                id: '15456444',
                courses: '12',
                code: 'eng',
                number_of_teachers: '12',
                room: 'C6',
                time: '12:00am',
                days: ['Monday', 'Wednesday', 'Friday'],
                capacity: '3453'
            }
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
    const [checkData, setCheckData] = React.useState<any>([...data]);

    const handleChangePageLimit = (v: any) => setPageLimit(v);
    const handleChangePage = (v: any) => setPage(v);
    const handlePageChange = (p: any) => p && parseInt(p, 10) > 0 ? setPage(p) : setPage(1);
    const handleViewItem = () => {
        if (multiSelect?.length !== 1) return;
        const classID = multiSelect?.toString();
        navigate(`/app/admins/academics/classes/${classID}`);
    }
    const handleRemoveItem = () => {
        if (multiSelect?.length <= 0) return;
        // if (singleSelect) {
            //delete
        // }
        if (multiSelect?.length >= 1) {
            //delete the id's selected
            setCheckData((prevData: any) =>
              prevData.filter((data: any) => !multiSelect.includes(data.id))
            );
            setMultiSelect([])
          }
    }
    const handleAddItem = () => navigate('/app/admins/academics/classes/new')
    //functions to handle table input selections
    const handleSearch = (e: any) => alert(search + "...")
    const handleCheckItem = (id: string) => setSingleSelect(toggleId(id, singleSelect));
    const handleMultiCheckItem = (id: string) => setMultiSelect((prevState: Array<string>) => toggleIdInArray([...prevState], id));
    const handleToggleSelectAllItems = () => multiSelect.length !== data.length
        ? setMultiSelect((prevState: Array<string>) => [...getAllIdsInArray(data, 'id')])
        : setMultiSelect((prevState: Array<string>) => [])
    const handleApplyTableFilter = () => {
        setShowFilter(false);
    }
    //function to applythe filters
    const appplyFilters = () => { }

    return (
        <DefaultLayout>
            <BreadCrumb
                pageName='Classes'
                homeRoute='#'
                homeRouteName='Dashboard'
            />
            <Table.HeaderView>
                <Table.HeaderViewItem>
                    <Table.SearchTable
                        name="Search classes"
                        placeholder="Search Classes..."
                        value={search}
                        onChange={setSearch}
                        onSubmit={handleSearch}
                    />
                </Table.HeaderViewItem>
                <Table.HeaderViewItem classNames="mt-5 sm:mt-0">
                    <ButtonEventGroup>
                        <ButtonEvent hide={!enableViewData} variant="view" onClick={handleViewItem}>View</ButtonEvent>
                        <ButtonEvent hide={!enableDelete} variant="delete" onClick={handleRemoveItem}>Delete</ButtonEvent>
                        {/* <ButtonEvent variant="sheet" onClick={() => { }}>Download</ButtonEvent>
                        <ButtonEvent variant="print" onClick={() => { }}>Print</ButtonEvent> */}
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
                        Class ID
                    </Table.Row>
                    <Table.Row>Courses</Table.Row>
                    <Table.Row>Code</Table.Row>
                    <Table.Row>Teachers</Table.Row>
                    <Table.Row>Room</Table.Row>
                    <Table.Row>Time</Table.Row>
                    <Table.Row>Days</Table.Row>
                    <Table.Row>Capacity</Table.Row>
                </Table.TableRow>

                <Table.TableItems>
                    {
                        checkData?.map((user: any, index: number) => (
                            <Table.CellRows useSelectOption={false} onClick={() => navigate(`/app/admins/academics/classes/${user?.id}`)} key={user?.id + '-' + index}>
                                <Table.Cell cellIndex={0}>
                                    <Table.RowCheckInput
                                        id={user?.id}
                                        // isChecked={singleSelect === user?.id} 
                                        isChecked={idExistInArray(multiSelect, user?.id)}
                                        onChecked={handleMultiCheckItem}
                                    />
                                    {user?.id}
                                </Table.Cell>
                                <Table.Cell>{user?.courses}</Table.Cell>
                                <Table.Cell>{user?.code}</Table.Cell>
                                <Table.Cell>{user?.number_of_teachers}</Table.Cell>
                                <Table.Cell>{user?.room}</Table.Cell>
                                <Table.Cell>{user?.time}</Table.Cell>
                                <Table.Cell>{user?.days}</Table.Cell>
                                <Table.Cell>{user?.capacity}</Table.Cell>
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
                pageLimit={[5, 10, 15, 20, 25, 50, 100, 200]}
                onPrevPage={handlePageChange}
                onNextPage={handlePageChange}
                onSelectPage={handleChangePage}
                onChangeLimit={handleChangePageLimit}
            />
            <Modal
                onHide={() => setShowFilter(false)}
                onProceed={(handleApplyTableFilter)}
                show={showFilter}
                title="Class Filters"
                size="w-full"
            >
                <ClassFilter onCancel={() => setShowFilter(false)} onFilter={appplyFilters} />
            </Modal>
        </DefaultLayout>
    )
}
