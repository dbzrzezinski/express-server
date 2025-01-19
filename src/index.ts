import express, { Request, Response } from "express";
import { faker } from "@faker-js/faker";
import "dotenv/config";
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Get a random user
app.get("/api/user", (req: Request, res: Response) => {
  const user = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    address: faker.location.streetAddress(),
    bio: faker.person.bio(),
  };
  res.json(user);
});

// Get a list of random products
app.get("/api/products", (req: Request, res: Response) => {
  const count = parseInt(req.query.count as string) || 5;
  const products = Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.url(),
  }));
  res.json(products);
});

// Get a random company
app.get("/api/company", (req: Request, res: Response) => {
  const company = {
    id: faker.string.uuid(),
    name: faker.company.name(),
    catchPhrase: faker.company.catchPhrase(),
    address: faker.location.streetAddress(),
    website: faker.internet.url(),
    phone: faker.phone.number(),
  };
  res.json(company);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
