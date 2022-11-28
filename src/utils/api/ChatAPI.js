import { API_BASE_URL } from '../Constant';

const FRIENDS_BASE_URL = `${API_BASE_URL}/friends`;

export default {
    friends(setFriends) {
            fetch(FRIENDS_BASE_URL).then((response) => response.json())
                .then((data) => setFriends(data));        
    },

    subscribeToFriendStatus(friend, statusChange) {
        return statusChange(true)
    },

    unsubscribeFromFriendStatus(friend, handleStatusChange){
        return handleStatusChange(false);
    }
    
};

