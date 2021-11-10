import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeforeArriving from './pages/before-arriving'

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/before-arriving" element={ <BeforeArriving /> }> </Route>
          </Routes>
        </Router>
    )
}

export default App;