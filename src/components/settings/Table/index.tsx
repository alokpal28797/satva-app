import React from 'react'
import { Space, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const DynamicTable = (props: any) => {

    const { userDataSource , showModal} = props
    const userColumn = [
        {
            title: 'Organization Name',
            dataIndex: 'name',
            key: 'name',
            // defaultSortOrder: 'descend',
            sorter: (a: any, b: any) => {
                return a.name.length - b.name.length;
            },

            // sortDirections: ['descend'],
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Created on',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <Space size={10}>
                    <EditOutlined
                        className="table-edit-icon"
                    // onClick={editDataHandler}
                    />
                    <DeleteOutlined
                        className="table-delete-icon"
                    onClick={showModal}
                    />
                </Space>
            )
        },
    ]




    return (
        <div>
            <Table
                dataSource={userDataSource}
                columns={userColumn}
                pagination={{
                    // total: totalRecords,
                    // current: currentPage,
                    // onChange: paginationChangeHandler,
                    // className: 'dynamic-table__pagination',
                }}

            >
            </Table></div>
    )
}

export default DynamicTable