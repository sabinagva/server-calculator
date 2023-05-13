// bring express into our project
const express = require('express');

// create your express app
const app = express();

// identify which port we'll run on
const PORT = 5000;


// bring body-parser into our project
const bodyParser = require('body-parser'); 

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))


// this will hold all the history
let resultHistoryArray = [
   
];

// serve static files that live in the public folder
// static files include html, css, client-side JS
app.use(express.static('server/public'));

// use bodyParser to parse data from the client
// parse = turn the data from the client into something we can 
// use on the server
app.use(bodyParser.urlencoded({ extended: true }));

//server is giving data client is requesting
app.get('/operations', function(req,res){
    console.log('data is getting to client')
    res.send(resultHistoryArray);
})

//server is (posting) updated data client sent 
//by storing it in our resultHistory array
app.post('/operations', function(req,res){
    console.log('updated data is being stored', req.body)//why req.body
    resultHistoryArray.push(req.body);
    res.sendStatus(201)
    Calculation() //why do we call it here

})

//functions for calculations


function Calculation() {
if(operator === '+'){
    return numOne + numTwo;
}
else if(operator === '-'){
    return numOne - numTwo;
}
else if(operator === '/'){
    return numOne / numTwo;
}
else if(operator === '*'){
    return numOne * numTwo;
}
}

//server is listening
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })