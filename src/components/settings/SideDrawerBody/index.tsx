import { Button, Checkbox, Col, Form, Input, Row, Table } from 'antd';
import { userDrawerBody } from '../../../constants/Data';
import { toastText } from '../../../Utils/utils';
import './index.css';

const SideDrawerBody = (props: any) => {
  const { userFields, organizationFields, rolesFields } = userDrawerBody;
  const { title, close, permissionData } = props;

  // If form get success
  const onFinish = (values: any) => {
    toastText(`${title} created successfully`, 'success');
    // closeDrawerByAnimation();
  };

  // If form fails
  const onFinishFailed = (errorInfo: any) => {
    toastText(`${title} is not created`, 'error');
    console.log('Failed:', errorInfo);
  };

  // table Header
  const permissionColumn = [
    {
      title: 'Module Name',
      dataIndex: 'moduleName',
      key: 'moduleName',
    },
    {
      title: 'All',
      dataIndex: 'All',
      key: 'All',
      render: (status: any, record: any, index: any) => (
        <>{record?.moduleName === 'Admin' ? ` ` : <Checkbox></Checkbox>}</>
      ),
    },

    {
      title: 'View',
      dataIndex: 'view',
      key: 'view',
      render: (status: any, record: any, index: any) => (
        <>{record?.moduleName === 'Admin' ? ` ` : <Checkbox></Checkbox>}</>
      ),
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      key: 'edit',
      render: (status: any, record: any, index: any) => (
        <>{record?.moduleName === 'Admin' ? ` ` : <Checkbox></Checkbox>}</>
      ),
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      key: 'delete',
      render: (status: any, record: any, index: any) => (
        <>{record?.moduleName === 'Admin' ? ` ` : <Checkbox></Checkbox>}</>
      ),
    },
  ];
  return (
    <>
      {title === 'users' && (
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          labelAlign="left"
        >
          <Row gutter={[16, 16]}>
            {userFields.map((singleField, index) => (
              <Col span={12} key={index}>
                <div>
                  <label>{singleField.title} *</label>
                  <Form.Item
                    name={singleField.name}
                    rules={[
                      {
                        required: true,
                        message: singleField.errorMessage,
                      },
                    ]}
                  >
                    <Input
                      placeholder={singleField.placeholder}
                      size="large"
                      type={singleField.type}
                    />
                  </Form.Item>
                </div>
              </Col>
            ))}
          </Row>

          <div className="saveCancelBtnDiv">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="FormBtn"
                style={{
                  marginRight: 8,
                  backgroundColor: '#286FD1',
                  width: '86px',
                }}
              >
                Save
              </Button>
              <Button
                type="primary"
                htmlType="button"
                ghost={true}
                className="FormBtn"
                style={{ width: '86px' }}
                onClick={close}
              >
                Cancel
              </Button>
            </Form.Item>
          </div>
        </Form>
      )}

      {title === 'organization' && (
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          labelAlign="left"
        >
          <Row gutter={[16, 16]}>
            {/* First Component */}
            <Col span={24}>
              <div>
                <label>{organizationFields[0].title} *</label>
                <Form.Item
                  name={organizationFields[0].name}
                  rules={[
                    {
                      required: true,
                      message: organizationFields[0].errorMessage,
                    },
                  ]}
                >
                  <Input
                    placeholder={organizationFields[0].placeholder}
                    size="large"
                    type={organizationFields[0].type}
                  />
                </Form.Item>
              </div>
            </Col>

            {/* Remaining Components */}
            {organizationFields.slice(1).map((singleField, index) => (
              <Col span={12} key={index}>
                <div>
                  <label>{singleField.title} *</label>
                  <Form.Item
                    name={singleField.name}
                    rules={[
                      {
                        required: true,
                        message: singleField.errorMessage,
                      },
                    ]}
                  >
                    <Input
                      placeholder={singleField.placeholder}
                      size="large"
                      type={singleField.type}
                    />
                  </Form.Item>
                </div>
              </Col>
            ))}
          </Row>
          <div className="saveCancelBtnDiv">
            <Form.Item style={{ marginBottom: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  marginRight: 8,
                  backgroundColor: '#286FD1',
                  width: '86px',
                }}
              >
                Save
              </Button>
              <Button
                type="primary"
                htmlType="button"
                ghost={true}
                style={{ width: '86px' }}
                onClick={close}
              >
                Cancel
              </Button>
            </Form.Item>
          </div>
        </Form>
      )}

      {title === 'roles' && (
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          labelAlign="left"
        >
          <Row gutter={[16, 16]}>
            {rolesFields.map((singleField, index) => (
              <Col span={24} key={index}>
                <div>
                  <label>{singleField.title} *</label>
                  <Form.Item
                    name={singleField.name}
                    rules={[
                      {
                        required: true,
                        message: singleField.errorMessage,
                      },
                    ]}
                  >
                    <Input
                      placeholder={singleField.placeholder}
                      size="large"
                      type={singleField.type}
                    />
                  </Form.Item>
                </div>
              </Col>
            ))}
          </Row>
          <div className="saveCancelBtnDiv">
            <Form.Item style={{ marginBottom: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                className='saveBtn me-2'
              >
                Save
              </Button>
              <Button
                type="primary"
                htmlType="button"
                ghost={true}
                style={{ width: '86px' }}
                onClick={close}
              >
                Cancel
              </Button>
            </Form.Item>
          </div>
        </Form>
      )}

      {title === 'Permission Details' && (
        <>
          <Table
            columns={permissionColumn}
            dataSource={permissionData}
            pagination={false}
          ></Table>
        </>
      )}
    </>
  );
};

export default SideDrawerBody;
