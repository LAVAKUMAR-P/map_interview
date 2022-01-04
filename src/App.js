import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Submit from './Components/Submit';
import Add from './Components/Add';

function App() {
  return (
   <>
   <Router>
     <Routes>
       <Route path="/" element={<Home/>} exact={true}/>
       <Route path="/submit" element={<Submit/>} exact={true}/>
       <Route path="/add" element={<Add/>} exact={true}/>
     </Routes>
   </Router>
   </>
  );
}

export default App;
