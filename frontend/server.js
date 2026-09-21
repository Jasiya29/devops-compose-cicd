const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>Frontend</h1>
        <p>Docker Compose CI/CD Application</p>
    `);
});

server.listen(3000, () => {
    console.log("Frontend running on port 3000");
});
