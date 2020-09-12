// Largely followed these two tutorials when creating this code: 
// https://www.youtube.com/watch?v=6BozpmSjk-Y
// https://www.youtube.com/watch?v=OstALBk-jTc

const express = require("express");
const path = require("path");

const app = express();

// Constants
const PORT = 5060;
const HOST = '0.0.0.0';

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

//app.listen(process.env.PORT || 5060, () => console.log("Server running..."));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);