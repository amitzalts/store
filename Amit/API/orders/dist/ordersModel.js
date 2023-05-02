"use strict";
exports.__esModule = true;
exports.OrderSchema = void 0;
var mongoose_1 = require("mongoose");
var seatsModel_1 = require("../seats/seatsModel");
var moviesModel_1 = require("../movies/moviesModel");
var usersModel_1 = require("../users/usersModel");
exports.OrderSchema = new mongoose_1.Schema({
    user: usersModel_1.UserSchema,
    movie: moviesModel_1.MovieSchema,
    seat: [seatsModel_1.SeatSchema]
});
var OrderModel = mongoose_1["default"].model("orders", exports.OrderSchema);
exports["default"] = OrderModel;
