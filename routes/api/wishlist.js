const express = require('express')
const router = express.Router()
const {dataController, apiController} = require("../../controllers/api/wishlist")

//GET /api/wishlist
router.get('/wishlist', dataController.index, apiController.index)
//POST /api/wishlist/
router.post('/wishlist/', dataController.create, apiController.show)
//PUT /api/wishlist/:id
router.put('wishlist/:id', dataController.update, apiController.show)
//DELETE /api/wishlist/:id
router.delete('wishlist/:id', dataController.destroy, apiController.show)

module.exports = router