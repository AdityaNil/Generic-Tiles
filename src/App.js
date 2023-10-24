import React from 'react'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Data from './pages/Data/Data';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  )
}

export default App