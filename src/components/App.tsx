import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import QuasigroupInput from './home/QuasigroupInput';
import '../css/App.css';
import Header from './home/Header';
import Home from './home/Home';
import Results from './results/Results';

const App = () => {
  const [translation, setTranslation] = useState(false);
  const [permut, setPermut] = useState<number[]>();
  const [elements, setElements] = useState<number[][]>();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home translation={translation} setTranslation={setTranslation} setPermut={setPermut} setElements={setElements} />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </Router>

      {/* <Header translation={translation} setTranslation={setTranslation} />
      <QuasigroupInput size={5} translation={translation} setPermut={setPermut} setElements={setElements} /> */}
    </div>
  );
}

export default App;
