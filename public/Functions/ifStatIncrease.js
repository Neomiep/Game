import {_isCoin} from "./Existance Functions/isCoin.js"
import {_isGem} from "./Existance Functions/isGem.js"
import {stats} from "../stats.js"

const increaseStat = function (x,y,map){
    if(_isCoin(x,y,map)){
        stats[0].amount++
    }
    else if(_isGem(x,y,map)){
        stats[1].amount++
    }
}

export {increaseStat}