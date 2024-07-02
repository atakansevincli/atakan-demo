const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const message = req.query.message || "FEATURE-2!";
  res.json({ message });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
