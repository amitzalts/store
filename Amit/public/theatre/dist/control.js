"use strict";
exports.__esModule = true;
var seatsModel_1 = require("../../API/seats/seatsModel");
function handleSeatsPicking(_rowNumber, _seatNumber) {
    try {
        var seat = {
            rowNumber: _rowNumber,
            seatNumber: _seatNumber,
            status: {
                type: string,
                "enum": seatsModel_1.seatStatus.FREE,
                "default": seatsModel_1.seatStatus.FREE
            }
        };
        console.log("seat", seat);
    }
    catch (error) {
        console.error(error);
    }
}
