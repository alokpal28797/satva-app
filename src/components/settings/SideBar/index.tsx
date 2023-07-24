import { SidebarProps } from './type'
import { Button, Layout, Menu, MenuProps } from 'antd'
import {
   ApartmentOutlined,
   IdcardOutlined,
   MoneyCollectOutlined,
   SettingOutlined,
   UsergroupAddOutlined,
} from '@ant-design/icons'
import './index.css'

const SideBar = (props: SidebarProps) => {
   const { Sider } = Layout

   const { handleSidebar } = props

   // Dummy menu items
   const items2: MenuProps['items'] = [
      {
         key: 'users',
         icon: <UsergroupAddOutlined />,
         label: <b>Users</b>,
      },
      {
         key: 'organization',
         icon: <UsergroupAddOutlined />,
         label: <b>Organization</b>,
      },
      {
         key: 'roles',
         icon: <IdcardOutlined />,
         label: <b>Roles</b>,
      },
      {
         key: 'integrations',
         icon: <ApartmentOutlined />,
         label: <b>Integrations</b>,
      },
      {
         key: 'preference',
         icon: <SettingOutlined />,
         label: <b>Preference</b>,
      },
      {
         key: 'subscription',
         icon: <MoneyCollectOutlined />,
         label: <b>Subscription</b>,
      },
   ]
   return (
      <Sider
         style={{
            background: '#fff',
            maxHeight: '100%',
            height: '100%',
            overflow: 'auto',
         }}
      >
         <div>
            <Menu
               mode="inline"
               defaultSelectedKeys={['users']}
               style={{ borderRight: 0, background: '#fff' }}
               items={items2}
               onClick={handleSidebar}
            />
         </div>
         <div className="getSupportAlign">
            <Button className="getSupport" type="primary" ghost={true}>
               Get Support
            </Button>
         </div>
      </Sider>
   )
}

export default SideBar
