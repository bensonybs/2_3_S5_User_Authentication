const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const home = require('./routes/modules/home.js')
const app = express()
const PORT = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use((req, res) => {
  res.status(404).send('Page Not Found')
})
app.listen(PORT, () => {
  console.log(`The app is listening on http://localhost:${PORT}`);
})