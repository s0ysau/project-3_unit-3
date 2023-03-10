const { Schema, model } = require('mongoose')

const wishlistSchema = new Schema({
  processor: String,
  motherboard: String,
  gpu: String,
  storage: String,
  ram: String,
  powerSupply: String,
  case: String,
  caseFans: String,
  cpuFan: String
},
{
  timestamps: true
})

const Wishlist = model('Wishlist', wishlistSchema)

module.exports = Wishlist
