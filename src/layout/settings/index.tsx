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
        <div className='ps-3' style={{maxWidth : '83vw', width: '100%'}}>{children}</div>
      </Layout>
    </>
  );
};

export default Settings;
