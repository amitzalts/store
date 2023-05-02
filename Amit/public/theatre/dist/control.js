"use strict";
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
