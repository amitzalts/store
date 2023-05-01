function handleUserLogin(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name found");
        if (!password)
            throw new Error("No Password found");
        var userForm_1 = { name: name, password: password };
        fetch("/api/users/verify-user-login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userForm_1)
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var user = _a.user;
            if ((user.name === userForm_1.name) && (user.password === userForm_1.password)) {
                user.loggedIn = true;
                redirectToHomePage(user);
            }
            else {
                alert("password or name are invalid");
            }
        })["catch"](function (error) {
            console.error(error);
        });
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function redirectToHomePage(user) {
    try {
        var newUrl = "../index";
        window.location.replace(newUrl);
    }
    catch (error) {
        console.error(error);
    }
}
// function handleAddStudent(ev) {
//   try {
//       ev.preventDefault();
//       const name = ev.target.elements.name.value;
//       if (!name) throw new Error("No name on form");
//       const newStudent: any = { name };
//       fetch("/api/students/add-student", {
//           method: "POST",
//           headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(newStudent),
//       })
//           .then((res) => res.json())
//           .then(({ students }) => {
//               renderStudents(students);
//           })
//           .catch((error) => {
//               console.error(error);
//           });
//       ev.target.reset();
//   } catch (error) {
//       console.error(error);
//   }
// }
