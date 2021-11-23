import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeforeArrival from './pages/before-arrival'
import BookingPage from './pages/booking-page';
import OnArrival from './pages/on-arrival';
import OnReturn from './pages/on-return';
import WhileKayaking from './pages/while-kayaking';


const App = () => {
    return (
        <Router>
          <div className="app">
          <Routes>
            <Route path="/" element={ <BookingPage />} exact />
            <Route path="/before-arrival" element={ <BeforeArrival /> } exact />
            <Route path="/on-arrival" element={ <OnArrival /> } exact />
            <Route path="/while-kayaking" element={ <WhileKayaking /> } exact />
            <Route path="/on-return" element={ <OnReturn /> } exact />
          </Routes>
          </div>
        </Router>
    )
}

export default App;