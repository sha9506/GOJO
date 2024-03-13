import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Generate from './Components/Generate';

const App =()=>
{
  const[pageNumber, setPageNumber]=useState(1);

  const[trackName, setTrackName]=useState(
    [
      {
        title:"Bitcoin",
        abv: "BTC",
        price: "$56,290.30",
        rate: "+1.68%"
      },
      {
        title:"Bitcoin",
        abv: "BTC",
        price: "$56,290.30",
        rate: "+1.68%"
      },
      {
        title:"Bitcoin",
        abv: "BTC",
        price: "$56,290.30",
        rate: "+1.68%"
      },
      {
        title:"Bitcoin",
        abv: "BTC",
        price: "$56,290.30",
        rate: "+1.68%"
      }
    ]
  )

  const[transactionName, setTransactionName]=useState(
    [
      {
        icon: {},
        title: "Bitcoin",
        balance: "4",
        profit: "0.003 BTC"
      },
      {
        title: "Bitcoin",
        balance: "4",
        profit: "0.003 BTC"
      },
      {
        title: "Bitcoin",
        balance: "4",
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
      pageNumber ===3? <Generate/> : null
    }
  </div>)
}


export default App;
