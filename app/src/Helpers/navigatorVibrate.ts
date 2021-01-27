const navigatorVibrate = (ms: number = 100): void =>{
   
        if (!window) {
            return;
        }
    
        if (!window.navigator) {
            return;
        }
    
        if (!window.navigator.vibrate) {
            return;
        }
    
        window.navigator.vibrate(ms);

}

export { navigatorVibrate }