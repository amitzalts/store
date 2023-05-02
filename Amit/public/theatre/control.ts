import { Seat } from "../../API/seats/seatsModel";




function handleSeatsPicking(_rowNumber:string, _seatNumber:string){
    try {
        const seat:any = {
            rowNumber: _rowNumber,
            seatNumber: _seatNumber,
        }

        fetch("/api/seats/pick-one-seat", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({seat}),
          })
            .then((res) => res.json())
            .then(({seatDB}) => {
              renderPickedSeat(seatDB)
            })
            .catch((error) => {
              console.error(error)
            })
    
    } catch (error) {
        console.error(error)
    }
}

function currentMovie() {
    try {
        fetch("/api/movies/get-one-movie") 
            .then((res) => res.json())
            .then(({ movie }) => {
                renderMovieName(movie.name)
            });
    } catch (error) {
        console.error(error);
        return undefined
    }
}