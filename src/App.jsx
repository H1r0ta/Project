// import ArrowBtn from "./components/ArrowBtn"
// import Input1 from "./components/Input1"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/accounts'></Route>
        <Route></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
