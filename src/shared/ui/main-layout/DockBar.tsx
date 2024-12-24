import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'feed',
    icon: <MailOutlined />,
  },
  {

    key: 'matches',
    icon: <AppstoreOutlined />,

  },
  {

    key: 'profile',
    icon: <SettingOutlined />,
    // children: [
    //   {
    //     type: 'group',
    //     label: 'Item 1',
    //     children: [
    //       { label: 'Option 1', key: 'setting:1' },
    //       { label: 'Option 2', key: 'setting:2' },
    //     ],
    //   },
    //   {
    //     type: 'group',
    //     label: 'Item 2',
    //     children: [
    //       { label: 'Option 3', key: 'setting:3' },
    //       { label: 'Option 4', key: 'setting:4' },
    //     ],
    //   },
    // ],
  },
];

const DockBar: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    return navigate('/app/' + e.key)
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default DockBar;