import styles from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.information}>
        <img className={styles.photo} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.info}>@{tag}</p>
        <p className={styles.info}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.statsCategory}>Followers</span>
          <span className={styles.statsValue}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsCategory}>Views</span>
          <span className={styles.statsValue}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsCategory}>Likes</span>
          <span className={styles.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
