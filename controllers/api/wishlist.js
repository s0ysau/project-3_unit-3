const Wishlist = require('../../models/wishlist')

const dataController = {
  // index
  index (req, res, next) {
    Wishlist.find({}, (err, foundWishlistItems) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.wishlistItems = foundWishlistItems
        next()
      }
    })
  },
  // delete
  destroy (req, res, next) {
    Wishlist.findByIdAndDelete(req.params.id, (err, deleteWishlistItem) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.wishlistItem = deleteWishlistItem
      }
    })
  },
  // update
  update (req, res, next) {
    Wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateWishlistItem) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.wishlistItem = updateWishlistItem
      }
    })
  },
  // create
  create (req, res, next) {
    Wishlist.create(req.body, (err, createwishlistItem) => {
      if (err) {
        res.status(400).send({
          msg: message
        })
      } else {
        res.locals.data.wishlistItem = createwishlistItem
      }
    })
  },
  // show
  show (req, res, next) {
    Wishlist.findById(req.params.id, (err, foundWishlistItem) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a product with that ID'
        })
      } else {
        res.locals.data.fruit = foundWishlistItem
        next()
      }
    })
  }
}

const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.wishlistItems)
  },
  show (req, res, next) {
    res.json(res.locals.data.wishlistItem)
  }
}

module.exports = { dataController, apiController }
