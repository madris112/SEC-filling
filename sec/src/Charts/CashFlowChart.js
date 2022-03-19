import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = (props) => {
  const [chart, setChart] = useState({})
  var data
  if(props.company === 'CIK0000001750'){ //recent to old
    data=[51800000, 404700000, 21300000]
  }else if(props.company === 'CIK0000001800'){ 
    data=[9799000000, 6838000000, 3860000000]
  }else if(props.company === 'CIK0000001961'){
    data=[342238,
        474587,
        1570844
    ]
  }else if(props.company === 'CIK0000002034'){
    data=[41782000,
        100874000,
        55680000]
  }

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch(`https://data.sec.gov/api/xbrl/companyconcept/CIK0001708176/us-gaap/LongTermDebt.json`, {
//         method: 'GET',
//         headers: {
//         }
//       })
//         .then((response) => {
//           console.log("api is  accessed")
//             // response.json().then((json) => {
//             //   console.log(json);
//             //   // setChart(json.data)
//             // });
//             console.log(response)
          
//         }).catch((error) => {
//           console.log(error);
//         });
//     };
//     fetchData()
//   }, [])

  console.log("chart", chart);

  var data = {
    labels: ['2021', '2020', '2019'],
    datasets: [{
      label: `Future Growth Potential - Assets`,
      data: data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Line
        data={data}
        height={400}
        options={options}

      />
    </div>
  )
}

export default LineChart
