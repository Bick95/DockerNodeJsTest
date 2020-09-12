const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

app.listen(process.env.PORT || 5060, () => console.log("Server running..."));