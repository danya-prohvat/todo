import express from "express";
import router from "./router.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log("Server started on PORT:" + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
