import { newHTMLBlue } from "../Divs/backgroundDiv.js"
import { newHTMLChar } from "../Divs/characterDiv.js"
import { newHTMLCoin } from "../Divs/coinDiv.js"
import { newHTMLGem } from "../Divs/gemDiv.js"
import { newHTMLTreasure } from "../Divs/treasureDiv.js"
import { newHTMLWall } from "../Divs/wallDiv.js"
import { template } from "../Divs/statsDiv.js"
import {stats} from "../stats.js"

class Renderer{
    produceMap(map){
    $("#stats-here").empty()
    let newHTMLStats = template({stat:stats})
    $("#stats-here").append(newHTMLStats)
    
    for (let i = 0; i < map.length; i++) {

        $(".row-" + (i + 1)).empty()

        for (let a = 0; a < map[i].length; a++) {
            if (map[i][a] == "b") {
                $(".row-" + (i + 1)).append(newHTMLBlue)
            }
            else if (map[i][a] == "mc") {
                $(".row-" + (i + 1)).append(newHTMLChar)
            }
            else if (map[i][a] == "c") {
                $(".row-" + (i + 1)).append(newHTMLCoin)
            }
            else if (map[i][a] == "w") {
                $(".row-" + (i + 1)).append(newHTMLWall)
            }
            else if (map[i][a] == "g"){
                $(".row-" + (i + 1)).append(newHTMLGem)
            }
            else if (map[i][a] == "tc"){
                $(".row-" + (i + 1)).append(newHTMLTreasure)
            }
            else { alert("ERROR!!!!!!!") }
        }
    }
    }
}
export {Renderer}