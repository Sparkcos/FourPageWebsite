import Home from './components/Home'
import Jinping from './components/Jinping'
import Jintao from './components/Jintao'
import Zemin from './components/Zemin'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Jinping' element={<Jinping/>}></Route>
          <Route path='/Jintao' element={<Jintao/>}></Route>
          <Route path='/Zemin' element={<Zemin/>}></Route>
        </Routes>
    </>
  );
}

export default App;
