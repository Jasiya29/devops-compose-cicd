const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({
        message: "Backend is running"
    }));
});

server.listen(4000, () => {
    console.log("Backend running on port 4000");
});
