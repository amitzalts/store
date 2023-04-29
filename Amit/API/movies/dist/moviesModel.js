"use strict";
exports.__esModule = true;
exports.MovieSeatModel = exports.MovieSeatSchema = exports.MovieSchema = void 0;
var mongoose_1 = require("mongoose");
var seatsModel_1 = require("../seats/seatsModel");
exports.MovieSchema = new mongoose_1.Schema({
    name: String
});
exports.MovieSeatSchema = new mongoose_1.Schema({
    movie: exports.MovieSchema,
    seat: seatsModel_1.SeatSchema
});
var MovieModel = mongoose_1["default"].model("movies", exports.MovieSchema);
exports["default"] = MovieModel;
exports.MovieSeatModel = mongoose_1["default"].model("movie-seats", exports.MovieSeatSchema);
