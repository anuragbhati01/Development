const express = require("express");
const router = express.Router();

// Post Routes
// Index Route 
router.get("/", (req, res) => {
    res.send("GET for Index route")
});

// Show Route
router.get("/:id", (req, res) => {
    res.send("GET for Show post")
});

// Post (Create) Route
router.post("/", (req, res) => {
    res.send("Post for posts")
});

// Delete Route
router.delete("/:id", (req, res) => {
    res.send("Delete for posts")
});

module.exports = router;