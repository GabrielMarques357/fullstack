import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import RickAndMorty from './pages/Rick-and-Morty'
import Home from './pages/Home'
import Users from './Users'
import CreateUser from './Users/create'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './auth/Context'
import PrivateRoute from './router/PrivateRoute'

function App() {

  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoute />}>
        
          <Route path='/users' element={<Users/>} />
          <Route path='/create/user' element={<CreateUser/>} />
          
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}
      />

      <Footer />
    </AuthProvider>
  )
}

export default App
