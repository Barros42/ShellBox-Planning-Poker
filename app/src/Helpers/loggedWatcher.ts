import { userIsLogged } from "./userIsLogged"

const loggedWatcher = () => {

  return setInterval(() => {
    const isLogged = userIsLogged()
    console.log(isLogged)
    if(!isLogged) {
      console.log('Redirecionando')
      window.open('/', 'SELF')
    }
}, 1000)
}

export default loggedWatcher