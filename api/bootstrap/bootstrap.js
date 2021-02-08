import { createServer } from "http"
import { Server } from "socket.io"
import express from 'express'
import AppConfig from '../config/AppConfig.js'
import appLogger from '../helpers/appLogger.js'
import registerHttpRoutes from "../external/routes/registerRoutes.js"
import registerEvents from "../external/events/registerEvents.js"

const bootstrap = async () => {

    try {
        const expressApp = express()
        registerHttpRoutes(expressApp)
        const httpServer = createServer(expressApp)
        const io = new Server(httpServer, {
            cors: AppConfig.USE_CORS
        });
      
        registerEvents(io)
        
        httpServer.listen(AppConfig.API_PORT, () => {
          appLogger()
        });
  
  } catch (error) {
        console.log('Error :: bootstrap :: ', error)
  }

}

export default bootstrap