import { Layout } from "antd"
import { Navigate, useNavigate } from "react-router-dom";
import { fetchUserProfile } from "./mockUpData";
import { useEffect, useState } from "react";

const UserProfileInfo =({name, birthDay, picture}) => {
    const navigate = useNavigate()

    return (
        <Layout>
            <div className="userContainer" style={styles.userContainer}>
                <img 
                    src={picture} 
                    alt="profile picture" 
                    style={{width: "150px", borderRadius: "100%"}}
                    onClick={()=>navigate('preview')}
                />
                
                <div className="profile" style={styles.profile}>
                    <div className="profileInfo" style={styles.profileInfo}>
                        <div className="profileName">{name},</div>
                        <div className="profileAge">{birthDay}</div>
                    </div>
                    
                    <div className="userControls" style={styles.userControls}>
                        <div className="edit-btn" style={styles.button}>
                            Edit
                        </div>
                        <div className="edit-btn">
                            📡
                        </div>
                    </div>
                </div>
            </div>
        </Layout>)
}

const UserProfilePage = () => {
    const [profileData, setProfileData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUserProfile.then((data) => {
            setProfileData(data)
            
            setIsLoading(false)

            console.log("getted")})
    }, [])

    return (
        <>
        {isLoading 
            ? "LOADING" 
            : <UserProfileInfo  
                name={profileData.name} 
                birthDay={profileData.birthDay}
                picture={profileData.picture}
            />
        }
        </>
        
    )
}


const styles = {
    userContainer: {
        display: "flex",
        width: "90%",
        margin: "0 auto",
        justifyContent: "flex-start",
        alignItems: "center",       
    },

    profile: {
        textAlign: "left",
        padding: "30px"
    },

    profileInfo: {
        fontSize: "1.5em",
        width: "100%",
        fontWeight: "bold",
    },

    userControls: {
        display: "flex",
    },

    button: {
        backgound: "gray",
        paddingRight: "10px"
    }
}

export default UserProfilePage