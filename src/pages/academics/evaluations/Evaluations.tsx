import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import Table from '../../../components/table';
import { useNavigate } from 'react-router';
import { getAllIdsInArray, idExistInArray, toggleId, toggleIdInArray } from '../../../services/utils/helpers';
import { ButtonEvent, ButtonEventGroup } from '../../../components/button';
import Modal from '../../../components/modal'
import EvaluationFilter from './EvaluationFilter';

export default function Evaluations() {
    const navigate = useNavigate();
    let data = React.useMemo(
        () => [
            {
                id: '15456433',
                course: 'English Language',
                assessment_type: 'test',
                assessment_date: '2023-07-12T09:31:48.143Z',
                max_score: '112332',
                highest_score: '13',
                grade: 'A',
            },
            {
                id: '15456433',
                course: 'Civic Education',
                assessment_type: 'exam',
                assessment_date: '2023-07-12T09:31:48.143Z',
                max_score: '92332',
                highest_score: '130',
                grade: 'B',
            },
            {
                id: '15456433',
                course: 'Agricultural Science',
                assessment_type: 'Exam',
                assessment_date: '2023-07-12T09:31:48.143Z',
                max_score: '902332',
                highest_score: '103',
                grade: 'A',
            },
            {
                id: '15456433',
                course: 'Chemistry',
                assessment_type: 'quiz',
                assessment_date: '2023-07-12T09:31:48.143Z',
                max_score: '22332',
                highest_score: '183',
                grade: 'B',
            },
            {
                id: '15456433',
                course: 'Mathematics',
                assessment_type: 'quiz',
                assessment_date: '2023-07-12T09:31:48.143Z',
                max_score: '112332',
                highest_score: '444',
                grade: 'A',
            },
            {
                id: '15456433',
                course: 'French Language',
                assessment_type: 'test',
                assessment_date: '2023-07-12T09:31:48.143Z',
                max_score: '112332',
                highest_score: '13',
                grade: 'A',
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
    const handleAddItem = () => navigate('/app/admins/academics/evaluations/new')
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
                pageName='Evaluations'
                homeRoute='/app/dashboard'
                homeRouteName='Dashboard'
            />
            <Table.HeaderView>
                <Table.HeaderViewItem>
                    <Table.SearchTable
                        name="Search Evaluations"
                        placeholder="Search Evaluations..."
                        value={search}
                        onChange={setSearch}
                        onSubmit={handleSearch}
                    />
                </Table.HeaderViewItem>
                <Table.HeaderViewItem classNames="mt-5 sm:mt-0">
                    <ButtonEventGroup>
                        <ButtonEvent hide={!enableViewData} variant="view" disabled onClick={handleViewItem}>View</ButtonEvent>
                        {/* <ButtonEvent hide={!enableDelete} variant="delete" disabled onClick={handleRemoveItem}>Delete</ButtonEvent> */}
                        {/* <ButtonEvent variant="sheet" onClick={() => { }}>Download</ButtonEvent> */}
                        {/* <ButtonEvent variant="print" onClick={() => { }}>Print</ButtonEvent> */}
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
                        Evaluation ID
                    </Table.Row>
                    <Table.Row>Course</Table.Row>
                    <Table.Row>Assessment Type</Table.Row>
                    <Table.Row>Assessment Date</Table.Row>
                    <Table.Row>Max Score</Table.Row>
                    <Table.Row>Highest Score</Table.Row>
                    <Table.Row>Grade</Table.Row>
                </Table.TableRow>

                <Table.TableItems>
                    {
                        checkData?.map((user: any, index: number) => (
                            <Table.CellRows useSelectOption={false} onClick={() => navigate(`/app/admins/academics/evaluations/${user?.id}`)} key={user?.id + '-' + index}>
                                <Table.Cell cellIndex={0}>
                                    <Table.RowCheckInput
                                        id={user?.id}
                                        // isChecked={singleSelect === user?.id} 
                                        isChecked={idExistInArray(multiSelect, user?.id)}
                                        onChecked={handleMultiCheckItem}
                                    />
                                    {user?.id}
                                </Table.Cell>
                                <Table.Cell>{user?.course}</Table.Cell>
                                <Table.Cell>{user?.assessment_type}</Table.Cell>
                                <Table.Cell>{user?.assessment_date}</Table.Cell>
                                <Table.Cell>{user?.max_score}</Table.Cell>
                                <Table.Cell>{user?.highest_score}</Table.Cell>
                                <Table.Cell>{user?.grade}</Table.Cell>
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
                title="Evaluations Filters"
            >
                <EvaluationFilter onCancel={() => setShowFilter(false)} onFilter={appplyFilters} />
            </Modal>
        </DefaultLayout>
    )
}
