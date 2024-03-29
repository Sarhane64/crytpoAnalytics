import Treemaps from "./App/chart/Treemap.jsx";
import Header from "./App/components/Header.jsx";
import Table from "./App/table/Table.jsx";
import dataCrypto from "./crypto.json";

function App() {
  const dataCryptos = dataCrypto.data;
  return (
    <>
      <div className="header">
        <Header />
        <Treemaps coinsData={dataCryptos} />
      </div>
      <Table cryptoTokenData={dataCryptos} />
    </>
  );
}

export default App;
