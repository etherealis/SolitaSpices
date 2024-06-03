import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { FireFilled, HomeFilled, 
    LockFilled, SmileFilled, VerticalLeftOutlined} from '@ant-design/icons';
import { Outlet, Link } from "react-router-dom";
const { Header, Content } = Layout;

const createPages = () => {
    let items = [{ 
        label: (<Link to="/">Home</Link>),
        key: 'home',
        icon: <HomeFilled />
      }, {
        label: (<Link to="/about">About</Link>),
        key: 'about',
        icon: <FireFilled />
      }, {
        label: (<Link to="/profile">Profile</Link>),
        key: 'profile',
        icon: <FireFilled />
      }, {
        label: (<Link to="/products">Products</Link>),
        key: 'products',
        icon: <FireFilled />
      }
    ]
    return items;
  }

export default function PageLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={createPages()}
          style={{
            flex: 1,
            minWidth: 0,
            alignItems: 'right'
          }}
        />
      </Header>
        <Layout>
            <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                }}>
                <Outlet/>
            </Content>
        </Layout>
    </Layout>
  );
};