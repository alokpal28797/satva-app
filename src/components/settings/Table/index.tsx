import { Alert, Space, Switch, Table } from 'antd';
import './index.css';
import { useState, useEffect } from 'react';
import { AlignLeftOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import SearchAndFilter from '../SearchAndFilter';

const DynamicTable = (props: any) => {
  const { userDataSource, showModal, title, organizationData, rolesData, openDrawerHandler, permissionHandler, paginationChangeHandler, currentPage, totalRecords, performSearchHandler, searchValue, pageSize, handlePageSizeChange } = props;
  console.log("🚀 ~ file: index.tsx:9 ~ DynamicTable ~ pageSize:", pageSize)

  const [enabled, setEnabled] = useState(userDataSource);

  useEffect(() => {
    setEnabled(userDataSource)
  }, [userDataSource])

  const onToggle = (checked: boolean, index: any) => {
    const data = enabled.map((item: any, ind: any) => {
      if (checked === true && index === ind) {
        return { ...item, status: `enable` };
      }
      if (checked === false && index === ind) {
        return { ...item, status: `disable` };
      } else {
        return item;
      }
    });

    setEnabled(data);
  };

  // permission click handler
  const permissionClick = () => {
    permissionHandler()
    openDrawerHandler()
  }


  const handleFilter = (e: any) => {
    // setEnabled(userDataSource)

    console.log("🚀 ~ file: index.tsx:42 ~ handleFilter ~ handleFilter:", e)

    if (e === 'Enable') {
      // setEnabled(userDataSource)

      const data = userDataSource.filter((item: any) => item.status === 'enable')

      // console.log("🚀 ~ file: index.tsx:44 ~ handleFilter ~ data:", data)
      setEnabled(data)

    }
    if (e === 'Disable') {
      // setEnabled(userDataSource)

      const data = userDataSource.filter((item: any) => item.status === 'disable')

      // console.log("🚀 ~ file: index.tsx:44 ~ handleFilter ~ data:", data)
      setEnabled(data)

    }
  }


  const userColumn = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => {
        return a.name.length - b.name.length;
      },
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
            {status === 'enable' ? (
              <>
                {' '}
                <Switch
                  size="small"
                  defaultChecked
                  onChange={(e) => {
                    onToggle(e, index);
                  }}
                />
                <span>Enable</span>
              </>
            ) : (
              <>
                <Switch
                  size="small"
                  checked={false}
                  onChange={(e) => {
                    onToggle(e, index);
                  }}
                />{' '}
                <span>Disable</span>
              </>
            )}
          </Space>
        );
      },
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
          <DeleteOutlined className="table-delete-icon" onClick={showModal} />
        </Space>
      ),
    },
  ];

  const organizationColumn = [
    {
      title: 'Organization Name',
      dataIndex: 'organizationName',
      key: 'organizationName',
      sorter: (a: any, b: any) => {
        return a?.name?.length - b?.name?.length;
      },
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
        if (status === 'active') {
          return <Alert message="Active" type="success" showIcon />;
        } else {
          return <Alert message="Inactive" type="error" showIcon />;
        }
      },
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
          <DeleteOutlined className="table-delete-icon" onClick={showModal} />
        </Space>
      ),
    },
  ];

  const rolesColumn = [
    {
      title: 'Role Name',
      dataIndex: 'name',
      key: 'organizationName',
      sorter: (a: any, b: any) => {
        return a.name.length - b.name.length;
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: any, record: any, index: any) => {
        if (status === 'active') {
          return <Alert message="Active" type="success" showIcon />;
        } else {
          return <Alert message="Inactive" type="error" showIcon />;
        }
      },
    },
    {
      title: 'Permissions',
      dataIndex: 'permissions',
      key: 'permissions',
      render: () => (

        <div className='rolesPermission' onClick={permissionClick}><AlignLeftOutlined />&nbsp; <u>Permission Details</u></div>
      )


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
          <DeleteOutlined className="table-delete-icon" onClick={showModal} />
        </Space>
      ),
    },
  ];

  return (
    <div className='dynamicTable'>
      <SearchAndFilter
        performSearchHandler={performSearchHandler}
        searchValue={searchValue}
        handlePageSizeChange={handlePageSizeChange}
        title={title}
        handleFilter={handleFilter}
      />
      {title === 'users' && (
        <Table
          scroll={{ x: '60vh', y: '55vh' }}
          className='mt-2 dynamicTable'
          dataSource={enabled}
          columns={userColumn}
          pagination={
            {
              total: totalRecords,
              current: currentPage,
              onChange: paginationChangeHandler,
              pageSize: pageSize
            }
          }
        ></Table>
      )}
      {title === 'organization' && (
        <Table
          scroll={{ x: '60vh', y: '55vh' }}
          className='mt-2 dynamicTable'
          dataSource={organizationData}
          columns={organizationColumn}
          pagination={
            {
              total: totalRecords,
              current: currentPage,
              onChange: paginationChangeHandler,
              pageSize: pageSize
            }
          }
        ></Table>
      )}
      {title === 'roles' && (
        <Table
        scroll={{ x: '60vh', y: '55vh' }}
          className='mt-2 dynamicTable'
          dataSource={rolesData}
          columns={rolesColumn}
          pagination={
            {
              total: totalRecords,
              current: currentPage,
              onChange: paginationChangeHandler,
              pageSize: pageSize
            }
          }
        ></Table>
      )}
    </div>
  );
};

export default DynamicTable;
