import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import Data from './pages/Data/Data';

const App = () => {
  return (
    <BrowserRouter>
    <Data />
    </BrowserRouter>
  )
}

export default App