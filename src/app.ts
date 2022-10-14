import express from "express";
import "express-async-errors";

const app = express();

app.get("/username", (request, response) => {
    response.json([{ name: "Marco" }]);
});

export default app;
