const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    const rstream = fs.createReadStream("streamData.txt");
    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on("end", () => {
        res.end();
    });
    rstream.on("error", (err) => {
        console.log(err);
        res.end();
    });
});
server.listen(4000, "127.0.0.1");