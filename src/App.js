import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";
import Login from "./components/login";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="App">
      <Menu/>
        <Login/>
        <Posts/>
      <CreatePost/>
    </div>
  );
}

export default App;
