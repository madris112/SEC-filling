import './App.css';
import LineChart from './Charts/DebtChart';
import AssetChart from './Charts/AssetChart';

function App() {
  return (
    <div className="App">
      {/* <LineChart company='CIK0000001750'/> */}
      <AssetChart company='CIK0000001750' />
    </div>
  );
}

export default App;
