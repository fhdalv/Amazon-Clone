const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HPyqUFp3vn3fwpBxUFZJbaumleM5JfBy0DGaqVQgy0okxFdUWQ4FpeajmptMiJ29lSmGlVTHQL2bJslcGgCiHEs001yKcfjMH')

// API

//App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//Listen command
exports.api = functions.https.onRequest(app)

//Example End Point
//http://localhost:5001/clone-c1a98/us-central1/api