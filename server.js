const express = require("express");
const projectsRouter = require("./projects/projectsRouter");
const actionsRouter = require("./actions/actionsRouter");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
    res.status(200).send("Server Running!")
})

module.exports = server;