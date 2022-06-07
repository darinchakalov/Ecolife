const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: [4, "Product name should be at least 4 characters long"],
		},
		price: {
			type: Number,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
			min: [1, "Quantity cannot be less than 1"],
			max: [100, "Quality cannot be more than 100"],
		},
		imgUrl: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
			minlength: [10, "Description cannot be less than 10 characters"],
			maxlength: [100, "Description cannot be more than 100 characters"],
		},
		userId: {
			type: ObjectId,
			ref: "User",
		},
	},
	{ timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Product", productSchema);
