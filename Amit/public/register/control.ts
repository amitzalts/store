function handleUserRegister(ev){
    try {
        ev.preventDefault()
        const name:string = ev.target.elements.name.value
        const password:string  = ev.target.elements.password.value
        if (!name) throw new Error("No name found")
        if (!password) throw new Error("No Password found")

        const user: any = { name, password }

        fetch("/api/users/create-user", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        ev.target.reset()

        let newUrl =  `../../login/login.html`
        // window.location.replace(newUrl)

    } catch (error) {
        console.error(error)
    }
}

// function handleAddUser(ev: any) {
//     try {
//       ev.preventDefault();
//       console.log(ev.target.elements)
//       const name = ev.target.elements.name.value;
//       const password = ev.target.elements.password.value;
//       if (!name) throw new Error("No name");
//       if (!password) throw new Error("No Password");
//       const newUser: any = { name, password };
  
//       //send to server:
//       fetch("/api/users/add-user", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } catch (error) {
//       console.error(error);
//     }
//   }