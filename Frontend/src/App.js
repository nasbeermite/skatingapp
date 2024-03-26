import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import Details from './components/Details';
import AfterPayment from './components/Payment/AfterPayment';
import Header from './frontend_components/Header';
import Footer from './frontend_components/Footer';
import UserDetails from './components/UserDetails/UserDetails';
import Login from './components/Login';


const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);


function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/details" element={<MainLayout><Details /></MainLayout>} />
          <Route path="/user" element={<MainLayout><UserDetails /></MainLayout>} />
          <Route path="/payment" element={<MainLayout><AfterPayment /></MainLayout>} />



          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
