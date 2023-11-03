import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Time from './components/time/Time';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/time" element={<Time />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
