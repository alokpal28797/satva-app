import { Button, Card, Col, Row, Switch } from 'antd'
import './index.css'
// import styles from './index.module.scss';
import React from 'react'

export default function PreferenceCard(props: any) {
   const { preference } = props
   return (
      <>
         <Card
            title={preference?.title}
            className="preferencesCard"
            extra={<Switch size="small" defaultChecked={preference?.status} />}
         >
            <Row gutter={16}>
               <div className="preferenceDiv">
                  {preference?.preferences?.map((item: any, index: number) => {
                     return (
                        <Col
                           key={index}
                           className="gutter-row"
                           xl={24}
                           lg={24}
                           md={24}
                           sm={24}
                           xs={24}
                        >
                           <div className="preferencesButton" key={index}>
                              <Switch
                                 size="small"
                                 defaultChecked={item?.status}
                              />
                              <p>{item?.title}</p>
                           </div>
                        </Col>
                     )
                  })}
               </div>
            </Row>
         </Card>
      </>
   )
}
