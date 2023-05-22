import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "./redux/app/features/counter/counterSlice";
import {
  stringAdil,
  stringCustom,
  stringFatih,
} from "./redux/app/features/testString/testStringSlice";
import { getCountries } from "./redux/app/features/countries/countriesSlice";

function App() {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state));
  const { counter } = useSelector((state) => state.counter);
  const { testString } = useSelector((state) => state.testString);
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="App">
      <span onClick={() => dispatch(decrement())}>-</span>
      <h1>{counter}</h1>
      {/* <Home counter={counter} /> */}
      <span onClick={() => dispatch(increment())}>+</span>
      <hr />
      <h1>{testString}</h1>
      <span onClick={() => dispatch(stringAdil())}>Adil</span>
      <span onClick={() => dispatch(stringFatih())}>Fatih</span>
      <span onClick={() => dispatch(stringCustom("Selim"))}>Custom</span>
      <hr />
      <div>
        <ul>
          {countries.length > 0 ? (
            countries.map((c) => {
              return <li>{c.name.official}</li>;
            })
          ) : (
            <p>loading....</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
