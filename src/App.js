import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';

function App() {
  console.log("app running in production");
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
    </Router>
    </>
  );
}

export default App;
