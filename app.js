require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/public'))
const geocode = require('./geocode')
const forecast = require('./forecast')


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    // res.send({
    //     address: req.query.address
    // })
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send({
        products: []
    })
})

app.get('*', (req, res) => {
    res.send('page not found');
})
app.listen(process.env.PORT || 3000, () => {
    console.log('server listing at port 3000');

})

