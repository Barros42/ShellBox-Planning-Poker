import AppConfig from "core/AppConfig"

const appBootstrap = () => {
  document.title = AppConfig.appName
}

export default appBootstrap