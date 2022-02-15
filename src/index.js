import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./containers/Home";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(renderToString(<Home />));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
