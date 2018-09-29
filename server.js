const express = require("express");
const next = require("next");
const cors = require('cors');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const router = require('./api/routes');

app.use(cors());
app.use('/', router);
//커스텀 서버
app
  .prepare()
  .then(() => {
    const server = express().Router;

    server.get("/:id", (req, res) => {
      const actualPage = "/theater";
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
