"use strict";
exports.__esModule = true;
exports.OrderSchema = void 0;
var mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.Schema({
    userId: String,
    movieId: String,
    seatIds: [String]
});
var OrderModel = mongoose_1["default"].model("orders", exports.OrderSchema);
exports["default"] = OrderModel;
