import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Signup from "./Components/Pages/Signup";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={Signup} />
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  )
}

export default App
