const addToCartModel = require("../../models/cartProduct");

const deleteAddToCartProduct = async (req, res) => {
  try {
    const currentUserId = req.userId;
    const addToCartProductId = req.body._id;

    const deleteProduct = await addToCartModel.deleteOne({
      _id: addToCartProductId,
    });

    res.json({
      message: "Product Deleted From Cart",
      error: false,
      success: true,
      data: deleteProduct,
    });
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};

const deleteAllCartProduct = async (req, res) => {
  try {
    const currentUser = req.userId;

    const allProduct = await addToCartModel.deleteMany({
      userId: currentUser,
    });

    res.json({
      data: allProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = { deleteAddToCartProduct, deleteAllCartProduct };
