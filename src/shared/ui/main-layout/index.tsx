import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import DockBar from './DockBar';
import TopBar from './TopBar';

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Content
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Main Content Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: 'calc(100vh - 50px)',
            overflow: 'auto',
          }}
        >
          <TopBar/>
          <Outlet />
        </div>

        {/* DockBar at Bottom */}
        
          <DockBar style={{
            height: '50px',
            width: '100%',
          }} />
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;
