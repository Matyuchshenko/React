import PropTypes from "prop-types";
import s from "./statistic.module.css";

function Section({ title, children }) {
  return (
    <div className={s.section}>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </div>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
