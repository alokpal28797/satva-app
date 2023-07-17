import React, { useEffect, useState } from 'react';
import { SettingsLayout } from '../../layout';
import AddInfo from '../../components/settings/AddInfo';
import { Button, Col, Drawer, Row } from 'antd';
import SideDrawerBody from '../../components/settings/SideDrawerBody';
import { CloseOutlined } from '@ant-design/icons';
import DynamicTable from '../../components/settings/Table';
import {
  PermissionData,
  integrationsCards,
  organizationData,
  preferencesData,
  rolesData,
  subscriptionCard,
  userDataSource,
} from '../../constants/Data';
import ConfirmDelete from '../../components/global/DeleteModal';
import IntegrationCard from '../../components/settings/IntegrationCard';
import SubscriptionCard from '../../components/settings/SubscriptionCard';
import PreferenceCard from '../../components/settings/PreferencesCard';

const Settings = () => {
  const [settingComponent, setSettingComponent] = useState('users'); //  use to toggle Global Modal

  // This state is only because we not have api at current movement
  const check = () => {
    if (settingComponent === 'users') {
      return userDataSource;
    }
    if (settingComponent === 'organization') {
      return organizationData;
    }
    if (settingComponent === 'roles') {
      return rolesData;
    }
    if (settingComponent === 'roles') {
      return rolesData;
    }
  };

  useEffect(() => {
    setFilterData(check);
  }, [settingComponent]);

  useEffect(() => {
    setPageSize(10)
  }, [settingComponent]);

  //  to handle the page size
  const [pageSize, setPageSize] = useState(10);

  const [filteredData, setFilterData] = useState(check);
  console.log("🚀 ~ file: index.tsx:46 ~ Settings ~ filteredData:", filteredData)
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(filteredData?.slice(0, pageSize));
  console.log("🚀 ~ file: index.tsx:48 ~ Settings ~ data:", data)
  const [searchValue, setSearchValue] = useState('');

  const [isSideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // to check it is clicked by permissions in the roles
  const [isPermission, setIsPermission] = useState(false);

  useEffect(() => {
    setData(filteredData?.slice(0, 15));
  }, [filteredData]);

  const handleSidebar = (e: any) => {
    setSettingComponent(e.key);
  };

  // to handle the Drawer open
  const openDrawerHandler = () => {
    setSideDrawerOpen(true);
  };

  //  In order to handle the  close property of the Drawer
  const onClose = () => {
    setSideDrawerOpen(false);
    setIsPermission(false);
  };

  //   For open the Global model
  const showModal = () => {
    setIsModalOpen(true);
  };
  //   For confirm operation of Global Modal
  const handleOk = () => {
    setIsModalOpen(false);
  };

  //   For cancel operation of Global Modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // for checking that the click is coming from permissions or not

  const permissionHandler = () => {
    setIsPermission(true);
  };

  // For perform the search operation
  const performSearchHandler = (event: any) => {
    const { value } = event.target;
    const valueRegex = new RegExp(value, 'ig');

    setSearchValue(value);

    if (value !== '' || value !== undefined) {
      const searchedRecords = filteredData.filter((singleRecord: any) => {
        if (settingComponent === 'organization') {
          return valueRegex.test(singleRecord.organizationName);
        }
        return valueRegex.test(singleRecord.name);
      });

      setFilterData(searchedRecords);

      setData(searchedRecords.slice(0, pageSize));
      setCurrentPage(1);
    }

    setFilterData(check);
  };

  // Handle the pagination for the table
  const paginationChangeHandler = (pageNo: number) => {
    setCurrentPage(pageNo);
    setData(filteredData.slice((pageNo - 1) * pageSize, pageNo * pageSize));
  };

  // If add functionality required for the component or not
  const getAdd = () => {
    if (
      settingComponent === 'users' ||
      settingComponent === 'organization' ||
      settingComponent === 'roles'
    ) {
      return true;
    } else {
      return false;
    }
  };

  // To capitalize the first letter of the title
  function capitalizeFirstWord(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // to change page size
  const handlePageSizeChange = (pageNo: number) => {
    setPageSize(pageNo)
  };

  return (
    <>
      <div>
        <SettingsLayout handleSidebar={handleSidebar}>
          <AddInfo
            openDrawerHandler={openDrawerHandler}
            title={settingComponent}
            addInfo={getAdd()}
          />

          {settingComponent === 'users' && (
            <div className="table-responsive">
              <DynamicTable
                userDataSource={data}
                showModal={showModal}
                title={settingComponent}
                paginationChangeHandler={paginationChangeHandler}
                currentPage={currentPage}
                totalRecords={filteredData?.length}
                performSearchHandler={(event: any) => {
                  performSearchHandler(event);
                }}
                searchValue={searchValue}
                pageSize={pageSize}
                handlePageSizeChange={handlePageSizeChange}
              ></DynamicTable>
            </div>
          )}
          {settingComponent === 'organization' && (
            <div className="table-responsive">
              <DynamicTable
                organizationData={data}
                showModal={showModal}
                title={settingComponent}
                paginationChangeHandler={paginationChangeHandler}
                currentPage={currentPage}
                totalRecords={filteredData?.length}
                performSearchHandler={(event: any) => {
                  performSearchHandler(event);
                }}
                searchValue={searchValue}
                pageSize={pageSize}
                handlePageSizeChange={handlePageSizeChange}
              ></DynamicTable>
            </div>
          )}
          {settingComponent === 'roles' && (
            <div className="table-responsive">
              <DynamicTable
                rolesData={data}
                showModal={showModal}
                title={settingComponent}
                openDrawerHandler={openDrawerHandler}
                permissionHandler={permissionHandler}
                paginationChangeHandler={paginationChangeHandler}
                currentPage={currentPage}
                totalRecords={filteredData?.length}
                performSearchHandler={(event: any) => {
                  performSearchHandler(event);
                }}
                searchValue={searchValue}
                pageSize={pageSize}
                handlePageSizeChange={handlePageSizeChange}
              ></DynamicTable>
            </div>
          )}

          {settingComponent === 'integrations' && (
            <div className="ps-4" style={{ width: '98%' }}>
              <Row gutter={16}>
                {integrationsCards?.map((card, index) => {
                  return (
                    <Col
                      key={index}
                      className="gutter-row"
                      xl={6}
                      lg={6}
                      md={12}
                      sm={12}
                      xs={24}
                    >
                      <IntegrationCard
                        title={card?.title}
                        buttonText={card?.buttonText}
                        logo={card?.logo}
                        ghost={card?.ghost}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
          {settingComponent === 'subscription' && (
            <div className="ps-4" style={{ width: '98%' }}>
              <Row gutter={16}>
                {subscriptionCard?.map((card, index) => {
                  return (
                    <Col
                      key={index}
                      className="gutter-row"
                      xl={10}
                      lg={10}
                      md={24}
                      sm={24}
                      xs={24}
                    >
                      <SubscriptionCard
                        title={card?.title}
                        manageSubscription={card?.manageSubscription}
                        plan={card?.plan}
                        pricing={card?.pricing}
                        logo={card?.logo}
                        ghost={card?.ghost}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
          {settingComponent === 'preference' && (
            <>
              {preferencesData?.map((preference, index) => (
                <React.Fragment key={index}>
                  <PreferenceCard preference={preference} />
                </React.Fragment>
              ))}
              <div style={{ marginBottom: 0 }}>
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
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </SettingsLayout>
      </div>

      {isSideDrawerOpen && (
        <Drawer
          title={
            isPermission === true
              ? `Permission Details`
              : `Add ${capitalizeFirstWord(settingComponent)}`
          }
          placement="right"
          onClose={onClose}
          open={isSideDrawerOpen}
          size="large"
          closable={false}
        >
          <CloseOutlined
            style={{ position: 'absolute', right: '23px', top: '20px' }}
            onClick={onClose}
          />
          <SideDrawerBody
            title={
              isPermission === true ? `Permission Details` : settingComponent
            }
            close={onClose}
            permissionData={PermissionData}
          ></SideDrawerBody>
        </Drawer>
      )}

      <ConfirmDelete
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default Settings;
