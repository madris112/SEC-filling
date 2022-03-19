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

<DropdownButton id="dropdown-basic-button" title="Dropdown button" onSelect={handleselect}>
  <Dropdown.Item eventKey="CIK0000001750">AAR CORP</Dropdown.Item>
  <Dropdown.Item eventKey="CIK0000001800">ABBOTT LABORATORIES</Dropdown.Item>
  <Dropdown.Item eventKey="CIK0000001961">Worlds Inc</Dropdown.Item>
  <Dropdown.Item eventKey="CIK0000002034">Aceto Corp</Dropdown.Item>
</DropdownButton>
      
      <AssetChart company={cik} />
      <DebtChart company={cik} />
      <CashFlowChart company={cik}/>
      <FutureGrowth company={cik}/>
    </div>
  );
}

export default App;
