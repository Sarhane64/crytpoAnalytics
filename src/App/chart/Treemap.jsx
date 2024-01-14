/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Treemap, Tooltip } from "recharts";

function Treemaps({ coinsData }) {
  const [cryptoDataArray, setCryptoDataArray] = useState([]);

  const generateTreemapData = (data) => {
    let chartData = [];

    for (let i = 0; i < 25; i++) {
      if (excludeCoin(data[i].symbol)) {
        chartData.push({
          name:
            data[i].symbol.toUpperCase() +
            " " +
            data[i].market_cap_change_percentage_24h.toFixed(1) +
            "%",
          size: data[i].market_cap,
          fill: colorCharts(data[i].price_change_percentage_24h),
        });
      }
    }

    return chartData;
  };

  const colorCharts = (number) => {
    if (number >= 20) {
      return "rgb(46, 137, 51)";
    } else if (number >= 5) {
      return "rgb(43, 176, 51)";
    } else if (number >= 0) {
      return "rgb(96, 237, 105)";
    } else if (number >= -5) {
      return "rgb(255, 111, 86)";
    } else if (number >= -20) {
      return "rgb(251, 69, 63)";
    } else {
      return "rgb(10, 10, 10)";
    }
  };

  const excludeCoin = (token) => {
    const excludedTokens = [
      "usdt",
      "usdc",
      "busd",
      "dai",
      "ust",
      "mim",
      "tusd",
    ];
    return !excludedTokens.includes(token.toLowerCase());
  };

  useEffect(() => {
    if (coinsData && coinsData.length > 0) {
      const treemapData = generateTreemapData(coinsData);
      setCryptoDataArray(treemapData);
    }
  }, [coinsData]);

  const TreemapTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.name}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="global-chart">
      <Treemap
        width={700}
        height={200}
        data={cryptoDataArray}
        dataKey="size"
        stroke="rgb(51,51,51)"
        fill="black"
        aspectRatio="1"
      >
        <Tooltip content={<TreemapTooltip />} />
      </Treemap>
    </div>
  );
}

export default Treemaps;
