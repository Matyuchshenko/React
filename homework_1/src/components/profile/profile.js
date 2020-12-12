import PropTypes from "prop-types";
import defaultImage from "./default.jpg";
import s from "./profile.module.css";

const Profile = ({
  avatar = defaultImage,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={avatar} alt={name} className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}> {followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}> {views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}> {likes}</span>
      </li>
    </ul>
  </div>
);

// Profile.defaultProps = {
//   avatar: defaultImage,
// };

export default Profile;

Profile.propTypes = {
  defaultImage: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
