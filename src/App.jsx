import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import { originals, actions } from './urls'

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Nelfix Originals"/>
      <RowPost url={actions} title="Action" isSmall/>
    </>
  )
}

export default App
