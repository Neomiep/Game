import {Map} from "./Classes/Map.js"
import {Character} from "./Classes/Character.js"
import {Renderer} from "./Classes/Renderer.js"

let RENDERER = new Renderer
let MAP = new Map(RENDERER)
let character = new Character(MAP)

const didPress = (event, key1, key2) => [key1, key2].indexOf(event.keyCode) > -1

$("body").keyup(function () {
    if (didPress(event, 38, 87)) {
        character.moveUp()
    }
    if (didPress(event, 40, 83)) {
        character.moveDown()
    }
    if (didPress(event, 37, 65)) {
        character.moveLeft()
    }
    if (didPress(event, 39, 68)) {
        character.moveRight()
    }
})


RENDERER.produceMap(MAP.map)