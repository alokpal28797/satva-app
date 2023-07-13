import React from 'react'
import { Card, Image, Button } from 'antd';
// import img from '../../../assets/images/Connection/Intuit_QuickBooks_logo.png'
// '../../../assets/images/Connection/Intuit_QuickBooks_logo.png'
//   '../assets/images/Connection/Intuit_QuickBooks_logo.png'
const IntegrationCard = (props: any) => {
    // console.log(props?.logo, "Card integrationqqqqqqqqqqqqqqqqqqqqqqq");
    // console.log(`../../${props?.logo}`, '1222222222222222222');
    // let img1 = `../../${props?.logo}`
    return (

        <Card bordered={false}
            className='mt-3'
            style={{ width: '98%' }}

        //  className={styles.integration__card}
        >
            <Image preview={false}
                // src={'/assets/Connection/clear-books-logo-cmyk.png'}
                src={props?.logo}

            />
            <p
            // className={styles.integration__card__company}
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