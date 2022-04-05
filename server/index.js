const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "<User>",
  host: "localhost",
  password: "<password>",
  database: "<DataBase>"
});

app.post("/create", (req, res) => {
  const product_name = req.body.product_name;
  const product_description = req.body.product_description;
  const product_image = req.body.product_image;
  const dept = req.body.dept;
  const product_price = req.body.product_price;

  db.query(
    "INSERT INTO products (product_name, product_description, product_image, dept, product_price) VALUES (?,?,?,?,?)",
    [product_name, product_description, product_image, dept, product_price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/trading_cards", (req, res) => {
  db.query("SELECT * FROM products WHERE dept = 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/figures", (req, res) => {
  db.query("SELECT * FROM products WHERE dept = 2", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/plushies", (req, res) => {
  db.query("SELECT * FROM products WHERE dept = 3", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/video_games", (req, res) => {
  db.query("SELECT * FROM products WHERE dept = 4", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/consoles", (req, res) => {
  db.query("SELECT * FROM products WHERE dept = 5", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const product_price = req.body.product_price;
  db.query(
    "UPDATE products SET product_price = ? WHERE id = ?",
    [product_price, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM products WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
