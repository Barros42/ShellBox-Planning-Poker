import packageJson from '../../package.json'

export default class AppConfig {

    static readonly appName = 'ShellBox - Planning Poker'
    static readonly apiUrl = 'http://192.168.15.9:4000'
    static readonly appVersion = packageJson.version

}