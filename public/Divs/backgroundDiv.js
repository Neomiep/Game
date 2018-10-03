const source = $('#green-template').html()
const template = Handlebars.compile(source)
let newHTMLBlue = template({ class: "blueDiv" })

export {newHTMLBlue}