import React, {useEffect, useState} from 'react'
import ProfileCard from '../../shared/ui/profileCard'
import {getUsers} from './MockUpData'

const FeedPage = () => {
  const [users, setUsers] = useState([])
  
  useEffect(()=>{
    getUsers().then((data) => setUsers(data))  
  })
  
  return (
    <div>

      <br/>
      {users.length > 0 ? (
        users.map((user)=>
          <ProfileCard 
            urlPic={user.urlPic}
            firstName={user.firstName} 
            profileDesc={user.profileDesc}
          />
        )
      )
      : (
        ""
      )
    }
    </div>
    
  )
}

export default FeedPage