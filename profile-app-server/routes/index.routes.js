const express = require("express")
const router = express.Router()

const User = require("../models/User.model")
const fileUploader = require("../config/cloudinary.config")


router.get("/users", (req, res, next) => {

  const userId = req.payload._id

  User
    .findById(userId)
    .then(foundUser => {
      const { _id, username, campus, course, image } = foundUser
      const resPayload = { _id, username, campus, course, image }
      res.json(resPayload)
    })
    .catch(err => next(err))
})

router.put("/users", (req, res, next) => {

  const { image } = req.body
  const { _id } = req.payload

  if (!image) {
    res.status(400).send("No file uploaded!")
  }

  User
    .findByIdAndUpdate(_id, { image })
    .then(foundUser => {
      const { _id, username, campus, course, image } = foundUser
      const resPayload = { _id, username, campus, course, image }
      res.json(resPayload)
    })
    .catch(err => next(err))

})

router.post("/upload", fileUploader.single("image"), (req, res, next) => {

  if (!req.file) {
    res.status(400).send("No file uploaded!")
  }

  res.json({ image: req.file.path })
})

module.exports = router