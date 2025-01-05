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
      <div className="leftButtons" style={styles.leftButtons}>
        {!useLocation().pathname.split('/').includes('profile')? (
          <div className="backButton" onClick={() => {navigate('/app/profile')}}>
          👈
          </div>
        ) : ("")}
      </div>
      
      <div className="rightButtons" style={styles.rightButtons}>
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

  leftButtons: {
    width: "50%",
    display: "flex",
    justifySelf: "flex-end",
  },

  rightButtons: {
    width: "50%",
    display: "flex",
    justifySelf: "flex-end",
    justifyContent: "end"

  }
}

export default TopBar