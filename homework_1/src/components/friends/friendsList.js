import Friend from "./friend";
import PropTypes from "prop-types";
import s from "./friends.module.css";

const FriendsList = ({ items }) => {
  return (
    <ul className={s.friendList}>
      {items.map((item) => (
        <li className={s.item} key={item.id}>
          <Friend
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline === true ? s.active : s.noActive}
          />
        </li>
      ))}
    </ul>
  );
};
export default FriendsList;

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
