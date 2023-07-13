import { Button, Card, Image } from "antd";
import "./index.css";

const SubscriptionCard = (props: any) => {
  // // // console.log("🚀 ~ file: index.tsx:5 ~ SubscriptionCard ~ props:", props);
  return (
    <>
      <Card bordered={false} className="mt-3" style={{ width: "10-vw%" }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                paddingTop: "10px",
              }}
            >
              {props?.title}
            </p>
          </div>
          <div className="d-flex">
            <Button
              className="buttonSubscription"
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#2E1F7A",
                borderColor: "#2E1F7A",
                borderRadius: "20px",
              }}
              ghost={props?.ghost}
            >
              {props?.manageSubscription}
            </Button>
          </div>
        </div>
        <hr style={{margin:'0px'}} />
        <div className="d-flex mt-3 ">
          <div>
            <p>{props.plan}:</p>
            <Image
              preview={false}
              src={props?.logo}
              style={{ width: "24px", paddingBottom: "8px" }}
            />{" "}
            <span style={{ fontSize: "20px" }}>
              <b>Gold</b>
            </span>
          </div>
          <div style={{ marginLeft: "18%" }}>
            <p>Pricing:</p>
            <p style={{ fontSize: "18px", color: "#2E1F7A" }}>
              <b>{props?.pricing}</b>
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SubscriptionCard;
