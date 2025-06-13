"use client"
import DailogBox from "@/components/dailogBox/dailogBox";
import { Button } from "antd";
import React, { useState } from "react";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("parent component ok");
    
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log("parent component cancel");
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button onClick={showModal}>Open Modal</Button>
      <DailogBox 
      isOpen={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      />
    </div>
  );
};

export default Page;
