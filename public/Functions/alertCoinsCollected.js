import {coinsExist} from "./coinsExist.js"

let clicks=0

const alertMeCoins = function(){
    if(!coinsExist() && clicks==0){
        alert("Yay, you got all the coins.")
        clicks++
    }
}

export {alertMeCoins} 