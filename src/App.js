import './App.css';
import Header from "./components/Common/Header/Header"
import Landing from "./components/Auth/Landing"
import Main from "./components/Main/Main"
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <div className="App">
      {
        !auth ? <Header setAuth={setAuth} /> : ''
      }
      {
        auth ? <Main setAuth={setAuth} /> : <Landing />
      }
    </div>
  );
}

export default App;


