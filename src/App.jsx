import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Time from './components/time/Time';
import Schedule from './components/schedule/Schedule';
import Loading from './components/helper/loading/Loading';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/time" element={<Time />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/load" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
