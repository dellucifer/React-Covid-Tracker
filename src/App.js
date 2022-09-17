import "./App.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState(['USA','UK','INDIA'])

  return (
    <div className="App">
      <div className="app__header">
      <h1>COVID-19 TRACKER APP</h1>
      <FormControl className="app__dropdown">
        <Select varient="outlined" value="abc">
          {/* Looping through country names */}
          {countries.map(country => (
            <MenuItem value={country}>{country}</MenuItem>
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
