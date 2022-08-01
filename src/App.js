import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Searched from './pages/Searched';
import ToNetFlix from './pages/ToNetFlix';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/searched/:search'element={<Searched/>}/>
      <Route path='/redirect' element={<ToNetFlix/>}/>
    </Routes>
      
    </AuthContextProvider>
    </>
  );
}

export default App;
