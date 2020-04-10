const express = require("express");
const actionsDb = require("../data/helpers/actionModel");
const router = express.Router();

router.get("/", (req, res) => {
    actionsDb.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(400).send("Error no data returned")
    })
})

router.get("/:id", (req, res) => {
    actionsDb.get(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(200).json({
            error : "Error retrieving the id.. try again in a few minutes"
        })
    })
})

router.post("/", (req, res) => {
    actionsDb.insert(req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(400).json({
            error : "error adding action"
        })
    })
})

router.put("/:id", (req, res) => {
    actionsDb.update(req.params.id, req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(400).json({
            error : "Trouble updating action"
        })
    })
})

router.delete("/:id", (req, res) => {
    actionsDb.remove(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(400).json({
            error: "Did not delete..."
        })
    })
})

module.exports = router;