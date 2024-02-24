import express, { Express } from "express";
import router from "./routes";

const app: Express = express();
const port: number = 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(port, () => console.log(`Application is running on port ${port}`));
