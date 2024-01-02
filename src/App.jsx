import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import RowPost from './Components/RowPost/RowPost'
import { originals, actions, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries } from './urls'

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Nelfix Originals"/>
      <RowPost url={actions} title="Action" isSmall/>
      <RowPost url={ComedyMovies} title="Comedy" isSmall/>
      <RowPost url={HorrorMovies} title="Horror" isSmall/>
      <RowPost url={RomanceMovies} title="Romance" isSmall/>
      <RowPost url={Documentaries} title="Documentary" isSmall/>
    </>
  )
}

export default App
