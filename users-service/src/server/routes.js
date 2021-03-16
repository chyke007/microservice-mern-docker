import { User } from "#root/db/models"
import generateUUID from "#root/helpers/generateUUID"
import hashPassword from "#root/helpers/hashPassword"

const setupRoutes = app => {
    app.post("/users", async (req,res,next) => {
        console.log(req.body)
        if(!req.body.email || !req.body.password){
            return next(new Error("Invalid body!"))
        }

        try {
            const newUser = await User.create({
                email: req.body.email,
                id: generateUUID(),
                passwordHash: hashPassword(req.body.password)
            });  
            return res.json(newUser)          
        }catch(e){
            next(e)
        }
    })
}

export default setupRoutes;