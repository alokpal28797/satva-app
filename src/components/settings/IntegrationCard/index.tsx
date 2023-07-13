import React from 'react'
import { Card, Image, Button } from 'antd';

const IntegrationCard = (props: any) => {
  
    return (

        <Card bordered={false}
            className='mt-3'
            style={{ width: '98%' }}

        >
            <Image preview={false}
                src={props?.logo}

            />
            <p
            >Company:</p>
            <p style={{ paddingBottom: '10px' }}>
                {props?.title}
            </p>
            <Button type="primary"
                ghost={props?.ghost}
            >
                {props?.buttonText}
            </Button>
        </Card>
    )
}

export default IntegrationCard