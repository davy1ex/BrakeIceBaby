import { useDispatch } from "react-redux";
import { logout } from "../features/auth/models/authActions";
import ProfileCard from "../entities/profile/profileCard";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return <button onClick={handleLogout}>Logout</button>;
};

const profileMockUp = {
    profilePic:
        "https://funny.klev.club/smeh/uploads/posts/2024-04/funny-klev-club-bu5y-p-smeshnie-kartinki-super-sus-18.jpg",
    profileName: "Супер сус",
    profileDesc:
        "Всё нормально, я Супер Сус. 20 лет тут лазил, лазию и буду лазить",
};

const UserProfilePage = () => {
    return (
        <>
            <div style={{height: "100%"}}>
                <ProfileCard
                    profilePic={profileMockUp.profilePic}
                    profileName={profileMockUp.profileName}
                    profileDesc={profileMockUp.profileDesc}
                />
            </div>
            u can logout <LogoutButton></LogoutButton>
        </>
    );
};

export default UserProfilePage;
