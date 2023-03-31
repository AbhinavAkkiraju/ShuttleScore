import "./Match.css"
import React,{useState} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Log from "../Log/Log";

const array = [
    {
        "opponent": "Anirudh Rajesh",
        "score": "14-21",
        "dateofmatch": "3-11-2023"
    },
    {
        "opponent": "Mr. Donnelly",
        "score": "0-21",
        "dateofmatch": "3-12-2023"
    },
    {
        "opponent": "Jake Murray",
        "score": "21-17",
        "dateofmatch": "3-14-2023"
    },
    {
        "opponent": "Abhinav Akkiraju",
        "score": "0-21",
        "dateofmatch": "3-15-2023"
    },
    {
        "opponent": "Albert Du",
        "score": "21-19",
        "dateofmatch": "3-16-2023"
    },
    {
        "opponent": "Alex Bakalov",
        "score": "21-15",
        "dateofmatch": "3-16-2023"
    },
    {
        "opponent": "Rishi Roy",
        "score": "14-21",
        "dateofmatch": "3-17-2023"
    }
]

function Match() {
    const [date,setDate]=useState();
    console.log("Date",date);
    const [oname, setoname] = useState('');
    const handleChange1 = event => {
        setoname(event.target.value);
    }
    const [domatch, setdomatch] = useState('');
    const handleChange2 = event => {
        setdomatch(event.target.value);
    }
    const [upoints, setupoints] = useState('');
    const handleChange3 = event => {
        setupoints(event.target.value);
    }
    const [opoints, setopoints] = useState('');
    const handleChange4 = event => {
        setopoints(event.target.value);
    }
    const navigate = useNavigate();
    const doStuff = event => navigate('/log');
    return(
        <div className="matchPage">
            <div className="matchheader">
                <h1>Add New Match</h1>
            </div>
            <div className="matchdescription">
                <h2>Enter the following information to add a new match to your log!</h2>
            </div>
            <div className="opponentNameTitle"><h2>Opponent Name:</h2></div>
            <div className="opponent">
                <form className="opponentSearch">
                    <input type="text" className="borders" placeholder="Enter Opponent Name..." id="opponentName" onChange={handleChange1} value={oname}/>
                </form>
            </div>
            <div className="dateTitle"><h2>Date of Match:</h2></div>
            <div className="dateofmatch">
                <form className="dateBox">
                    <h1> {date} </h1>
                    <input type="date" onChange={e=>setDate(e.target.value)} id="dom" value={date}/>
                </form>
            </div>
            <div className="userScoreTitle"><h2>Your Score:</h2></div>
            <div className="userScore">
                <form className="userScoreSearch">
                    <input type="text" className="userScoreBorder" placeholder="Enter Your Points..." id="userpoints" onChange={handleChange3} value={upoints}/>
                </form>
            </div>
            <div className="opponentScoreTitle"><h2>Opponent Score:</h2></div>
            <div className="opponentScore">
                <form className="opponentScoreSearch">
                    <input type="text" className="opponentScoreBorder" placeholder="Enter Your Opponent's Points..." id="opponentpoints" onChange={handleChange4} value={opoints}/>
                </form>
            </div>
            <div className="addbutton">
                <button className="btn" onClick={() => {doStuff(); matchAdded(oname, date, upoints, opoints)}}>Add Match</button>
            </div>
        </div>
    );
}

function matchAdded(oname, dom, upoints, opoints) {
    var date1 = dom;
    var opponent1 = oname;
    var score1 = upoints+"-"+opoints;
    array.push({opponent: opponent1, score: score1, dateofmatch: date1});
}

export default Match;