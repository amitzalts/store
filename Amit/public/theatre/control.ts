import { Seat } from "../../API/seats/seatsModel"




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
        console.error(error)
        return undefined
    }
}

async function handleAddOrder(){
    try {
        //user//
        const userResponse = await fetch('/api/users/get-user')
        const userData = await userResponse.json()
        const {user} = userData
        console.log("user", user)
        if(!user) throw new Error("user not found")

        //movie//
        const movieResponse = await  fetch('/api/movies/get-one-movie')
        const movieData = await movieResponse.json()
        const {movie} = movieData
        console.log("movie", movie)
        if(!movie) throw new Error("movie not found")

        //seats//
        const seatsResponse = await fetch('/api/seats/get-picked-seats')
        const seatsData = await seatsResponse.json()
        const {seats} = seatsData
        console.log("seats", seats)
        if(!seats) throw new Error("seats not found")
       
        const order = {user, movie, seats}

        fetch("/api/orders/create-order", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              renderTakenSeats(seats)
            })
            .catch((error) => {
              console.error(error)
            });
    } catch (error) {
        console.error(error)  
    }
}