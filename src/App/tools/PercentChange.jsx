/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (percent !== undefined) {
      if (percent >= 20) {
        setColor("rgb(46, 137, 51)");
      } else if (percent >= 5) {
        setColor("rgb(124, 238, 90)");
      } else if (percent >= 1) {
        setColor("rgb(144,238,144)");
      } else if (percent === 0) {
        setColor("rgb(255,250,250)");
      } else if (percent >= -5) {
        setColor("rgb(255, 111, 86)");
      } else if (percent >= -20) {
        setColor("rgb(251, 69, 63)");
      } else {
        setColor("rgb(255, 0, 0)");
      }
    }
  }, [percent]);

  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;
