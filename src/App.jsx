import './App.css'
import CharactersList from './Componentes/AllCharacters'
import Header from './Componentes/Header'
import Sidebar from "./Componentes/Sidebar"

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <CharactersList/>
    </div>
  )
}
export default App