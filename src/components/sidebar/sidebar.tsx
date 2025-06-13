"use client"
import { Menu } from 'antd'
import React from 'react'
const keNum = Math.random()
const Sidebar = () => {
  return (
    <div>

      
      <Menu>
            <Menu.ItemGroup>
                  <Menu.Item>
                        Home
                  </Menu.Item>
                  <Menu.Item>
                        Product
                  </Menu.Item>
                  <Menu.Item>
                        About
                  </Menu.Item>
                  <Menu.Item key={keNum}>
                        Contact
                  </Menu.Item>
            </Menu.ItemGroup>
      </Menu>
    </div>
  )
}

export default Sidebar