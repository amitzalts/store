"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
function handleSeatsPicking(_rowNumber, _seatNumber) {
    try {
        var seat = {
            rowNumber: _rowNumber,
            seatNumber: _seatNumber
        };
        fetch("/api/seats/pick-one-seat", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ seat: seat })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var seatDB = _a.seatDB;
            renderPickedSeat(seatDB);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function currentMovie() {
    try {
        fetch("/api/movies/get-one-movie")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var movie = _a.movie;
            renderMovieName(movie.name);
        });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function handleAddOrder() {
    return __awaiter(this, void 0, void 0, function () {
        var userResponse, userData, user, movieResponse, movieData, movie, seatsResponse, seatsData, seats_1, order, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, fetch('/api/users/get-user')];
                case 1:
                    userResponse = _a.sent();
                    return [4 /*yield*/, userResponse.json()];
                case 2:
                    userData = _a.sent();
                    user = userData.user;
                    console.log("user", user);
                    if (!user)
                        throw new Error("user not found");
                    return [4 /*yield*/, fetch('/api/movies/get-one-movie')];
                case 3:
                    movieResponse = _a.sent();
                    return [4 /*yield*/, movieResponse.json()];
                case 4:
                    movieData = _a.sent();
                    movie = movieData.movie;
                    console.log("movie", movie);
                    if (!movie)
                        throw new Error("movie not found");
                    return [4 /*yield*/, fetch('/api/seats/get-picked-seats')];
                case 5:
                    seatsResponse = _a.sent();
                    return [4 /*yield*/, seatsResponse.json()];
                case 6:
                    seatsData = _a.sent();
                    seats_1 = seatsData.seats;
                    console.log("seats", seats_1);
                    if (!seats_1)
                        throw new Error("seats not found");
                    order = { user: user, movie: movie, seats: seats_1 };
                    fetch("/api/orders/create-order", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(order)
                    })
                        .then(function (res) { return res.json(); })
                        .then(function (data) {
                        console.log(data);
                        renderTakenSeats(seats_1);
                    })["catch"](function (error) {
                        console.error(error);
                    });
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
