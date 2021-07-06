import { Router } from 'express'
import getRoomData from '../../functions/rooms/getRoomData.js'

const RoomsRouter = Router()

RoomsRouter.get('/:roomId', (req, res) => {
    const data =  {
        room: req.params.roomId
    }
    const functionResponse = getRoomData.run(data)
    const encodedResponse = Buffer.from(JSON.stringify(functionResponse)).toString('base64')
    res.send({
        data: encodedResponse
    })
})

export default RoomsRouter