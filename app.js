const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
        <header>
            <title>hello</title>
        </header>
        <body>
        <h1>first lesson</h1>
        <p>hello world</p>
</body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
