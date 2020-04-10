const express = require("express");
const projectDb = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", (req, res) => {
    projectDb.get()
    .then(post => {
        res.status(200).json(post)
    })
    .catch(err => {
        res.status(400).send("Error no data returned")
    })
})

router.get("/:id", (req, res) => {
    projectDb.get(req.params.id)
    .then(proj => {
        res.status(200).json(proj)
    })
    .catch(err => {
        res.status(400).json({
            error : "Did not retrieve id"
        })
    })
})

router.post("/", (req, res) => {
    projectDb.insert(req.body)
    .then(proj => {
        res.status(200).json(proj)
    })
    .catch(err => {
        res.status(400).json({
            error : "Trouble posting project..."
        })
    })
})

router.put("/:id", (req, res) => {
    projectDb.update(req.params.id, req.body)
    .then(proj => {
        res.status(200).json(proj)
    })
    .catch(err => {
        res.status(400).json({
            error : "Trouble updating item..."
        })
    })
})

router.delete("/:id", (req, res) => {
    projectDb.remove(req.params.id)
    .then(proj => {
        res.status(200).json(proj)
    })
    .catch(err => {
        res.status(400).json({
            error : "Did not delete project"
        })
    })
})

router.get("/:id/actions", (req, res) => {
    projectDb.getProjectActions(req.params.id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(200).json({
            error : "Trouble getting project actions"
        })
    })
})

module.exports = router;
