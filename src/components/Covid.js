import React, { useEffect, useState } from 'react'
import './covid.css';
const Covid=()=>{
const [data,setData] =useState([]);


    const   getCovidData=async()=>{
        try{
            const res= await fetch('https://api.covid19india.org/data.json');
            const actualData=await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(err){
                console.log();
        }
 
    }

    useEffect(()=>{
        getCovidData();
    },[]);
    
    return (
        <>
         <div className="grand_parent">
            <h1>🚨 LIVE</h1>
            <h2>COVID-19 TRACKER</h2>
            
            <div className="parents">

                <div className="child_1 child ">
                <p className="card_name"><span> OUR </span>COUNTRY</p>
                <p className="card_total card_small">INDIA</p>
                </div>

                <div className="child_2 child">
                <p className="card_name"><span> TOTAL </span>RECOVERED</p>
                <p className="card_total card_small"> {data.recovered}</p>
                </div>

                <div className="child_3 child">
                <p className="card_name"><span> TOTAL </span>CONFIRMED</p>
                <p className="card_total card_small"> {data.confirmed}</p>
                </div>

                <div className="child_4 child">
                <p className="card_name"><span> TOTAL </span>DEATH</p>
                <p className="card_total card_small"> {data.deaths}</p>
                </div>

                <div className="child_5 child">
                <p className="card_name"><span> TOTAL </span>ACTIVE</p>
                <p className="card_total card_small"> {data.active}</p>
                </div>

                <div className="child_6 child">
                <p className="card_name"><span> LAST </span>UPDATED</p>
                <p className="card_total card_small"> {data.lastupdatedtime}</p>
                </div>
                <h2>refresh to see updated data</h2>
            </div>
            </div>
        </>
        
    )
}

export default Covid;