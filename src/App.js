import './App.css';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>

    </div>
    </Router>
  );
}

export default App;
