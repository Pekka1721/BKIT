import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Services from './Components/Services/services'
import About from './Components/About/about'
import Contact from './Components/Contact/contact'

function App() {
  return (
    <>
    <Router>
  <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/services' element={<Services/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element ={<Contact/>}/>
        </Routes>
      </Layout>
    </Router>
    
    </>
  )
}

export default App
