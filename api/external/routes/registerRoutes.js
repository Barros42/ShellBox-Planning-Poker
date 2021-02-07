import AppConfig from '../../config/AppConfig.js'

import IndexRouter from './Routers/IndexRouter.js'

const RoutesMap = [
    { path: '/', handler: IndexRouter }
]

const registerHttpRoutes = (app) => {
    
    app.use((req, res, next) => {
        res.setHeader('X-Powered-By', `${AppConfig.API_NAME} @ API`)
        res.setHeader('Developed-By', 'Matheus de Barros Fagionato @ mdbf42@gmail.com')
        next()
    })

    RoutesMap.map(route => app.use(route.path, route.handler))
}

export default registerHttpRoutes