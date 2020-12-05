import Friend from "./friend";
import PropTypes from "prop-types";

const FriendsList = ({ items }) => {
  return (
    <ul className="friend-list">
      {items.map((item) => (
        <li className="item" key={item.id}>
          <Friend avatar={item.avatar} name={item.name} />
        </li>
      ))}
    </ul>
  );
};
export default FriendsList;

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
