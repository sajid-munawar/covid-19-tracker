
import './App.css';
import {NavBar , InfoPanel,CountryTable} from "./Components"
import covid from "./covid.jpg";


function App() {
  return (
    <div>
       <NavBar/>
       <img src={covid} alt="covid-19" className="img" />
        <InfoPanel/>
        {/* <Country/> */}
        <CountryTable/>
    </div>
  );
}

export default App;
