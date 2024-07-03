const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let word1;
let word2;
let word3;
let word4;
let word5;

app.get("/first-word", (req, res) => {
  res.send(`<form method="POST" action="second-word">
        <label for="adjective">How are you feeling today?</label>
        <input type="text" name="adjective" id="adjective" />
        <button type="submit">Submit</button>
    </form>`);
});

app.post("/second-word", (req, res) => {
  word1 = req.body.adjective;
  res.send(`<form method="POST" action="third-word">
        <label for="noun">What is your favorite food?</label>
        <input type="text" name="noun" id="noun" />
        <button type="submit">Submit</button>
    </form>`);
});

app.post("/third-word", (req, res) => {
  word2 = req.body.noun;
  res.send(`<form method="POST" action="fourth-word">
        <label for="noun">What is your favorite place?</label>
        <input type="text" name="noun" id="noun" />
        <button type="submit">Submit</button>
    </form>`);
});

app.post("/fourth-word", (req, res) => {
  word3 = req.body.noun;
  res.send(`<form method="POST" action="fifth-word">
        <label for="noun">Who is your favorite person?</label>
        <input type="text" name="noun" id="noun" />
        <button type="submit">Submit</button>
    </form>`);
});

app.post("/fifth-word", (req, res) => {
  word4 = req.body.noun;
  res.send(`<form method="POST" action="done">
        <label for="verb">What did you do last week?</label>
        <input type="text" name="verb" id="verb" />
        <button type="submit">Submit</button>
    </form>`);
});

app.post("/done", (req, res) => {
  word5 = req.body.verb;
  res.redirect("/story");
});

app.get("/story", (req, res) => {
  res.send(
    `<p>I had a very ${word1} day today! I ate ${word2} at ${word3} with ${word4}. After we finished eating, we ${word5}.</p>
    <a href="/reset"><button>Reset</button></a>`
  );
});

app.get("/reset", (req, res) => {
  word1 = "";
  word2 = "";
  word3 = "";
  word4 = "";
  word5 = "";
  res.redirect("/");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
