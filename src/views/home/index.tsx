import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

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
  getItem('Option 1', '/home/page1', <PieChartOutlined />),
  getItem('Option 2', '/home/page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigatar = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuClick = (e:{key:string}) => {
    console.log(e.key)
    navigatar(e.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick}/>
      </Sider>
      {/* 内容区 */}
      <Layout>
        {/* 头部 */}
        <Header style={{ paddingLeft: '16px', background: colorBgContainer }} >
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: '64px'}}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        {/* 中间 */}
        <Content style={{ margin: '16px 16px 0px 16px' }}>
          <div style={{ paddingBottom: '560px', minHeight: 360, background: colorBgContainer }}>
            <Outlet></Outlet>
          </div>
        </Content>
        {/* 底部 */}
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;