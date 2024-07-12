const express = require("express");
const { statesData, citiesData } = require("./data");

const app = express();
const port = process.env.PORT || 3001;

const cors = require("cors");
app.use(cors());

app.get("/states", (req, res) => {
  const term = req.query.term ? req.query.term.toLowerCase() : "";
  const filteredStates = statesData.filter((state) =>
    state.displayName.toLowerCase().includes(term),
  );
  res.json(filteredStates);
});

app.get("/cities", (req, res) => {
  const stateId = parseInt(req.query.state);
  const term = req.query.term ? req.query.term.toLowerCase() : "";
  const filteredCities = (citiesData[stateId] || []).filter((city) =>
    city.displayName.toLowerCase().includes(term),
  );
  res.json(filteredCities);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
