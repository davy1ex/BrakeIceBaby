import ProtectedRoutes from './ProtectedRoutes'
import UnprotectedRoutes from './UnprotectedRoutes'
import {Routes, BrowserRouter, Route} from 'react-router-dom'


import LoginPage from '../../../pages/LoginPage/LoginPage'
import LangingPage from '../../../pages/LangingPage'

import UserProfilePage from '../../../pages/UserProfile/UserProfilePage'
import UserProfileCardPage from '../../../pages/UserProfile/UserProfileCardPage'

import NotFoundPage from '../../../pages/NotFoundPage'

import FeedPage from '../../../pages/FeedPage/FeedPage'
import MatchesPage from '../../../pages/MatchesPage'
import ChatPage from '../../../pages/ChatPage'
import SettingsPage from '../../../pages/SettingsPage'

export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/app' element={<ProtectedRoutes/>}>
              <Route path='profile' element={<UserProfilePage/>}/>
              <Route path='profile/preview' element={<UserProfileCardPage/>} />

              

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