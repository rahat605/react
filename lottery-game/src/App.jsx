import './App.css'
import Lottery from './Lottery'
import TicketNum  from './TicketNum'
import Ticket from './Ticket'

function App() {

  return (
   <div>
    <Lottery n={3} winSum={15}/>
   </div>
  )
}

export default App
