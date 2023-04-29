function renderSeats() {
    try {
        var seatsRoot = document.querySelector("#seatsContainerRoot");
        if (!seatsRoot)
            throw new Error("seats root not found");
        seatsRoot.innerHTML = "\n     \n     ";
    }
    catch (error) {
        console.error(error);
    }
}
