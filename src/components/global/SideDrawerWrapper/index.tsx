import { Button, Drawer, DrawerProps, Radio, RadioChangeEvent, Space } from 'antd';
import React, { useState } from 'react'

const SideDrawerWrapper = (props: any) => {
    const { children, isOpen, closeDrawerByAnimation, removeDrawerFromDom, headerTitle } = props;
    console.log("🚀 ~ file: index.tsx:6 ~ SideDrawerWrapper ~ isOpen:", isOpen)


    // const [open, setOpen] = useState(isOpen);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

    // const showDrawer = () => {
    //     setOpen(true);
    // };

    const onClose = () => {
         
    };

    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };




    return (
        <>
            {/* <Space>
                <Radio.Group value={placement} onChange={onChange}>
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </Radio.Group>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
            </Space> */}
            <Drawer
                title="Basic Drawer"
                placement='right'
                closable={true}
                onClose={onClose}
                open={isOpen}
                key={placement}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}

export default SideDrawerWrapper