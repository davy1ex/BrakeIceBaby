import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";


const TopBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(useLocation().pathname.split('/'))  
  




  const handleClick = (key) => {
    navigate('/app/' + key)
  }

  return (
    <div className='topBarContainer' style={styles.topBarContainer}>
      {!useLocation().pathname.split('/').includes('profile')? (
        <div className="backButton" onClick={() => {navigate('/app/profile')}}>
        👈
      </div>
      ) : ("")}
      
      <div className="rightButtons" style={styles.rightButton}>
        <button style={styles.button}>👨‍💻</button>
        <button style={styles.button} onClick={() => {handleClick('settings')}}>⚙</button>
      </div>
    </div>
  )
}

const styles = {
  topBarContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px"
  },

  button: {
    width: "25px",
    marginLeft: "15px"
  },

  rightButton: {
    width: "50%",
    justifySelf: "flex-end"
  }
}

export default TopBar