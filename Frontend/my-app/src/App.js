 
import './App.css';
import {useSelector } from "react-redux"
import { AllRoutes } from './AllRoutes/AllRoutes';
import { Navbar } from './Component/Navbar';

function App() {
const state=useSelector(state=>state)
console.log(state)
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
