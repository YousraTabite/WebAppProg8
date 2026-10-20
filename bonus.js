const http = require('http')

const hostname = '127.0.0.1'
const port = 3001

const ingredients = [
    { name: 'Yogurt', amount: 1, unit: 'cup' },
    { name: 'Granola', amount: 0.5, unit: 'cup' },
    { name: 'Strawberries', amount: 0.5, unit: 'cup' },
    { name: 'Honey', amount: 1, unit: 'tablespoon' }
]

const used = [false, false, false, false]

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    res.write(`
        <html>
        <head>
            <title>Yousra lists an ingredient: Yogurt Parfait</title>
        </head>
        <body>
            <h1>Yousra's Yogurt Parfait Ingredients</h1>
    `)

    if (used.every(value => value === true)) {
        res.write('<p>nothing left</p>')
    } else {
        let index = Math.floor(Math.random() * ingredients.length)

        while (used[index]) {
            index = (index + 1) % ingredients.length
        }

        const ingredient = ingredients[index]
        used[index] = true

        res.write(`
            <p>Index: ${index}</p>
            <p>Ingredient: ${ingredient.name}</p>
            <p>Amount: ${ingredient.amount} ${ingredient.unit}</p>
        `)
    }

    res.end('</body></html>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})