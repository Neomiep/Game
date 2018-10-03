const source = $('#img-template').html()
const template = Handlebars.compile(source)
let newHTMLTreasure = template({ class: "treasureDiv" , img:"./Images/treasureChest.png"})

export {newHTMLTreasure}