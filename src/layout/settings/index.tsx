import { Layout } from 'antd';
import './index.css'
import { Header, SideBar } from '../../components/settings';


// General layout for settings page
const Settings = (props: any) => {
  // Inits
  const { children, handleSidebar }: any = props;
  // JSX
  return (
    <>
      <Header />
      <Layout hasSider={true} className='layout' >
        <div    >
          <SideBar handleSidebar={handleSidebar}  />
        </div>
        <div style={{width:"100%"}}>{children}</div>
      </Layout>
    </>
  );
};

export default Settings;
