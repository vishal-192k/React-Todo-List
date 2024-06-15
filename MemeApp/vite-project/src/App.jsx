import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from './pages/Home';

function App() {
 

  return (
    <div className='container'>
      <h1>Memes</h1>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  )
}

export default App
