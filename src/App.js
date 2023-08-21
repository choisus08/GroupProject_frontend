import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Sun from './Sun.json';
import Lottie from "lottie-react"

function App() {
  return (
    <div className="App">
      <Lottie className="sunAnimation" animationData={Sun} />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
