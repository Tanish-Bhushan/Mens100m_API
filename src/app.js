const express = require("express");
const router = require("../src/routers/men");
require("./db/conn");

const app = express();
app.use(express.json());
app.use(router);
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Connected at port ${port}`);
});
