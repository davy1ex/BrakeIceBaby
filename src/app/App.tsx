import {Routes, BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import Login from '../pages/Login'
import LangingPage from '../pages/LangingPage'
import UserProfile from '../pages/UserProfile'
import ProtectedRoutes from '../features/auth/routes/ProtectedRoutes'
import UnprotectedRoutes from '../features/auth/routes/UnprotectedRoutes'
import NotFoundPage from '../pages/NotFoundPage'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/app' element={<ProtectedRoutes/>}>
              <Route path='profile' element={<UserProfile/>} />
          </Route>
          
          <Route path='/' element={<UnprotectedRoutes/>} >
            <Route path='/login' element={<Login/>} />
            <Route path='' element={<LangingPage/>} />
          </Route>

          <Route path='*' element={<NotFoundPage/>} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
