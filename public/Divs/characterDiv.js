const source = $('#character-template').html()
const template = Handlebars.compile(source)
let newHTMLChar = template({ class: "characterDiv" })

export {newHTMLChar}