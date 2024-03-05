import React from 'react';
import { useSelector } from 'react-redux';
import './UserInfo.css'; 

const UserInfo = () => {
    const user = useSelector(state => state.user);

    return (
        <div className="user-info-container"> {}
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
        </div>
    );
};

export default UserInfo;
