import UserModel from "./usersModel";

export const createUser = async (req:any, res:any) => {
    try {
      const { name, password } = req.body
      if(!name) throw new Error("name not found")
      if(!password) throw new Error("password not found")

      const loggedIn:boolean = false
      
      const userDB = await UserModel.create({name, password, loggedIn})
      
      console.log(userDB);
      
      res.status(201).send({ ok: true })
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message })
    }
  };


export const getUser = async (req:any, res:any) => {
    try {
      const { userId } = req.body

      console.log("userId", userId);

      if(!userId) throw new Error("user id not found on req")

      const user = await UserModel.findById(userId)
  
      res.send({ user });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message })
    }
}
  

export const verifyUserLogin = async (req:any, res:any) => {
  try {
    const { name, password } = req.body
    if(!name) throw new Error("name not found")
    if(!password) throw new Error("password not found")
    
    const user = await UserModel.findOne({name, password})
    
    console.log("verifyUserLogin", user);
    
    res.status(201).send({ ok: true, user })
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message })
  }
};
  





