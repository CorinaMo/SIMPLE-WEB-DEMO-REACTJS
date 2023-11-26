import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GamePairs, Home } from './pages';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/pairs' element={<GamePairs />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
