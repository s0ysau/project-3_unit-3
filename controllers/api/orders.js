// const Order 
/*
module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  history
};

// function for a cart that is an unpaid order  
const cart = async (req, res) => {
  try {
    const cart = await Order.getCart(req.user._id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({msg: error.message})
  }
}

// function to add item to cart 
const addToCart = async (req, res) => {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id)
    res.status(200).json(cart)
  } catch (error) {
    res.status(400).json({msg: error.message})
  }
}

// function to update an item's qty in the cart 
const setItemQtyInCart = async (req, res) => {
  try {
    const cart = await Order.getCart(req.user._id)
    await cart.setItemQty(req.body.itemId, req.body.newQty)
    res.status(200).json(cart)
  } catch (error) {
    res.status(400).json({msg: error.message})
  }
}

// function to update the cart's isPaid property to true
const checkout = async (req, res) => {
  try {
    const cart = await Order.getCart(req.user._id)
    cart.isPaid = true;
    await cart.save()
    res.status(200).json(cart)
  } catch (error) {
    res.status(400).json({msg: error.message})
  }
}

// return the logged in user's paid order history 
const history = async (req, res) => {
  try {
    const orders = await Order
      .find({user: req.user._id, isPaid: true})
      .sort('-updatedAt').exec()
    res.status(200).json(orders)
  } catch (error) {
    res.status(400).json({msg: error.message})
  }
}
*/