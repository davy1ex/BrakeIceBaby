import { Layout } from "antd"

const profileMockUp = {
    profilePic:
        "https://funny.klev.club/smeh/uploads/posts/2024-04/funny-klev-club-bu5y-p-smeshnie-kartinki-super-sus-18.jpg",
    profileName: "Супер сус",
    profileBirthday: "01-01-2000",
    profileDesc:
        "Всё нормально, я Супер Сус. 20 лет тут лазил, лазию и буду лазить",
};

const UserProfilePage = ({profile = profileMockUp}) => {
  return (
        <Layout>
            <div className="userContainer" style={styles.userContainer}>
                <img src={profile.profilePic} alt="profile picture" style={{width: "150px", borderRadius: "100%"}}/>
                
                <div className="profile" style={styles.profile}>
                    <div className="profileInfo" style={styles.profileInfo}>
                        <div className="profileName">{profile.profileName},</div>
                        <div className="profileAge">{profile.profileBirthday}</div>
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

        </Layout>
    
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