import PropTypes from "prop-types";
import s from "./friends.module.css";

const Friend = ({ avatar, name, isOnline }) => (
  <>
    <span className={isOnline}></span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </>
);

export default Friend;

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
};
