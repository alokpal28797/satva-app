import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import './index.css'

const { Title, Link } = Typography;

const AddInfo = (props: any) => {
  const { openDrawerHandler, setDrawerInfoHandler, title, addInfo } = props;
  // For add the userData
  const addUserHandler = () => {
    openDrawerHandler();
  };
  // Get capitalize title
  const GetTitle = () => {
    return <>{title?.charAt(0).toUpperCase() + title?.slice(1)}</>;
  };

  const getTitle = GetTitle()
  return (


    <div className="addInfoDiv">
      <Row
        style={{ width: "98%" }}
        justify={"space-between"}
        align={"middle"}
      >
        <Col xs={24} sm={24} md={16} lg={21} className=" mt-3">
          <Title level={4}>
            {getTitle.props.children === 'Subscription' ? `My Subscription` : getTitle.props.children}
            {title === "integrations" && (
              <>
                | <Link>View Active Connections (0)</Link>
              </>
            )}
          </Title>
        </Col>
        {title === 'organization' ? <Col xs={24} sm={24} md={8} lg={3} className="btnOrganization mt-3">
          {addInfo && (
            <Button
              className="organizationBtn"
              type="primary"
              icon={<PlusOutlined />}
              onClick={addUserHandler}
            >
              Add {title}
            </Button>
          )}
        </Col> 
        :
         <Col xs={24} sm={24} md={8} lg={3} className="btnInfo mt-3">
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
        </Col>}

      </Row>
    </div>
  );
};

export default AddInfo;
