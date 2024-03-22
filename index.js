const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { PORT, CORS_ORIGIN } = process.env;
const allowedOrigins = CORS_ORIGIN;
const port = PORT || 5051;

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());



const searchRoutes = require("./routes/search");


// All routes
app.use("/api", searchRoutes);





app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});