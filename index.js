// server.js
const express = require("express");
const { statesData, citiesData } = require("./data"); // Import the data from data.js

const app = express();
const port = 3001;

app.get("/states", (req, res) => {
  const term = req.query.term.toLowerCase();
  const filteredStates = statesData.filter((state) =>
    state.displayName.toLowerCase().includes(term),
  );
  res.json(filteredStates);
});

app.get("/cities", (req, res) => {
  const stateId = parseInt(req.query.state);
  const term = req.query.term.toLowerCase();
  const filteredCities = (citiesData[stateId] || []).filter((city) =>
    city.displayName.toLowerCase().includes(term),
  );
  res.json(filteredCities);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
