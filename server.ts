const express = require("express");
const { exec } = require("child_process");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/playwright-report", express.static("playwright-report"));

app.get("/run-tests", (req, res) => {
  exec("npx playwright test --headed", (error, stdout, stderr) => {
    res.json({
      stdout: stdout,
      stderr: stderr
    });
  });
});

app.listen(port, () => {
  console.log(`Open http://localhost:${port}`);
});