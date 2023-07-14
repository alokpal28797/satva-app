import { Button, Card, Image } from 'antd';
import './index.css';

const SubscriptionCard = (props: any) => {
  return (
    <>
      <Card bordered={false} className="mt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <p className="title">{props?.title}</p>
          </div>
          <div className="d-flex">
            <Button className="buttonSubscription" ghost={props?.ghost}>
              {props?.manageSubscription}
            </Button>
          </div>
        </div>
        <hr style={{ margin: '0px' }} />
        <div className="d-flex mt-3 ">
          <div>
            <p>{props.plan}:</p>
            <Image preview={false} src={props?.logo} className="logo" />{' '}
            <span style={{ fontSize: '20px' }}>
              <b>Gold</b>
            </span>
          </div>
          <div style={{ marginLeft: '18%' }}>
            <p>Pricing:</p>
            <p className="pricing">
              <b>{props?.pricing}</b>
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SubscriptionCard;
