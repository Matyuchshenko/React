import Statistic from "./statistic";
import PropTypes from "prop-types";
import s from "./statistic.module.css";

const StatisticList = ({ items }) => {
  return (
    <ul className={s.statList}>
      {items.length > 0 &&
        items.map((item) => (
          <li className={s.item} key={item.id}>
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
