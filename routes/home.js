const express = require('express')
const router = express.Router()
const Item = require('../models/Item')

router.get('/', (req, res, next)=>{

    Item.find({}, (err, itemsA) => {
        // prep data for hjs
        const data = { itemsA: itemsA}
        res.render('home', data)
    })
})

router.post('/additem', (req, res, next)=>{
    //
    Item.create(req.body, (err, item) =>{
        if (err) return next(err)

        Item.find({}, (err, itemsA)=>{
            if (err) return next(err)
            const data = {
                itemsA: itemsA
            }

            res.render('home', data)
        })

    })
})

// from nav champ -- debugging only
/* router.get('/items', (req, res, next)=>{
    const query = req.query
    Item.find(query)
        .then(itemsA => res.json ({itemsA:itemsA}))
        .catch(err=>err.message)
}) */

module.exports = router