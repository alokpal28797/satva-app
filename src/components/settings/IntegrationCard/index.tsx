import { Card, Image, Button } from "antd";
// import './index.css';
import "./index.css";

const IntegrationCard = (props: any) => {
  console.log(props);
  return (
    <Card style={{overflowX : "auto"}} bordered={false} className="mt-3 integrationCard">
      <Image className="img" preview={false} src={props?.logo} />
      <p className="mt-3 mb-1 title">
        <b>Company:</b>
      </p>
      <p className="title">{props?.title}</p>
      <Button
        className="connectBtn"
        type="primary"
        ghost={props?.ghost}
        style={{ backgroundColor: `${props?.backgroundColor}` }}
      >
        {props?.smallLogo !== '' && (
          <>
            <Image
              className="pe-1"
              preview={false}
              src={props?.smallLogo}
              style={{ width: 28 }}
            />
            &nbsp;
          </>
        )}{" "}
        <span style={{ fontSize: 12 }}> {props?.buttonText} </span>
      </Button>
    </Card>
  );
};

export default IntegrationCard;
