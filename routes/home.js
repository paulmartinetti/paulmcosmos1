const express = require('express')
const router = express.Router()
const Item = require('../models/Item')

let saveBtnState = 'disabled';

// all
router.get('/', (req, res, next)=>{
    Item.find({}, (err, itemsA) => {

        // server disables save btn on success
        data = {
            itemsA: itemsA,
            saveBtnState: saveBtnState
        }
        res.render('home', data)
    })
})

// testing item list in a form to post updates
router.post('/updateitems',(req, res, next)=>{

    res.json(req.body)
})

router.post('/additem', (req, res, next)=>{

    //console.log(req.body)
    //res.send()
    //
    Item.create(req.body, (err, item) =>{
        if (err) return next(err)

        Item.find({}, (err, itemsA)=>{
            if (err) return next(err)
            res.render('home', {itemsA})
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