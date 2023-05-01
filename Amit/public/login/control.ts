function handleUserLogin(ev){
    try {
     
        ev.preventDefault()
        const name:string = ev.target.elements.name.value
        const password:string  = ev.target.elements.password.value
        if (!name) throw new Error("No name found")
        if (!password) throw new Error("No Password found")

        const userForm: any = { name, password }

        fetch("/api/users/verify-user-login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userForm),
        })
          .then((res) => res.json())
          .then(({user}) => {
            
            if((user.name === userForm.name) && (user.password === userForm.password)){
              user.loggedIn = true

              redirectToHomePage(user)
            }else{
              alert("password or name are invalid")
            } 
          })
          .catch((error) => {
            console.error(error)
          });
        ev.target.reset()

    } catch (error) {
        console.error(error)
    }
}

function redirectToHomePage(user){ ///now is the time to add cookie
  try {

    const newUrl = `../index`
    window.location.replace(newUrl)

  } catch (error) {
    console.error(error)
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
