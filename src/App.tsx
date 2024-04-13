import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Asking from './components/asking'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Asking />} />
      </Routes>
    </Router>
  );
}

export default App
