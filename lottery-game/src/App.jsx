import './App.css'
import Lottery from './Lottery'
import TicketNum  from './TicketNum'
import Ticket from './Ticket'

function App() {

  return (
   <div>
    <Lottery n={5} winSum={23}/>
   </div>
  )
}

export default App
