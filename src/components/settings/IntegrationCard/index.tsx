import { Card, Image, Button } from 'antd';
// import './index.css';
import './index.css'

const IntegrationCard = (props: any) => {
    console.log(props)
    return (
        <Card bordered={false} className="mt-3 integrationCard">
            <Image className='img' preview={false} src={props?.logo} />
            <p className='mt-3 mb-1 title'><b>Company:</b></p>
            <p className='title' >{props?.title}</p>
            <Button className='connectBtn' type="primary" ghost={props?.ghost} style={{backgroundColor:`${props?.color}`}}>
                {props?.buttonText}
            </Button>
        </Card>
    );
};

export default IntegrationCard;
