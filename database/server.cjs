// import jsonServer from "json-server";
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.delete("/tasks", (req, res) => {
    const { boardId } = req.query;
    const db = router.db;

    db.get("tasks").remove({ boardId: boardId }).write();

    res.sendStatus(200);
});

server.use(router);

server.listen(8080, () => {
    console.log("JSON server is running");
});
