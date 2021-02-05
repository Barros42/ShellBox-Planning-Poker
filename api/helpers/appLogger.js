import AppConfig from '../config/AppConfig.js'

const appLogger = () => {
  console.clear()
  console.log(`${AppConfig.API_NAME} API @ Running on port ${AppConfig.API_PORT}`)
  console.log(`Config :: APP CORS @ ${AppConfig.USE_CORS}`)
  console.log(`----------------------------------------------------------------`)
}

export default appLogger