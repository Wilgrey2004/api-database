const express = require("express");
const routerP = require("./routes/routeProgramacion");
const routerM = require("./routes/routeMatematicas");

require("./db/dbconection");

const app = express();

const PUERTO = 3000;

app.use(express.json());
app.use(routerP);
app.use(routerM);

app.listen(PUERTO, () => {
  console.log(
    `El servidor esta corriendo en el puerto http://localhost:${PUERTO}`
  );
});
