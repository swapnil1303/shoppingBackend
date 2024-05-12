const { orderModel } = require("../../models/userModel");

async function insertOrderDetails(req, res) {
  try {
    const { data } = req.body;
    const details = await orderModel.create({data});

    res.status(201).json({
      data: details,
      success: true,
      error: false,
      message: "Order Placed Successfully!",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = insertOrderDetails;
