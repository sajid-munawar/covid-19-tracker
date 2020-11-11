
import './App.css';
import {NavBar , InfoPanel, Country} from "./Components"
import covid from "./covid.jpg";


function App() {
  return (
    <div>
       <NavBar/>
       <img src={covid} alt="covid-19" className="img" />
        <InfoPanel/>
        <Country/>
    </div>
  );
}

export default App;
