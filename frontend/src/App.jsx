import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import RickAndMorty from './pages/Rick-and-Morty'
import Home from './pages/Home'
import Users from './Users'
import CreateUser from './Users/create'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/create/user' element={<CreateUser/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
