// function renderSeats(){
//     try {
//      const seatsRoot: HTMLDivElement | null = document.querySelector("#seatsContainerRoot")
//      if(!seatsRoot) throw new Error("seats root not found")
        
//      seatsRoot.innerHTML=`
     
//      `   

//     } catch (error) {
//         console.error(error)
//     }
// }

function renderMovieName(movieName){
    try {
      const movieNameRoot: HTMLDivElement | null = document.querySelector("#movieNameRoot")
      if(!movieNameRoot) throw new Error("movieNameRoot not found")

      movieNameRoot.innerText = `${movieName}`
    } catch (error) {
        console.error(error)
    }
}

function renderPickedSeat(seat){
  try {
      const seatRoot: HTMLDivElement | null = document.querySelector(`#root0${seat.rowNumber}-0${seat.seatNumber}`)
      if(!seatRoot) throw new Error("seatRoot not found")

    if (seat.picked === true){
      seatRoot.style.backgroundColor = "yellow"
    }else{
      seatRoot.style.backgroundColor = "seagreen"
    }
    
  } catch (error) {
      console.error(error)
  }
}