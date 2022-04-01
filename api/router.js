const router = require("express").Router();
const Contestant = require("./model");

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong",
    message: err.message,
    stack: err.stack,
  });
});

router.get("/", (req, res, next) => {
  Contestant.getContestants()
    .then((contestants) => {
      res.status(200).json(contestants);
    })
    .catch(next);
});

router.get("/:id", (req, res) => {
  Contestant.getById(req.params.id).then((contestant) => {
    if (contestant) {
      res.json(contestant);
    } else {
      res.status(404).json({ message: "contestant not found" });
    }
  });
});

router.post("/new", (req, res) => {
  const contestant = req.body;
  Contestant.insert(contestant).then((contestant) => {
    res.status(201).json(contestant);
  });
});

module.exports = router;
