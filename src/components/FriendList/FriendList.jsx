
import css from "./FriendList.module.css"

export default function FriendList ({friends}) {
    return (
        <ul className={css.friendList}>
          {friends.map((friend) => {
            return <li className={css.friendItem} key={friend.id}> 
            <FriendListItem 
             avatar={friend.avatar}
             name={friend.name}
             isOnline={friend.isOnline} /> 
             </li>;
          })}
        </ul>
      );
}

function FriendListItem ({avatar, name, isOnline}) {
    return (
        <div>
    <img src={avatar} alt="Avatar" width="76" />
    <p className={css.userName}>{name}</p>
    <p className={isOnline ? css.online : css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>

    )
}
    