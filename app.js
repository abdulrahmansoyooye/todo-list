const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
items = []
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
    var today = new Date()
    var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    day = today.toLocaleDateString('en-US', options)
    res.render('list', { kindOfday: day, listItems: items })

});

app.post('/', function(req, res) {
    var item = req.body.newItem
    items.push(item)
    res.redirect('/')

})

app.listen(3000, function() {
    console.log('server is working on port 3000');
});