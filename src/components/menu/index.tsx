import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('栏目一', '/home/page1', <PieChartOutlined />),
  getItem('栏目二', '/home/page2', <DesktopOutlined />),
  getItem('栏目三', '/home/page3', <UserOutlined />, [
    getItem('Tom', '/home/page3/1'),
    getItem('Bill', '/home/page3/2'),
    getItem('Alex', '/home/page3/3'),
  ]),
  getItem('栏目四', '/home/page4', <TeamOutlined />, [getItem('Team 1', '/home/page4/1'), getItem('Team 2', '/home/page4/2')]),
  getItem('栏目五', '/home/page5', <FileOutlined />),
];

const Comp: React.FC = () => {
  const navigatar = useNavigate()
  const location = useLocation()

  const menuClick = (e:{key:string}) => {
    navigatar(e.key)
  }

  const [openKeys,setOpenKeys] = useState([''])

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    console.log(keys)
    setOpenKeys([keys[keys.length - 1]])
  };

  return(
    <Menu defaultSelectedKeys={[location.pathname]} theme="dark" mode="inline" items={items} openKeys={openKeys} onClick={menuClick} onOpenChange={onOpenChange}/>
  )
}

export default Comp