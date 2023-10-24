import React from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import BreadCrumb from '../../../components/BreadCrumb';
import Table from '../../../components/table';
import { useNavigate } from 'react-router';
import { getAllIdsInArray, idExistInArray, toggleId, toggleIdInArray } from '../../../services/utils/helpers';
import { ButtonEvent, ButtonEventGroup } from '../../../components/button';
import Modal from '../../../components/modal'
import QuestionFilter from './QuestionFilter';


export default function Questions() {
    const navigate = useNavigate();
    let data = React.useMemo(
        () => [
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
            {
                id: '15456433',
                subject: 'PHYSICS',
                question_text: 'How does Newtons law of motion work?',
                topic: 'Motion & Inertia',
                mark: '21',
                class: 'SS1B'
            },
           
        ],
        []
    );
    const [pageLimit, setPageLimit] = React.useState<string | number>(50);
    const [page, setPage] = React.useState<string | number>(1);
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
    const handleAddItem = () => navigate('/app/admins/academics/questions/new')
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
                pageName='Questions'
                homeRoute='/app/dashboard'
                homeRouteName='Dashboard'
            />
            <Table.HeaderView>
                <Table.HeaderViewItem>
                    <Table.SearchTable
                        name="Search questions"
                        placeholder="Search Questions..."
                        value={search}
                        onChange={setSearch}
                        onSubmit={handleSearch}
                    />
                </Table.HeaderViewItem>
                <Table.HeaderViewItem classNames="mt-5 sm:mt-0">
                    <ButtonEventGroup>
                        <ButtonEvent hide={!enableViewData} variant="view" disabled onClick={handleViewItem}>View</ButtonEvent>
                        <ButtonEvent hide={!enableDelete} variant="delete" disabled onClick={handleRemoveItem}>Delete</ButtonEvent>
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
                        Question ID
                    </Table.Row>
                    <Table.Row>Subject</Table.Row>
                    <Table.Row>Question Text</Table.Row>
                    <Table.Row>Topic</Table.Row>
                    <Table.Row>Mark</Table.Row>
                    <Table.Row>Class</Table.Row>
                </Table.TableRow>

                <Table.TableItems>
                    {
                        checkData?.map((user: any, index: number) => (
                            <Table.CellRows useSelectOption={false} onClick={() => navigate(`/app/admins/academics/questions/${user?.id}`)} key={user?.id + '-' + index}>
                                <Table.Cell cellIndex={0}>
                                    <Table.RowCheckInput
                                        id={user?.id}
                                        // isChecked={singleSelect === user?.id} 
                                        isChecked={idExistInArray(multiSelect, user?.id)}
                                        onChecked={handleMultiCheckItem}
                                    />
                                    {user?.id}
                                </Table.Cell>
                                <Table.Cell>{user?.subject}</Table.Cell>
                                <Table.Cell>{user?.question_text}</Table.Cell>
                                <Table.Cell>{user?.topic}</Table.Cell>
                                <Table.Cell>{user?.mark}</Table.Cell>
                                <Table.Cell>{user?.class}</Table.Cell>
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
                title="Question Filters"
            >
                <QuestionFilter onCancel={() => setShowFilter(false)} onFilter={appplyFilters} />
            </Modal>
        </DefaultLayout>
    )
}
