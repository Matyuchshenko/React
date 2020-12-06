// import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../images/default.jpg";
import s from "./description.module.css";

const Description = ({
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
