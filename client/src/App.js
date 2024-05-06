// import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/TopBar';
import Home from "./pages/home/Home"
import Single from './pages/single/Single';
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

console.log("launch front-end")

function App() {
  return (
    <>
      <Router>
        <Topbar/>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/write" Component={Write} />
          <Route path="post/:postId" Component={Single}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
