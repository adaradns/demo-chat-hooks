import React, { useEffect, useState } from "react";
import ChatAPI from "../../utils/api/ChatAPI";
import UserCard from "../users/UserCard";
import './Chat.css';

const Chat = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        setFriends(ChatAPI.friends(setFriends))
    }, [])

    return (
        <section className="chat-container">
            <div className="friends-list">
                {friends !== undefined ?
                    friends.map((user, index) => {
                        return  <UserCard
                                    key={user.id}
                                    user={user}
                                />
                    })
                    :
                    null
                }
            </div>
        </section>

    );
}

export default Chat;
