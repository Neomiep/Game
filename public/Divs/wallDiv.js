const source = $('#green-template').html()
const template = Handlebars.compile(source)
let newHTMLWall = template({ class: "wallDiv" })

export {newHTMLWall}