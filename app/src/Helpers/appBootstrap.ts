import AppConfig from "../Core/AppConfig"

const appBootstrap = () => {
  document.title = AppConfig.appName
}

export default appBootstrap