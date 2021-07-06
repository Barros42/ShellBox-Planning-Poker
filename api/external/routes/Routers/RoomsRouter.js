import { Router } from 'express'
import AppConfig from '../../../config/AppConfig.js'

const RoomsRouter = Router()

RoomsRouter.post('/vote', (req, res) => {
    res.send({
           name: AppConfig.API_NAME,
           port: AppConfig.API_PORT,
           cors: AppConfig.USE_CORS,
           version: AppConfig.APP_VERSION
    })
})

export default RoomsRouter