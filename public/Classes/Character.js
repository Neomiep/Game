import { _isAWall } from "../Functions/Existance Functions/isItAWall.js"
import { _isTreasureChest} from "../Functions/Existance Functions/isTreasureChest.js"
import { increaseStat } from "../Functions/ifStatIncrease.js"


class Character {
    constructor(map) {
        this.map = map
        this.x = 0
        this.y = 0
        this.symbol = "mc"
    }

    moveUp() {
        let newY = this.y - 1
        if (newY >= 0 && !(_isAWall(this.x, newY, this.map.map))&& !(_isTreasureChest(this.x, newY, this.map.map))) {
            increaseStat(this.x, newY, this.map.map)
            this.map.updateMap(this, this.x, newY)
            this.y = newY
        }
    }

    moveDown() {
        let newY = this.y + 1
        if (newY < this.map.map.length && !(_isAWall(this.x, newY, this.map.map))&& !(_isTreasureChest(this.x, newY, this.map.map))) {
            increaseStat(this.x, newY, this.map.map)
            this.map.updateMap(this, this.x, newY)
            this.y = newY
        }
    }

    moveLeft() {
        let newX = this.x - 1
        if (newX >= 0 && !(_isAWall(newX, this.y, this.map.map))&& !(_isTreasureChest(newX, this.y, this.map.map))) {
            increaseStat(newX, this.y, this.map.map)
            this.map.updateMap(this, newX, this.y)
            this.x = newX
        }
    }

    moveRight() {
        let newX = this.x + 1
        if (newX < this.map.map[this.y].length && !(_isAWall(newX, this.y, this.map.map))&& !(_isTreasureChest(newX, this.y, this.map.map))) {
            increaseStat(newX, this.y, this.map.map)
            this.map.updateMap(this, newX, this.y)
            this.x = newX
        }
    }

}

export { Character }