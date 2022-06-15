import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/'
import Portfolio from './Pages/portfolio';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/portfolio' element={<Portfolio />} exact />
      </Routes>
    </Router>
  );
}

export default App;
