import { SidebarProps } from "./type";
import { Button, Layout, Menu, MenuProps } from "antd";
import {
    ApartmentOutlined,
    IdcardOutlined,
    MoneyCollectOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import './index.css'

const SideBar = (props: SidebarProps) => {
    const { Sider } = Layout;

    const { handleSidebar } = props;

    // Dummy menu items
    const items2: MenuProps["items"] = [
        {
            key: "users",
            icon: <UsergroupAddOutlined />,
            label: "Users",
        },
        {
            key: "organization",
            icon: <UsergroupAddOutlined />,
            label: "Organization",
        },
        {
            key: "roles",
            icon: <IdcardOutlined />,
            label: "Roles",
        },
        {
            key: "integrations",
            icon: <ApartmentOutlined />,
            label: "Integrations",
        },
        {
            key: "preference",
            icon: <SettingOutlined />,
            label: "Preference",
        },
        {
            key: "subscription",
            icon: <MoneyCollectOutlined />,
            label: "Subscription",
        },
    ];
    return (
        <Sider
            style={{
                background: "#fff",
                maxHeight: "100%",
                height: "100%",
                // overflow: "auto",
                // borderLeft: '2px solid black',
                // paddingLeft: '24px',
                // borderRadius: '0px'
            }}

        >
            <div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["users"]}
                    style={{ borderRight: 0, background: "#fff" }}
                    items={items2}
                    onClick={handleSidebar}
                />

            </div>
            <div className="getSupportAlign" >
                <Button className="getSupport" type="primary" ghost={true}>
                    Get Support
                </Button>
            </div>
        </Sider >
    );
};

export default SideBar;
