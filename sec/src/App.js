import React, {useState} from 'react';
import './App.css';
import DebtChart from './Charts/DebtChart';
import AssetChart from './Charts/AssetCharts';
import CashFlowChart from './Charts/CashFlowChart'
import FutureGrowth from './Charts/FutureGrowth'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [cik, setCik] = useState("CIK0000001750")
  const handleselect = (e) => {
    setCik(e)
  }

  return (
    <div className="App">
      <h1>Metric-ify</h1>
      <h4>Saas goal analyser</h4>

<DropdownButton id="dropdown-basic-button" title="Select Company" onSelect={handleselect}>
  <Dropdown.Item eventKey="CIK0000001750">AAR CORP</Dropdown.Item>
  <Dropdown.Item eventKey="CIK0000001800">ABBOTT LABORATORIES</Dropdown.Item>
  <Dropdown.Item eventKey="CIK0000001961">Worlds Inc</Dropdown.Item>
  <Dropdown.Item eventKey="CIK0000002034">Aceto Corp</Dropdown.Item>
</DropdownButton>
      
      <FutureGrowth company={cik}/>
      <AssetChart company={cik} />
      <DebtChart company={cik} />
      <CashFlowChart company={cik}/>
    </div>
  );
}

export default App;
