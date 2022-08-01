const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const mustacheExpress = require("mustache-express");

// Import Routes
const foodsRoutes = require('./routes/foods');
const creativeRoutes = require('./routes/creative');
const businessRoutes = require('./routes/business');
const appleRoutes = require('./routes/apple');
const portfolioRoutes = require("./routes/portfolio");

// Mustache and Static Files Setup
const VIEWS_PATH = path.join(__dirname, "/views");
app.use("/static", express.static("static"));
app.use(express.json());
app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/foods', foodsRoutes);
app.use('/creative', creativeRoutes);
app.use('/business', businessRoutes);
app.use('/apple', appleRoutes);
app.use('/portfolio', portfolioRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
