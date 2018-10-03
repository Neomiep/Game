const _isTreasureChest = function(x,y,map){
    if(map[y][x]==="tc"){
        return true
    }
    else {return false}
}

export {_isTreasureChest}