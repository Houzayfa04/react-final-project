const db = require("../config/db");

exports.createItem = (req, res) => {
  const { title, description } = req.body;
  db.query(
    "INSERT INTO items (title, description, user_id) VALUES (?, ?, ?)",
    [title, description, req.user.id],
    () => res.status(201).json({ message: "Item created" })
  );
};

exports.getItems = (req, res) => {
  db.query("SELECT * FROM items", (err, result) => res.json(result));
};

exports.updateItem = (req, res) => {
  const { title, description } = req.body;
  db.query(
    "UPDATE items SET title=?, description=? WHERE id=?",
    [title, description, req.params.id],
    () => res.json({ message: "Item updated" })
  );
};

exports.deleteItem = (req, res) => {
  db.query("DELETE FROM items WHERE id=?", [req.params.id], () =>
    res.json({ message: "Item deleted" })
  );
};