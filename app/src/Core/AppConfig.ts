import packageJson from '../../package.json'
import appConfig from '../appConfig.json'

export default class AppConfig {
    static readonly appName = appConfig.APP_NAME
    static readonly apiUrl = appConfig.API_URL
    static readonly appVersion = packageJson.version
}