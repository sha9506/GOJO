import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Generate from './Components/Generate';
import Consume from './Components/Consume';

const App =()=>
{
  const[pageNumber, setPageNumber]=useState(4);

  const energyName = ['SOLAR', 'HYDRO', 'OIL', 'COAL'];
  const[trackName, setTrackName]=useState(
    [
      {
        title:"Solar",
        abv: "SLR",
        price: "$1.30",
        rate: "+1.68%"
      },
      {
        title:"Hydro",
        abv: "HYD",
        price: "$4.30",
        rate: "+1.68%"
      },
      {
        title:"Coal",
        abv: "COAL",
        price: "$5.30",
        rate: "-1.68%"
      },
      {
        title:"Oil",
        abv: "OIL",
        price: "$6.30",
        rate: "+1.68%"
      }
    ]
  )

  const[transactionName, setTransactionName]=useState(
    [
      {
        icon: {},
        title: "Solar - (13/03-2024)",
        balance: "14",
        profit: "0.003 BTC"
      },
      {
        title: "coal - (10/03/2024)",
        balance: "10",
        profit: "0.003 BTC"
      },
      {
        title: "Hydro - (9/03/2024)",
        balance: "25",
        profit: "0.003 BTC"
      }
    ]
  )

  return(<div>
    { 
       pageNumber===1? <Login setPageNumber={setPageNumber}/> : null
    }
    {
      pageNumber===2? <Home setPageNumber={setPageNumber} trackName={trackName} transactionName={transactionName}/> : null
    }
    {
      pageNumber ===3? <Generate setPageNumber={setPageNumber} energyName={energyName}/> : null
    }
    {
      pageNumber===4? <Consume setPageNumber={setPageNumber}/>: null
    }
  </div>)
}


export default App;
