import PropTypes from "prop-types";

const Friend = ({ avatar, name, isOnline }) => (
  <>
    <span className="status"></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </>
);

export default Friend;

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};
