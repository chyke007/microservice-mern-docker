import cors from "cors"
import express from "express"

import accessEnv from "#root/helpers/accessEnv"

import setupRoutes from "./routes"

const PORT = accessEnv("PORT",7101)

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors({
    origin: (origin, cb) => cb(null,true),
    credentials: true
}))

setupRoutes(app)

app.use((err,req,res,next) => {
    res.status(500).json({
        message: err.message
    })
})

app.listen(PORT, "0.0.0.0", () => {
    console.info(`Listings service listening on ${PORT}`)
})