import './App.css';
// import './assests/css/bootstrap.min.css'
import './assests/css/bootstrap.min4.css';
import Landing from './pages/Landing';
import EnterKey from './pages/EnterKey';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<EnterKey />} />
          <Route path="/chat" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
