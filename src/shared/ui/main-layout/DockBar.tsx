import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import './CustomMenu.css'; // Файл для стилей

const DockBar = () => {
  const [activeKey, setActiveKey] = useState('home');
  const navigate = useNavigate()

  const handleMenuClick = (key) => {
    setActiveKey(key);
    console.log(`Clicked on: ${key}`);
    navigate('/app/' + key)
  };

  return (
    <div className="menu">
      <div
        className={`menu-item ${activeKey === 'feed' ? 'active' : ''}`}
        onClick={() => handleMenuClick('feed')}
      >
        <HomeOutlined className="menu-icon" />
      </div>
      <div
        className={`menu-item ${activeKey === 'chat' ? 'active' : ''}`}
        onClick={() => handleMenuClick('chat')}
      >
        <SettingOutlined className="menu-icon" />
      </div>
      <div
        className={`menu-item ${activeKey === 'profile' ? 'active' : ''}`}
        onClick={() => handleMenuClick('profile')}
      >
        <UserOutlined className="menu-icon" />
      </div>
    </div>
  );
};

export default DockBar;
