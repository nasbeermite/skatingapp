import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import Details from './components/Details';
import AfterPayment from './components/Payment/AfterPayment';
import Header from './frontend_components/Header';
import Footer from './frontend_components/Footer';
import UserDetails from './components/UserDetails/UserDetails';
import About from './components/About/About';

function App() {
  return (

    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/payment" element={<AfterPayment />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
