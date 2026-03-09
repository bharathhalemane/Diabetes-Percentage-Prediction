import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Prediction from "./Pages/Prediction"
import './App.css'
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Prediction/>} />
            </Routes>
        </Router>
    )
}

export default App