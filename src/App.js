
import './App.css';
import { Routes,Route } from 'react-router-dom';
import FirstCom from './Components/FirstCom';
import SecondCom from './Components/SecondCom';
import ThirdCom from './Components/ThirdCom';
import FourthCom from './Components/FourthCom';
import Navbar from './Components/Navbar';

function App() {
  
  
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/index' element={<FirstCom/>}/>
      <Route path='/products' element={<SecondCom/>}/>
      <Route path='/cart' element={<ThirdCom/>}/>
      <Route path='/about' element={<FourthCom/>}/>
    </Routes>
    </div>


  );
}

export default App;
