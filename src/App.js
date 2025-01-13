import './App.css';
import Form from './Components/Form';
import Formupdate from './Components/Formupdate';
import Completedpage from './Components/Completedpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <div><h1>User Details</h1></div><br></br>
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Form/>}/>
            <Route path="/Formupdate/:id" element={<Formupdate/>}/>
            <Route path="/Completedpage" element={<Completedpage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
