import { useState } from "react"; 
import Ticket from "./Ticket";
import { sum, genTicket } from "./helper";

export default function Lottery({n=3, winSum=15}){

    let [ticket, setTicket] = useState (genTicket(n));
    let isWinning = sum(ticket) === winSum;

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <h2>{isWinning && "Congratulations you won!!"}</h2>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy Ticket</button>
        </div>
    )
}