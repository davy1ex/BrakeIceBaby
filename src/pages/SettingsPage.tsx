import React from 'react'
import { logout } from '../features/auth/authActions';
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return <button onClick={handleLogout}>Logout</button>;
};

const SettingsPage = () => {
  return (
    <div>SettingsPage <br/> <LogoutButton/></div>
  )
}

export default SettingsPage