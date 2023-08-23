import { Outlet } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">     
      <Header className="nav" />
      <Outlet />
    </div>
  );
}

export default App;
