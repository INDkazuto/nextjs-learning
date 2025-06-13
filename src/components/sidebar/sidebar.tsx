"use client";

import { Menu } from "antd";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{
        width: 240,
        left: 0,
        height: "100vh",
        background: "#fff",
        position: "fixed",
      }}
    >
      <Menu>
        <Menu.ItemGroup >
          <Link href={"/home"}>
            <Menu.Item>Home</Menu.Item>
          </Link>
          <Link href={"/product"}>
            <Menu.Item>Product</Menu.Item>
          </Link>
           <Link href={"/about"}>
            <Menu.Item>About</Menu.Item>
          </Link>
           <Link href={"/contact"}>
            <Menu.Item>Contact</Menu.Item>
          </Link>
        </Menu.ItemGroup>
      </Menu>
    </div>
  );
};

export default Sidebar;
