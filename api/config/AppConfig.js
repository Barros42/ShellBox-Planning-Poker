import appConfig from '../appConfig.json'

const AppConfig = {
    API_NAME: appConfig.APP_NAME,
    API_PORT: appConfig.APP_PORT,
    USE_CORS: appConfig.APP_USE_CORS
}

export default AppConfig