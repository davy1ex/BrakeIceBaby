import {Routes, BrowserRouter, Route} from 'react-router-dom'
import './App.css'

import ProtectedRoutes from '../features/auth/routes/ProtectedRoutes'
import UnprotectedRoutes from '../features/auth/routes/UnprotectedRoutes'
import LoginPage from '../pages/LoginPage'
import LangingPage from '../pages/LangingPage'
import UserProfilePage from '../pages/UserProfilePage'
import NotFoundPage from '../pages/NotFoundPage'
import FeedPage from '../pages/FeedPage'
import MatchesPage from '../pages/MatchesPage'
import ChatPage from '../pages/ChatPage'
import SettingsPage from '../pages/SettingsPage'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/app' element={<ProtectedRoutes/>}>
              <Route path='profile' element={<UserProfilePage/>} />
              <Route path='feed' element={<FeedPage/>} />
              <Route path='chat' element={<ChatPage/>} />
              <Route path='settings' element={<SettingsPage/>} />

              <Route path='matches' element={<MatchesPage/>} />
          </Route>
          
          <Route path='/' element={<UnprotectedRoutes/>} >
            <Route path='/login' element={<LoginPage/>} />
            <Route path='' element={<LangingPage/>} />
          </Route>

          <Route path='*' element={<NotFoundPage/>} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
