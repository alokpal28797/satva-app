import {  Layout, Space } from 'antd';
import {  CloseOutlined } from '@ant-design/icons';
import './index.css'


const Header = () => {
  // Inits
  const { Header } = Layout;
  // JSX
  return (
    <div >
      <Header
        style={{
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 40px',
        }}
      >
        <div >
          <p className='pt-3'><b>Settings</b></p>
        </div>
        <Space  size={20}>
          <CloseOutlined style={{ fontSize: '15px'  }} />
        </Space>
      </Header>
    </div>
  );
};
export default Header;
