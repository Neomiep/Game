const source = $('#coin-template').html()
const template = Handlebars.compile(source)
let newHTMLCoin = template({ class: "coinDiv" })

export {newHTMLCoin}