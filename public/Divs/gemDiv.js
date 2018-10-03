const source = $('#img-template').html()
const template = Handlebars.compile(source)
let newHTMLGem = template({ class: "gemDiv" , img:"./Images/Gem.png"})

export {newHTMLGem}