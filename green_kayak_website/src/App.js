import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeforeArrival from './pages/before-arrival'
import LandingPage from './pages/booking-page';
import OnArrival from './pages/on-arrival';


const App = () => {
    return (
        <Router>
          <div className="app">
          <Routes>
            <Route path="/" element={ <LandingPage />} exact />
            <Route path="/before-arrival" element={ <BeforeArrival /> } exact />
            <Route path="/on-arrival" element={ <OnArrival /> } exact />
          </Routes>
          </div>
        </Router>
    )
}

export default App;