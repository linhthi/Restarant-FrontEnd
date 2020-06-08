import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MenuPage from '././pages/MenuPage';
import OrderPage from './pages/OrderPage';
import PersonalPage from './pages/PersonalPage';
import HomePage from './pages/Homepage';
import PromotionPage from './pages/PromotionPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/menu" component={MenuPage} />
        <Route path="/promotions" component={PromotionPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/personal" component={PersonalPage} />
        <Route path="/" exact component={HomePage} />
      </div>
      </Router>
  );
}

export default App;
