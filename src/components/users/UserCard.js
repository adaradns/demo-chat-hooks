import React from "react";
import { Link } from "react-router-dom";
import FriendStatus from "../chat/FriendStatus";
import './UserCard.css';

const UserCard = ({ user }) => {
    return (
        <div className="userCard-container">
            <div className="friend">
                <Link to={`/users/${user.id}`} state={{ user: user }}>
                    <img src={user.image} />
                    <p>
                        <strong>{user.name} {user.lastName} | Username: {user.userName}</strong>
                        <span>Username: {user.userName}</span>
                        <span>{user.description}</span>
                    </p>
                </Link>
                <FriendStatus friend={user} />
            </div>
        </div>
    );
}

export default UserCard;