// import CharacterList from './components/CharacterList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import DetailCharacter from './pages/DetailCharacter'




function App() {

  return (
    <Router>
      <Routes>
        <Route path='/maxibusi1991.github.io/' element={<HomePage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/detailCharacter/:id' element={<DetailCharacter/>} />
      </Routes>
    </Router>
  )
}

export default App