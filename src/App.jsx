// import ArrowBtn from "./components/ArrowBtn"
// import Input1 from "./components/Input1"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/accounts'></Route>
        <Route path="/page/:id" element={<Page1/>}/>
        <Route path="/page/card/:id" element={<Page2/>}/>
        <Route path="/spray-finishes" element={<Page3/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
