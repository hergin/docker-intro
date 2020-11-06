const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Container World from CS495!'))
app.listen(3000, () => console.log('Server ready'))