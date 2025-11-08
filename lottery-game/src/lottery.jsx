import { useState } from "react";
import "./lottery.css";  
import { genTicket } from "./helper";
import { sum } from "./helper";

export default function Lottery(){

    let [ticket, setTicket] = useState (genTicket(5));
    let isWinning = sum(ticket) === 22;

    let buyTicket = ()=>{
        setTicket(genTicket(5));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
             <h2>{isWinning && "Congratulations you won!!"}</h2>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
                <span>{ticket[3]}</span>
                <span>{ticket[4]}</span>
            </div>
            <button onClick={buyTicket}>Buy Ticket</button>
        </div>
    )
}