import appConfig from '../appConfig.json'
import packageJson from '../package.json'

const AppConfig = {
    API_NAME: appConfig.APP_NAME,
    API_PORT: appConfig.APP_PORT,
    USE_CORS: appConfig.APP_USE_CORS,
    APP_VERSION: packageJson.version
}

export default AppConfig