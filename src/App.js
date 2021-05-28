import Countries from './Countries';
import './App.css';
import {useState} from "react";


function App() {

    const [filter, setFilter] = useState();

    const filteredCountries = [];


    function onChangeHandler (e) {
        setFilter(e.target.value);
    }

    if(filter) {
        for(let i = 0; i < Countries.length; ++i){
            if(Countries[i].name.includes(filter)){
                filteredCountries.push(Countries[i]);
            }
        }
    }

    // function outputCountries () {
    //     if(filteredCountries.length = 0) {
    //         return (
    //             <ul className={"countryList"}>
    //                 {
    //                     Countries.map((item) => <li className={"singleCountry"} key={item.code}>{item.name}</li>)
    //                 }
    //             </ul>
    //         )
    //     } else {
    //         return (
    //             <ul className={"countryList"}>
    //                 {
    //                     filteredCountries.map((item) => <li className={"singleCountry"} key={item.code}>{item.name}</li>)
    //                 }
    //             </ul>
    //         )
    //     }
    // }


  return (
    <div className="App">
      <h1>Filtered list</h1>
      <input type="text" className={"search"} placeholder={"Filter ..."} onChange={onChangeHandler}/>
        <ul className={"countryList"}>
            {
                filteredCountries.length === 0 ?
                    Countries.map((item) => <li className={"singleCountry"} key={item.code}>{item.name}</li>):
                    filteredCountries.map((item) => <li className={"singleCountry"} key={item.code}>{item.name}</li>)
            }
        </ul>
    </div>
  );
}

export default App;
