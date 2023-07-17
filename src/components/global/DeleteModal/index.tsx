import { DeleteFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";
import './index.css'
import { toastText } from "../../../Utils/utils";

const ConfirmDelete = (props: any) => {
  // Inits
  const { handleCancel, handleOk, isModalOpen } = props;
  // for delete the selected value
  const deleteItemHandler = () => {
    toastText("Item deleted successfully", "success");
    handleOk()
  };

  const cancelItemDelete = () => {
    toastText("Item is not deleted ", "error");
    handleCancel();
  }

  return (
    <Modal
      title={
        <div>
          <DeleteFilled style={{ color: 'red', fontSize: '50px', marginLeft: '46%' }} />
          <h5 className="mt-4 mb-5 ms-5 mx-5" style={{ paddingLeft: '44px' }}>
            Are you sure you want to delete?
          </h5>
        </div>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered={true}
      footer={[
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            key="ok"
            type="primary"
            danger={true}
            onClick={deleteItemHandler}
          >
            DELETE
          </Button>
          <Button key="cancel" onClick={cancelItemDelete}>
            Cancel
          </Button>
        </div>
      ]}
    ></Modal>

  );
};

export default ConfirmDelete;
