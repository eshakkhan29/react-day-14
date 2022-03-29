import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Countries from "./components/Countries/Countrys";
import Header from "./components/Header/Header";
import Country from "./components/Country/Country";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Countries" element={<Countries></Countries>}></Route>
        <Route path="/Countries/:name" element={<Country></Country>}>
          <Route
            path="/Countries/:name/details"
            element={<CountryDetails></CountryDetails>}
          ></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
