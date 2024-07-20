import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import InfoPage from './InfoPage';
import Contacts from './Contacts';

function App() {
  return (
    <div className="App">
      <header>this is Tim's project</header>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <footer className="footer">© 2024</footer>
    </div>
  );
}

export default App;
