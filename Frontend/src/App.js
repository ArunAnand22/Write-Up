import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar';
import Settings from './Pages/Settings/Settings';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Login from './Pages/Login/login'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'

function App() {
  const user=false;
  return (
    <>
    <Router>
      <Topbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={user ? <Home/> : <Register/>}/>
        <Route path='/login' element={user ? <Home/> : <Login/>}/>
        <Route path='/write' element={user ? <Write/> : <Register/>}/>
        <Route path='/post/:singleId' element={<Single/>}/>
        <Route path='/settings' element={user ? <Settings/> : <Register/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
