function handleUserRegister(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name found");
        if (!password)
            throw new Error("No Password found");
        var user = { name: name, password: password };
        fetch("/api/users/create-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
        })["catch"](function (error) {
            console.error(error);
        });
        ev.target.reset();
        var newUrl = "../../login/login.html";
        // window.location.replace(newUrl)
    }
    catch (error) {
        console.error(error);
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
