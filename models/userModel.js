const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    profilePic: String,
    role: String,
  },
  {
    timestamps: true,
  }
);

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  orderState: {
    type: String,
    default: "Processing",
  },
});

const userModel = mongoose.model("ecommerce_users", userSchema);
const orderModel = mongoose.model("orderdetails", orderSchema);

module.exports = {userModel, orderModel};
