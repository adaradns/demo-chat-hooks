import React, { useState, useEffect } from 'react';
import ChatAPI from '../../utils/api/ChatAPI';
import MySwal from '../commons/alert/SweetAlert';
import Toggle from '../commons/button/Toggle';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(true);
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    console.log(e.target.checked)
    setChecked(e.target.checked);
    return e.target.checked;
  };

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status);
    }
    ChatAPI.subscribeToFriendStatus(props.friend, handleStatusChange);
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend, handleStatusChange);
    };
  });

  return (
    <div className='container-status'>
      {props.friend.online && checked ?
        <Toggle
          checked={true}
          text="Online"
          onChange={handleChange}
          onstyle="btn-success"
          offstyle="btn-danger"
          online={props.friend.online}
          friend={props.friend}
        /> :
        <Toggle
          checked={false}
          text="Offline"
          onChange={handleChange}
          offstyle="btn-danger"
          onstyle="btn-success"
          online={props.friend.online}
          friend={props.friend}
        />}

      <MySwal
        onChange={handleChange}
        online={props.friend.online}
        checked={checked}
        friend={props.friend}
      />
    </div>
  );
}

export default FriendStatus;