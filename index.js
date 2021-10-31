const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("My Second Node Js");
});

const users = [
  { id: 0, name: "Najmul", email: "najmul@gmail.com", phone: "01712345678" },
  { id: 1, name: "Ovi", email: "ovi@gmail.com", phone: "01713345678" },
  { id: 2, name: "Juwel", email: "juwel@yahoo.com", phone: "01714345678" },
  { id: 3, name: "Rana", email: "rana@gmail.com", phone: "01715345678" },
  { id: 4, name: "Aslam", email: "aslam@bd.com", phone: "01612345678" },
  { id: 5, name: "Shamim", email: "shamim@gmail.com", phone: "01512345678" },
];

app.get("/users", (req, res) => {
  //use query parameter
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  //   res.send(JSON.stringify(newUser));
  res.json(newUser);
});

//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
