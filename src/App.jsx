import './App.css'
import Header from './Componentes/Header'
import Sidebar from "./Componentes/Sidebar"
import ListaPersonajes from './Componentes/Todos'

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <ListaPersonajes/>
    </div>
  )
}
export default App