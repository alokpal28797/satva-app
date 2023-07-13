import React from 'react'
import { Space, Switch, Table } from 'antd';
import Column from 'antd/es/table/Column';
import './index.css'
import { useState } from 'react'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';


const DynamicTable = (props: any) => {
    const { userDataSource, showModal } = props
    const [enabled, setEnabled] = useState(userDataSource);

    console.log(enabled)
    const onToggle = (checked: boolean, index: any) => {
        const data = enabled.map((item: any, ind: any) => {
            if (checked == true && index === ind) {
                return { ...item, status: `enable` }
            }
            if (checked == false && index === ind) {
                return { ...item, status: `disable` }
            }
            else {
                return item
            }

        })

        setEnabled(data)

    };
    console.log(enabled)

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
            render: (status: any, record: any, index: any) => {

                return (
                    <Space>
                        {status === 'enable' ? <> <Switch size='small' defaultChecked onChange={(e) => { onToggle(e, index) }} /><span>Enable</span></> : <><Switch size='small' checked={false}onChange={(e) => { onToggle(e, index)}} /> <span>Disable</span></>}
                    </Space>
                );
            }
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

    // console.log(userColumn)
    // console.log(userDataSource)


    return (
        <div>
            <Table
                dataSource={enabled}
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