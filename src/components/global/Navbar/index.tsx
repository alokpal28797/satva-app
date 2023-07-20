import React from "react";
import "./index.css";
import { Header } from "antd/es/layout/layout";
import { SettingOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const Navbar = () => {
  const headerStyle: React.CSSProperties = {
    color: "black",
    height: 62,
    fontSize: 21,
    backgroundColor: "#fff",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  return (
    <>


      <Header style={headerStyle}>

        <Row style={{ width: '100%' }} >

          <Col span={20}><b>DashBoard</b></Col>
          <Col span={4} >
            <Row>
              <Space size={4}>
                
                <SettingOutlined className="" />
                <Avatar style={{ backgroundColor: '#E5F1FF', color: 'black' }}> <b>TP</b> </Avatar>

                <Col md={24}
                 style={{display: 'flex', alignItems : 'center'}}>
                 <div>
                  <Paragraph>
                  hjadghds 
                  </Paragraph>
                  <Paragraph>
                  hjadghds 
                  </Paragraph>
                 </div>
                </Col>
                


              </Space>
            </Row>
          </Col>


        </Row>
      </Header>
    </>
  );
};

export default Navbar;
