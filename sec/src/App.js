import './App.css';
import DebtChart from './Charts/DebtChart';
import AssetChart from './Charts/AssetCharts';
import CashFlowChart from './Charts/CashFlowChart'
import FutureGrowth from './Charts/FutureGrowth'

function App() {
  return (
    <div className="App">
      {/* <DebtChart company='CIK0000001800' /> */}
      <AssetChart company='CIK0000001750'/>
      {/* <CashFlowChart company='CIK0000001800'/> */}
      <FutureGrowth company='CIK0000001800'/>
    </div>
  );
}

export default App;
