import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";

const { Title, Link } = Typography;

const AddInfo = (props: any) => {
  const { openDrawerHandler, setDrawerInfoHandler, title, addInfo } = props;
  // For add the userData
  const addUserHandler = () => {
    openDrawerHandler();
  };
  // Get capitalize title
  const GetTitle = () => {
    console.log(title?.charAt(0).toUpperCase() + title?.slice(1));
    return <>{title?.charAt(0).toUpperCase() + title?.slice(1)}</>;
  };

  const getTitle = GetTitle()
  console.log("🚀 ~ file: index.tsx:19 ~ AddInfo ~ getTitle:", getTitle.props.children)
  return (
    <div style={{ width: "100%" }}>
      <Row
        style={{ width: "100%" }}
        justify={"space-between"}
        align={"middle"}
      >
        <Col xs={24} sm={24} md={16} lg={21} className="ps-4 mt-3">
          <Title level={4}>
            {/* {<GetTitle /> === 'Organization':  } */}
            {getTitle.props.children === 'Subscription' ? `My Subscription` : getTitle.props.children}
            {title === "integrations" && (
              <>
                | <Link>View Active Connections (0)</Link>
              </>
            )}
          </Title>
        </Col>
        <Col xs={24} sm={24} md={8} lg={3} className="ps-3 mt-3">
          {addInfo && (
            <Button
              style={{ backgroundColor: "#286FD1", fontSize: 12 }}
              type="primary"
              icon={<PlusOutlined />}
              onClick={addUserHandler}
            >
              Add {title}
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AddInfo;
