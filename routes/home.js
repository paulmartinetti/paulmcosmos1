const express = require('express')
const router = express.Router()
const Item = require('../models/Item')

// items are managed locally, then saved
let itemsA = []
// save btn is activated by changes in list
let saveState = 'disabled';

// all
router.get('/', (req, res, next)=>{
    Item.find({}, (err, items) => {
        itemsA = items;
        data = {
            itemsA: itemsA,
            savestate: saveState
        }
        res.render('home', data)
    })
})

// 
router.get('/:itemid', (req, res, next)=>{
    // returns { itemid: '5c9d430c140df02c7caa2960' }
    console.log(req.params)
    // someone clicked 
    saveState = '';
    // 
    res.redirect('/')
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