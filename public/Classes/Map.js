class Map {
    constructor(renderer){
        this.renderer = renderer
        this.map = [
            ["mc", "b", "b", "b", "b", "tc", "b", "w", "w", "w"],
            ["b", "b", "c", "b", "b", "b", "b", "w", "g", "w"],
            ["b", "b", "b", "b", "g", "b", "b", "w", "w", "w"],
            ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
            ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
            ["b", "c", "b", "b", "b", "w", "b", "b", "b", "b"],
            ["b", "b", "b", "b", "b", "w", "b", "b", "b", "b"],
            ["b", "b", "c", "b", "b", "w", "b", "c", "b", "b"],
            ["b", "b", "b", "b", "b", "w", "b", "b", "b", "b"],
            ["b", "b", "b", "b", "b", "w", "b", "b", "b", "c"]
        ]
    }
    updateMap(obj,newX,newY){
        this.map[obj.y][obj.x] = "b"
        this.map[newY][newX] = obj.symbol
        this.renderer.produceMap(this.map)
    }
}

export {Map}