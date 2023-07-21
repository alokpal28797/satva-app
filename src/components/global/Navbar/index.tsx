import React from "react";
import "./index.css";
import { Header } from "antd/es/layout/layout";
import { LoginOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const headerStyle: React.CSSProperties = {
    color: "black",
    height: 62,
    fontSize: 21,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const navigate = useNavigate ();
  return (
    <>
      <Header style={headerStyle}>
        <Row style={{ width: "100%" }}>
          <Col span={18}>
            <b>DashBoard</b>
          </Col>
          <Col span={6}>
            <Row>
              <Space size={4}>
                <SettingOutlined
                  className="pe-4"
                  style={{ fontSize: 20, paddingTop: 22 }}
                  onClick={()=>{navigate('/settings')}}
                />
                <Avatar style={{ backgroundColor: "#E5F1FF", color: "black" }}>
                  {" "}
                  <b>TP</b>{" "}
                </Avatar>

                <Col
                  md={24}
                  className="ps-2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div style={{ marginBottom: "0em" }}>
                    <Paragraph style={{ marginBottom: "0em" }}>
                      <b>Thomas Peterson</b>
                    </Paragraph>
                    <Paragraph style={{ marginBottom: "0em", fontSize: 10 }}>
                      My Profile
                    </Paragraph>
                  </div>
                </Col>
                <LoginOutlined style={{ paddingLeft: "210%", fontSize: 18 }} />
              </Space>
            </Row>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default Navbar;
