import { useEffect, useState } from 'react'
import { SettingsLayout } from '../../layout'
import AddInfo from '../../components/settings/AddInfo';
import SideDrawerWrapper from '../../components/global/SideDrawerWrapper';
import { Col, Drawer, Row } from 'antd';
import SideDrawerBody from '../../components/settings/SideDrawerBody';
import { CloseOutlined } from '@ant-design/icons';
import DynamicTable from '../../components/settings/Table';
import { integrationsCards, userDataSource } from '../../constants/Data';
import ConfirmDelete from '../../components/global/DeleteModal';
import IntegrationCard from '../../components/settings/IntegrationCard';

const Settings = () => {

    const [isSideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [settingComponent, setSettingComponent] = useState('users');

    //  use to toggle Global Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSidebar = (e: any) => {
        setSettingComponent(e.key)
    }

    const openDrawerHandler = () => {
        setSideDrawerOpen(true);
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



    //  In order to handle the Open close property of the Drawer
    const onClose = () => {
        setSideDrawerOpen(false);
    };
    console.log("🚀 ~ file: index.tsx:8 ~ Settings ~ isSideDrawerOpen:", isSideDrawerOpen)

    // To capitalize the first letter of the title
    function capitalizeFirstWord(str: any) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <>
            <div>
                <SettingsLayout handleSidebar={handleSidebar}>
                    <div>
                        <AddInfo
                            openDrawerHandler={openDrawerHandler}
                            // setDrawerInfoHandler={setDrawerInfoHandler}
                            title={settingComponent}
                            addInfo={getAdd()}
                        />
                    </div>
                    {settingComponent === 'users' && (
                        <div className='table-responsive'><DynamicTable userDataSource={userDataSource} showModal={showModal}></DynamicTable></div>
                    )}
                    {settingComponent === 'integrations' && (
                        <div
                            className='ps-4'
                            style={{ width: '98%' }}
                        >
                            <Row gutter={16} >
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
                </SettingsLayout>
            </div>

            {isSideDrawerOpen && (
                <Drawer
                    title={`Add ${(capitalizeFirstWord(settingComponent))}`}
                    placement='right'
                    onClose={onClose}
                    open={isSideDrawerOpen}
                    size='large'
                    closable={false}
                >
                    <CloseOutlined style={{ position: 'absolute', right: '23px', top: '20px' }} onClick={onClose} />
                    <SideDrawerBody title={settingComponent} close={onClose} ></SideDrawerBody>
                </Drawer>
            )}


            <ConfirmDelete
                handleCancel={handleCancel}
                handleOk={handleOk}
                isModalOpen={isModalOpen}
            />
        </>
    )
}

export default Settings