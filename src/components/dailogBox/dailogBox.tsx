import React from "react";
import { Modal } from "antd";
interface DailogBoxProps {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}
const DailogBox: React.FC<DailogBoxProps> = ({ isOpen, onOk, onCancel }) => {

  const handleOkButton = () => {
    console.log("child component ok");
    onOk();
  }
  const handleCancelButton = () => {
    console.log("child component cancel");
    onCancel();
  }
  return (
    <>
      <Modal title="Basic Modal"
      open={isOpen}
      onOk={handleOkButton}
      onCancel={handleCancelButton}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default DailogBox;
