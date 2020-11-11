
import './App.css';
import {NavBar , InfoPanel} from "./Components"
import covid from "./covid.jpg";


function App() {
  return (
    <div>
       <NavBar/>
       <img src={covid} alt="covid-19" className="img" />
        <InfoPanel/>
    </div>
  );
}

export default App;
