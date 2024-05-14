import dotenv from "dotenv";
import express from "express";
import router from "./Routes/route.js";
import authenticate from "./Routes/authenticate.js"

(async function () {
  dotenv.config();

  const { PORT } = process.env;
  const app = express();
  const server = app.listen(PORT, () =>
    console.log(`Backend started on port ${PORT}`)
  );
app.use('/vegetables',authenticate,router )
})();