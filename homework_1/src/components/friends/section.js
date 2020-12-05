import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <div>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </div>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
