import {Routes, BrowserRouter, Route} from 'react-router-dom'
import './App.css'

import ProtectedRoutes from '../features/auth/routes/ProtectedRoutes'
import UnprotectedRoutes from '../features/auth/routes/UnprotectedRoutes'
import Login from '../pages/Login'
import LangingPage from '../pages/LangingPage'
import UserProfilePage from '../pages/UserProfilePage'
import NotFoundPage from '../pages/NotFoundPage'
import FeedPage from '../pages/FeedPage'
import MatchesPage from '../pages/MatchesPage'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/app' element={<ProtectedRoutes/>}>
              <Route path='profile' element={<UserProfilePage/>} />
              <Route path='feed' element={<FeedPage/>} />
              <Route path='matches' element={<MatchesPage/>} />
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
