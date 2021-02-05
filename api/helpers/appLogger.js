import AppConfig from '../config/AppConfig.js'

const appLogger = () => {
  console.clear()
  console.log(`${AppConfig.API_NAME} API @ Running`)
  console.log(`Config :: APP PORT @ ${AppConfig.API_PORT}`)
  console.log(`Config :: APP CORS @ ${AppConfig.USE_CORS}`)
  console.log(`----------------------------------------------------------------`)
}

export default appLogger