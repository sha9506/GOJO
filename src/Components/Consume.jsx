import React from "react";
import './Consume.css';
import EnergyConsume from './Assets/energyconsume.jpeg';
import CarbonEmi from './Assets/carbon.jpeg';

const Consume =({setPageNumber})=>
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
    return(<div className="consume-bg">
        <div className="main-box">
        <div className="nav-bar">
             <div className="title">GOJO</div>
                <div className="nav-bar-item">
                    <div className="nav-button" onClick={handleHome}>Home</div>
                    <div className="nav-button">Wallet</div>
                    <div className="nav-button" onClick={handleGenerate} > Generate</div>
                    <div className="nav-button" onClick={handleConsume}>Consume</div>
                    <div className="nav-button">Settings</div>
                 </div>
        </div>
        <div className="content-consume">
            <div className="graph-consume">
                <div className="consume-head">Energy Consumed</div>
                <img src={EnergyConsume} alt="consume" className="image" />
                <div className="consume-head">Carbon Emissions</div>
               <img src={CarbonEmi} alt="carbon" className="image"/>
            </div>
        </div>
        </div>
        
    </div>)
}

export default Consume;