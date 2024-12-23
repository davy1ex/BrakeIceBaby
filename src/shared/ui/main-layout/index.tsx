import{ Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import DockBar from './DockBar'

const MainLayout = () => {
  return (
    <Layout>
        <Layout.Content style={{minHeight: "100lvh", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Layout style={{minHeight: "90lvh"}}>
                <Outlet />
            </Layout>
            <Layout style={{minHeight: "10lvh", display: "flex", justifyContent: "flex-end"}}>
                <DockBar />
            </Layout>
        </Layout.Content>
    </Layout>
  )
}

export default MainLayout