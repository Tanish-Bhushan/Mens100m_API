const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const adduser = new MensRanking(req.body);
    const addeduser = await adduser.save();
    res.status(201).send(addeduser);
  } catch (err) {
    res.status(400).send(err);
  }
});
//all data
router.get("/mens", async (req, res) => {
  try {
    const showuser = await MensRanking.find({}, { _id: 0, __v: 0 }).sort({
      ranking: 1,
    });
    res.status(200).send(showuser);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/mens/:rank", async (req, res) => {
  try {
    const rank = req.params.rank;
    const showuser = await MensRanking.findOne(
      { ranking: rank },
      { _id: 0, __v: 0 }
    );
    res.status(200).send(showuser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/mens/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const data = req.body;
    const updateduser = await MensRanking.findByIdAndUpdate(_id, data, {
      new: true,
    });
    res.status(201).send(updateduser);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/mens/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const updateduser = await MensRanking.findByIdAndDelete(_id);
    res.status(201).send(updateduser);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
