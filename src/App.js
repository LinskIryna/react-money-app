import "./App.scss";
import Actions from "./components/Actions/Actions";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import Statistic from "./components/Statistic/Statistic";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <BalanceCard />
      <Actions />
      <Statistic />
      <Menu />
    </div>
  );
}

export default App;
