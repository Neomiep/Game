const _isAWall = function(x,y,map){
    if(map[y][x]==="w"){
        return true
    }
    else {return false}
}

export {_isAWall}