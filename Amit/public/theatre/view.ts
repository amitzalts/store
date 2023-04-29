function renderSeats(){
    try {
     const seatsRoot: HTMLDivElement | null = document.querySelector("#seatsContainerRoot")
     if(!seatsRoot) throw new Error("seats root not found")
        
     seatsRoot.innerHTML=`
     
     `   

    } catch (error) {
        console.error(error)
    }
}