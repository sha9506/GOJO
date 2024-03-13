import React, { useState } from "react";
import './Generate.css';
import GenGrpah from './Assets/GenGraph.png';

const Generate= ({energyName , setPageNumber})=>
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

    const[genText, setGenText]=useState("");

    const handleGenerated=()=>
    {
        setGenText("Tokens Generated!!");
    }
    return( <div className="generate-bg">
        <div className="main-box">
        <div className="nav-bar">
             <div className="title">GOJO</div>
                <div className="nav-bar-item">
                    <div className="nav-button" onClick={handleHome}>Home</div>
                    <div className="nav-button">Wallet</div>
                    <div className="nav-button"onClick={handleGenerate} > Generate</div>
                    <div className="nav-button" onClick={handleConsume}>Consume</div>
                    <div className="nav-button">Settings</div>
                 </div>
        </div>
        <div className="content">
            <div className="content-graph">
            
            <div className="energy">
                {energyName.map((item)=>
                {
                    return(<div className="energy-item">
                        {item} </div>)
                })}
            </div>
            <img src={GenGrpah} alt="graph" className="gen-g" />
            </div>
            <div className="gen-table">
                <div className="gen-side">
                    <div className="gen-side-item">Number of Tokens</div>
                    <div  className="gen-side-item">Date of Generation</div>
                    <div  className="gen-side-item">Time of Generation</div>
                </div>
                <div className="gen-input">
                    <input type="text" className="input-box" />
                    <input type="text" className="input-box"/>
                    <input type="text" className="input-box" />
                </div>
            </div>
            <div className="generate-box">
                <div className="generate-button" onClick={handleGenerated}>Generate</div>
                <div className="gentext">{genText}</div>
                </div>
        </div>
    </div>
    </div>)
}

export default Generate