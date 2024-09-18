const fs = require("fs");

const template = fs.readFileSync("index.html", "utf-8");
const bookmarklet = fs.readFileSync("build/bookmarklet.js", "utf-8").trim();
const templated = template.replace(/\{\{bookmarklet\}\}/g, bookmarklet);
fs.writeFileSync("build/index.html", templated);
