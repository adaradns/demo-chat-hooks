import React from "react";
import { useLocation } from "react-router-dom";
import './UserDetail.css';

const UserDetail = () => {
    const location = useLocation();
    const { user } = location.state
    return (
        <>
            <div className="user-title">
                <h2>Detalle usuario {user.name}</h2>
            </div>
            <div className="user-detail">
                <div className="user-img-container">
                    <img src={user.image} alt={`image-${user.name}}`} />
                </div>
                <div className="user-info">
                    <p>Nombre: {user.name}</p>
                    <p>Apellido: {user.apellido}</p>
                    <p>Username: {user.userName}</p>
                    <span>Descripcion: {user.description}</span>
                </div>
            </div>
        </>
    );
}

export default UserDetail;