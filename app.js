const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const Logger = require("./logger");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
// Sample data to send to the client
const results = [
  { id: 1, name: "Mickey" },
  { id: 2, name: "Minnie" },
  { id: 3, name: "Donald" },
];

const logger = new Logger();

app.get("/api/results", (req, res) => {
  logger.log(results);
  for (let i = 0; i < results.length; i++) {
    logger.add2Help(results[i]);
  }
  logger.log2file();
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

