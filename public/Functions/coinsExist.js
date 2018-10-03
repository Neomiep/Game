import {map} from "../Trash/map.js"

const coinsExist = function(){
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if(map[y][x] === "c"){
                return true
            }
        }}
    return false
}

export {coinsExist}