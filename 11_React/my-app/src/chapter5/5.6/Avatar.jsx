import React from 'react';

function Avatar(props) {
  return (
    <img className="avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%',
      }}
    />
  );
}

export default Avatar;