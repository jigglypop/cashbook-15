import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import path from "path";
import { sequelize } from "./models";
import templateRouter from "./router/template";

config();
sequelize.sync();
const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);
app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(templateRouter)
app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
