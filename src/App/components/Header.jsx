import crypto from "../../cryptoTokenData.json";

function Header() {
  const cryptoData = crypto.cryptoActive;
  return (
    <div className="header-container">
      <ul className="title">
        <h1>CryptoAnalitiX</h1>
        <li>
          {cryptoData.length > 0 &&
            cryptoData[0].active_cryptocurrencies !== undefined && (
              <span>Crypto: {cryptoData[0].active_cryptocurrencies}</span>
            )}
        </li>
        <li>
          {cryptoData.length > 0 && cryptoData[0].markets !== undefined && (
            <span>Marché: {cryptoData[0].markets}</span>
          )}
        </li>
        <li>
          {cryptoData.length > 0 &&
            cryptoData[0].ongoing_icos !== undefined && (
              <span>Icos à venir: {cryptoData[0].ongoing_icos}</span>
            )}
        </li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          Marche Globaux:{" "}
          {cryptoData.length > 0 &&
            cryptoData[0].market_cap_change_percentage_24h_usd !==
              undefined && (
              <span>
                {cryptoData[0].market_cap_change_percentage_24h_usd.toFixed(2)}%
              </span>
            )}
        </li>
        <li>
          BTC Dominance :{" "}
          {cryptoData.length > 0 &&
            cryptoData[0].market_cap_percentage.btc !== undefined && (
              <span>{cryptoData[0].market_cap_percentage.btc.toFixed(2)}%</span>
            )}
        </li>
        <li>
          ETH Dominance :{" "}
          {cryptoData.length > 0 &&
            cryptoData[0].market_cap_percentage.eth !== undefined && (
              <span>{cryptoData[0].market_cap_percentage.eth.toFixed(2)}%</span>
            )}
        </li>
      </ul>
    </div>
  );
}

export default Header;
