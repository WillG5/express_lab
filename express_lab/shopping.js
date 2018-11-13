const express = require('express');
const router = express.Router();
const shoppingCart = [{id: "a", product: "Apples", price: "2.00", quanity: "1"}, {id: "b", product: "Oranges", price: "1.00", quanity: "1"}, {id: "c", product: "Peaches", price: "2.50", quanity: "1"}];

router.get("/", (req, res) => {
    res.send(shoppingCart);
});

router.post("/", (req, res) => {
    if(req.body.user) {
        res.status(201).send(console.log(shoppingCart));
    }
    else {
        res.sendStatus(400);
    }
});



module.exports = router;