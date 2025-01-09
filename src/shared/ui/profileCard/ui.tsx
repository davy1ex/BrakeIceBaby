interface ProfileCardIn {
    urlPic: string;
    firstName: string;
    profileDesc: string;
}

const ProfileCard = ({
    urlPic,
    firstName,
    profileDesc,
}: ProfileCardIn) => {
    return (
        <div className="profileCardContainer" style={styles.profileCard}>
            <img style={styles.profileCard.profileImg} src={urlPic} alt="profile pic"/>

            <div className="profileInfo" style={styles.profileCard.profileInfo}>
                <div className="firstName" style={styles.profileCard.profileInfo.firstName}>{firstName}</div>
                <div className="profileDesc" style={styles.profileCard.profileInfo.profileDesc}>{profileDesc}</div>
            </div>
        </div>
    );
};

const styles = {
    profileCard: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        bottom: "0px",
        borderRadius: "10px",
        boxShadow: "black 0 0 50px",
        height: "100%",

        profileImg: {
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
        },

        profileInfo: {
            position: "absolute",
            bottom: "30px",
            color: "white",
            width: "100%",
            textAlign: "left",
            padding: "0 10px",
            textShadow: "black 0 0 5px",

            firstName: {
                fontSize: "50px"
            },

            profileDesc: {
                fontSize: "16px"
            }
        },

        
    },
};

export default ProfileCard;
