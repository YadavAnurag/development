const app = require('./server/server')
const config = require('./server/config/config')
//app.get('/', (req, res) => res.json('Hello World!'))


app.listen(config.port, () => console.log(`app listening on port ${config.port}!`))