import React from "react";
import {
  Col,
  Image,
  Layout,
  Row,
  Space,
  Form,
  Button,
  Input,
  Typography,
} from "antd";
import imgLogo from "../../assets/images/Register/Group 87.svg";
import imgElephantLogo from "../../assets/images/Log-In/Mask Group 1.png";
import imgXero from '../../assets/images/Log-In/Xero.png'
import { Content } from "antd/es/layout/layout";
import "./index.css";
import Title from "antd/es/typography/Title";
import { registerFormData } from "./../../constants/Data";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const Register = () => {
  const ContentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: "100vh",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#fff",
  };

  const formStyle: React.CSSProperties = {
    paddingLeft: "10vh",
    textAlign: "left",
    alignItems: "center",
    paddingRight: "1vh",
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Layout hasSider>
            <Content style={ContentStyle}>
              <Row justify="space-around" style={{ height: "100vh" }}>
                <Col xs={24} sm={24} md={10} lg={10} className="login_image">
                  <Image
                    src={imgLogo}
                    
                    preview={false}
                    className="image"
                  />
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={14}
                  lg={14}
                  className="custom-register-form"
                  style={formStyle}
                >
                  <Image src={imgElephantLogo} preview={false} width={100} />

                  <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    labelAlign="left"
                    className="myform"
                  >
                    <Row>
                      <Col xs={17} sm={17} md={17} lg={17}>
                        <Title className="" level={2}>
                          Register{" "}
                        </Title>
                      </Col>
                      <Col xs={7} sm={7} md={7} lg={7}>
                        {" "}
                        <LeftOutlined /> Back
                      </Col>
                    </Row>

                    <Title level={5} style={{ width: "77.4%" }}>
                      Welcome to animal planet! Please Enter your Details for
                      registration
                    </Title>
                    <div
                      className="grid-container"
                      style={{ display: "flex", flexWrap: "wrap" }}
                    >
                      {registerFormData.map((item, index) => {
                        return (
                          <div
                            className="grid-item me-3 "
                            key={index}
                            style={{ flex: "0 0 37.4%" }}
                          >
                            <label className="register-form-label">
                              {item?.icon}
                              {item?.title} {item?.required && "*"}
                            </label>
                            <Form.Item
                              name={item?.name}
                              rules={item?.rules as []}
                            >
                              {item?.type === "password" ? (
                                <Input.Password
                                  placeholder={item?.placeholder}
                                  size="large"
                                />
                              ) : item?.type === "number" ? (
                                <Input
                                  placeholder={item?.placeholder}
                                  size="large"
                                  type="number"
                                />
                              ) : (
                                <Input
                                  placeholder={item?.placeholder}
                                  size="large"
                                />
                              )}
                            </Form.Item>
                          </div>
                        );
                      })}
                    </div>

                    <Form.Item>
                      <Button
                        className="mt-3"
                        type="primary"
                        htmlType="submit"
                        block={true}
                        style={{ width: "77.4%", height: "36px", backgroundColor: "#286FD1" }}
                      >
                        Register Now!
                      </Button>
                    </Form.Item>
                    <Form.Item style={{ textAlign: "center", width: "77.4%" }}>
                      <Button
                        className="me-4 belowBtn"
                        type="primary"
                        htmlType="submit"
                        style={{ backgroundColor: "#0B78C2" }}
                      >
                        Sign in with Intuit
                      </Button>
                      <Button
                        className="belowBtn marginTop"
                        type="primary"
                        ghost={true}
                        htmlType="submit"
                        style={{ padding: "6.5px" }}
                      >
                        <Image src={imgXero} style={{ width: "25px" }} preview={false} />&nbsp; Sign in with Xero
                      </Button>
                    </Form.Item>

                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                    >
                      <Typography>
                        Already have an Account{" "}
                        <Link to="/login">
                          <u>Login Now!</u>
                        </Link>
                      </Typography>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Space>
    </>
  );
};

export default Register;
