// import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../images/default.jpg";

const Description = ({
  avatar = defaultImage,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt={name} className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
      </li>
    </ul>
  </div>
);

export default Description;

Description.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
