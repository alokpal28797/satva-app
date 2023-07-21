import React, { useState } from "react";
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
  Checkbox,
} from "antd";
import imgLogo from "../../assets/images/Register/Group 87.svg";
import imgElephantLogo from "../../assets/images/Log-In/Mask Group 1.png";
import imgXero from "../../assets/images/Log-In/Xero.png";
import { Content } from "antd/es/layout/layout";
import "./index.css";
import Title from "antd/es/typography/Title";
import { Link, useNavigate } from "react-router-dom";
import { logInFormData } from "../../constants/Data";

const LogIn = () => {
  
  const navigate = useNavigate()

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
    navigate('/dashboard')
  };

  const onFinishFailed = (errorInfo: any) => {
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
                    width={"100%"}
                    height={"520px"}
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
                  >
                    <Row>
                      <Col xs={17} sm={17} md={17} lg={17}>
                        <Title className="" level={2}>
                          Log in{" "}
                        </Title>
                      </Col>
                    </Row>

                    <Title level={5} style={{ width: "68.8%" }}>
                      Welcome to animal planet! Please Enter your Details
                    </Title>
                    <div className="grid-container" style={{ width: "70%" }}>
                      {logInFormData.map((item, index) => {
                        return (
                          <div className="grid-item me-3 " key={index}>
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
                                  name = ''
                                />
                              ) : item?.type === "number" ? (
                                <Input
                                  placeholder={item?.placeholder}
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
                    <Row>
                      <Col xs={24} sm={24} md={13} lg={13}>
                        <Checkbox style={{ opacity: "70%" }}>
                          <b>Remember me</b>
                        </Checkbox>
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={11}
                        lg={9}
                        style={{ color: "red", opacity: "60%" }}
                      >
                        <b> Forgot Password</b>
                      </Col>
                    </Row>

                    <Form.Item>
                      <Button
                        className="mt-4"
                        type="primary"
                        htmlType="submit"
                        block={true}
                        style={{
                          width: "67.7%",
                          height: "36px",
                          backgroundColor: "#286FD1",
                        }}
                        
                      >
                        Sign in
                      </Button>
                    </Form.Item>
                    <Form.Item style={{ textAlign: "center", width: "67.7%" }}>
                      <Button
                        className="me-4 belowBtn mt-1"
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
                        <Image
                          src={imgXero}
                          style={{ width: "25px" }}
                          preview={false}
                        />
                        &nbsp; Sign in with Xero
                      </Button>
                    </Form.Item>

                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      className="mt-5"
                    >
                      <Typography>
                        Don&apos;t have an account yet?
                        <Link to="/">
                          &nbsp;<u>Sign up Today!</u>
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

export default LogIn;
