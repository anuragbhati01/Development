const express = require("express");
const router = express.Router();

// Users Routes
// Index Route 
router.get("/", (req, res) => {
    res.send("GET for Index route")
});

// Show Route
router.get("/:id", (req, res) => {
    res.send("GET for Show users")
});

// Post (Create) Route
router.post("/", (req, res) => {
    res.send("Post for users")
});

// Delete Route
router.delete("/:id", (req, res) => {
    res.send("Delete for users")
});

module.exports = router;