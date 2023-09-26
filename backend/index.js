const cors = require ("cors")
const express = require("express")
const stripe = require("stripe")("pastepublic key here")
const uuid = require('uuid');
uuid.v4();

const app = express()

//middleware
app.use(express.json())
app.use(cors())

//routes
app.get("/",(req,res)=>{
    res.send("this is the stripe payment gateway")
})

app.post("/payment",(req,res)=>{

    const {product, token} = req.body;
    console.log("PRODUCT",product)
    console.log("PRICE",product.price);
    const idempotencyKey = uuid()

    return stripe.cutomers.create({
        email: token.email,
        source: token.id
    }).then(customer =>{
        stripe.charges.create({
            amount: product.price*100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of product.name`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_count
                }
            }
        }, {idempotencyKey})
    })
    .then (result => res.status(200).json(result))
    .catch(err => console.log(error))
})


//listen
app.listen(8282,()=>console.log("running at 8282"))