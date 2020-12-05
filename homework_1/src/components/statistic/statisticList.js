import Statistic from "./statistic";
import PropTypes from "prop-types";

const StatisticList = ({ items }) => {
  return (
    <ul className="stat-list">
      {items.map((item) => (
        <li className="item" key={item.id}>
          <Statistic
            label={item.label}
            percentage={item.percentage}
            title={item.title}
          />
        </li>
      ))}
    </ul>
  );
};
export default StatisticList;

StatisticList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
