import css from "./Profile.module.css"

export default function Profile ({image, name, tag, location, stats}){
    return (
        <div className={css.mainContainer}>
  <div className={css.infoContainer}>
    <img
      className={css.profileImage}
      src={image}
      alt="User avatar"
    />
    <p className={css.username}>{name}</p>
    <p className={css.text}>{"@" + tag}</p>
    <p className={css.text}>{location}</p>
  </div>

  <ul className={css.statsList}>
    <li className={css.statsItem}>
      <span className={css.spanInItem}>Followers</span>
      <span><b>{stats.followers}</b></span>
    </li>
    <li  className={css.statsItem}>
      <span className={css.spanInItem}>Views</span>
      <span><b>{stats.views}</b></span>
    </li>
    <li  className={css.statsItem}>
      <span className={css.spanInItem}>Likes</span>
      <span><b>{stats.likes}</b></span>
    </li>
  </ul>
</div>
    )
}

