/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (percent !== undefined) {
      if (percent >= 1) {
        setColor("#35C259");
      } else if (percent <= -1) {
        setColor("#EA3942");
      } else {
        setColor("#CDEBCB");
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
