const express = require("express");
const basicAuth = require("express-basic-auth");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

// here we are configuring dist to serve app files
app.use(basicAuth({
	challenge: true,
	users: { 'ProjectRCM': 'DrizztMeme' }
}));
app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.disable("x-powered-by");

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (_req, res) {
	res.sendFile(path.join(__dirname, "/dist/index.html"))
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);