import "./App.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          // let sortedData = sortData(data);
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  return (
    <div className="App">
      <div className="app__header">
      <h1>COVID-19 TRACKER APP</h1>
      <FormControl className="app__dropdown">
        <Select varient="outlined" value="abc">
          {/* Looping through country names */}
          {countries.map(country => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}


          {/* <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem> */}
        </Select>
      </FormControl>
      </div>

      {/* Headers */}
      {/* Title + Select Dropdown */}

      {/* Info boxes */}
      {/* Info boxes */}
      {/* Info boxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
