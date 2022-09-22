import "./App.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useEffect } from "react";
import Infobox from "./Infobox";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Map from "./Map";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

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

  const onChangeCountry = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER APP</h1>
          {/* <FontAwesomeIcon icon="fa-solid fa-virus-covid" /> */}
          <FormControl className="app__dropdown">
            <Select
              varient="outlined"
              value={country}
              onChange={onChangeCountry}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {/* Looping through country names */}
              {countries.map((country) => (
                <MenuItem value={country.value} key={country.name}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <Infobox title="Covid-19 Cases" cases={5000} total={2000} />
          <Infobox title="Recovered" cases={5000} total={1000} />
          <Infobox title="Deaths" cases={5000} total={500} />
        </div>

        {/* Map */}
        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Country wise cases</h3>
          {/* Table */}
          <h3>Worldwide cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
