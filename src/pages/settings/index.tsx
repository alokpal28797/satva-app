import React, { useEffect, useState } from 'react';
import { SettingsLayout } from '../../layout';
import AddInfo from '../../components/settings/AddInfo';
import SideDrawerWrapper from '../../components/global/SideDrawerWrapper';
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
import PreferencesCard from '../../components/settings/PreferencesCard';
import PreferenceCard from '../../components/settings/PreferencesCard';

const Settings = () => {
  const [isSideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [settingComponent, setSettingComponent] = useState('users');
  console.log(
    '🚀 ~ file: index.tsx:17 ~ Settings ~ settingComponent:',
    settingComponent
  );

  //  use to toggle Global Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // to check it is clicked by permissions in the roles
  const [isPermission, setIsPermission] = useState(false);
  console.log(
    '🚀 ~ file: index.tsx:26 ~ Settings ~ isPermission:',
    isPermission
  );

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

  console.log(PermissionData);

  // To capitalize the first letter of the title
  function capitalizeFirstWord(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div>
        <SettingsLayout handleSidebar={handleSidebar}>
          <AddInfo
            openDrawerHandler={openDrawerHandler}
            // setDrawerInfoHandler={setDrawerInfoHandler}
            title={settingComponent}
            addInfo={getAdd()}
          />

          {settingComponent === 'users' && (
            <div className="table-responsive">
              <DynamicTable
                userDataSource={userDataSource}
                showModal={showModal}
                title={settingComponent}
              ></DynamicTable>
            </div>
          )}
          {settingComponent === 'organization' && (
            <div className="table-responsive">
              <DynamicTable
                organizationData={organizationData}
                showModal={showModal}
                title={settingComponent}
              ></DynamicTable>
            </div>
          )}
          {settingComponent === 'roles' && (
            <div className="table-responsive">
              <DynamicTable
                rolesData={rolesData}
                showModal={showModal}
                title={settingComponent}
                openDrawerHandler={openDrawerHandler}
                permissionHandler={permissionHandler}
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
