//Env Variables
require("dotenv").config()

import express from "express"
import config from  "config"
import morganMiddleware from "../middleware/morganMiddleware" // middlewares
import db from "../config/db" // DB
import router from "./router" // Routers
import Logger from "../config/logger"// Logger

const app = express () 
const port = config.get<number>('port')// App port

app.use(morganMiddleware) 
app.use(express.json()) // JSON middleware
app.use('/api', router)
app.listen(port, async () => {

    await db()
    Logger.info(`Server is running on port ${port}`)
}) 