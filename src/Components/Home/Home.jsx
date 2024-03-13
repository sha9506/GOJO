import React from "react";
import "./Home.css";

const Home=({trackName, transactionName, setPageNumber})=>
{

    const handleGenerate=()=>
    {
        setPageNumber(3);
    }
    const handleHome=()=>
    {
        setPageNumber(2);
    }
    const handleConsume=()=>
    {
        setPageNumber(4);
    }

    return(<div className="background">
            <div className="main-box">
                <div className="nav-bar">
                     <div className="title">GOJO</div>
                     <div className="nav-bar-item">
                        <div className="nav-button" onClick={handleHome}>Home</div>
                        <div className="nav-button">Wallet</div>
                        <div className="nav-button" onClick={handleGenerate}> Generate</div>
                        <div className="nav-button" onClick={handleConsume}>Consume</div>
                        <div className="nav-button">Settings</div>
                     </div>
                </div>
                <div className="content">
                    <div className="track">
                    Select The Source
                    </div>
                    <div className="track-list">
                        {
                        trackName.map((item)=>
                        {
                            return(<div className="track-item">
                                <div >{item.title} </div>
                                <div className="track-abv">{item.abv}</div>
                                <div>{item.price}</div>
                                <div className="track-rate">{item.rate}</div> 
                            </div>)
                        })
                        }
                        <div className="token-buy">
                                <div>Number of Tokens</div>
                                <input type="text" className="token-input" />
                                <div className="buy-button">Buy</div>
                        </div>
                    </div>
                    <div className="transaction-bg">
                            <div className="transactions">Transactions</div>
                            <div className="transactions-head">
                                <div>Name</div>
                                <div>Amount</div>
                            </div>
                            <div className="transaction-list">
                                {transactionName.map((item)=>
                                {
                                    return(<div className="transaction-item">
                                        
                                            <div>{item.title}</div>
                                            <div>{item.balance}</div>
                                           
                                        </div>)
                                })}
                            </div>
                    </div>
                   

                </div>
        </div>
    </div>)
}

export default Home;