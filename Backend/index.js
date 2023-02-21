const express = require("express");
const app = express();

const Users = [
  {
    name: "peace",
    email: "peaceyben@gmail.com",
    password: "55555",
  },
];

const cors = require("cors");
app.use(cors());

const data = [
  {
    id: 1,
    name: "kilimanjaro",
    location: "Eket Oron Rood",
  },
];


const generateId = () => {
  const id = Math.max(...data.map((each) => each.id));
  const generatedId = id + 1;
  return generatedId;
};

app.use(express.json());

app.get("/", (request, responds) => {
  responds.send("<h1>Welcome to the Restaurant management API</h1>");
});

//Restaurants Api

app.get("/api/restaurants", (request, responds) => {
  responds.json(data);
});

app.post("/api/restaurants", (request, response) => {
  const restaurant = request.body;
  if (!restaurant.name || !restaurant.location) {
    return response.status(400).json({
      error: "content Missing",
    });
  } else {
    const content = {
      id: generateId(),
      name: restaurant.name,
      location: restaurant.location,
    };
    data.push(content);
    response.json(content);
  }
});

//Users section

app.get("/api/restaurants/users", (request, responds) => {
  responds.json(Users);
});

app.post("/api/restaurants/users", (request, response) => {
  const user = request.body;
  const content = {
    id: generateId(),
    name: user.name,
    email: user.email,
    password: user.password,
  };
  const existingEmail = Users.find((user) => user.email === content.email);
  if (existingEmail) {
    response.send("email already exists");
    console.log("email already exists");
  } else {
    response.send("successful bitches");
    Users.push(content);
    console.log(Users);
  }
});

// app.get("/api//restaurants/users/name=name&&email=email");

const port = 3002;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
