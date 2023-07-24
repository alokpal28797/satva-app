import { Col, Image, Layout, Row } from 'antd'
import React from 'react'
import './index.css'
import { SideBar } from '../../components/settings'
import Navbar from '../../components/global/Navbar'

export default function Dashboard() {
   const { Header, Footer, Sider, Content } = Layout

   const contentStyle: React.CSSProperties = {
      textAlign: 'center',
      minHeight: 120,
      lineHeight: '120px',
      color: 'black',
      fontSize: 30,
      marginTop: 180,
   }

   const siderStyle: React.CSSProperties = {
      textAlign: 'center',
      lineHeight: '120px',
      color: '#fff',
      backgroundColor: '#3ba0e9',
   }

   const footerStyle: React.CSSProperties = {
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#7dbcea',
   }
   return (
      <Layout>
         <Sider style={{ backgroundColor: '#286FD1' }}>
            <Row className="mt-3">
               <Col xs={12} md={10} style={{ marginRight: '-12px' }}>
                  <Image
                     preview={false}
                     src="\assets\Connection\ele.png"
                     style={{ width: '87%' }}
                  ></Image>
               </Col>
               <Col xs={12} md={14} style={{ paddingTop: '4px' }}>
                  <Image
                     preview={false}
                     src="\assets\Connection\ele1.png"
                  ></Image>
               </Col>
            </Row>
         </Sider>
         <Layout>
            <Navbar />
            <Content style={contentStyle}>
               Dashboard Screen Will Come Soon !!!
            </Content>
         </Layout>
      </Layout>
   )
}
