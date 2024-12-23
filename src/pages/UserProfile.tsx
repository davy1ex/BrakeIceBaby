import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authActions';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

const UserProfile = () => {
  return (
    <>
        <div>UserProfile</div>
        u can logout <LogoutButton></LogoutButton>
    </>
  )
}

export default UserProfile