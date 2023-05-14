$(document).ready(onReady);
function onReady() {
    console.log('dom is ready')

// event listener:
    $('#addInputForm').on('submit', addInput);
    $('#plusBtn').on('click', Addition);
    $('#minusBtn').on('click', Subtraction);
    $('#multBtn').on('click', Multiplication);
    $('#divisionBtn').on('click', Division);
    $('#clearBtn').on('click', Clear);
    getInput();
}

//Get function
//client is making a request for data from server
//by getfunction through ajax
function getInput() {
    $.ajax({
        method: 'GET',
        url: '/operations'
    }).then(function(response){ //holding the data we get from server
        console.log('this is response', response);
        renderToDom(response) //so it shows it on the dom right when we get data //response will pass the array to the next function

    }).catch(function(error){ //this will catch any error and show it at the dom
        alert('request failed!'); 
        console.log('request failed:', error)
        console.log(response)
    })
}

//Add function which holds post in it
//Client is posting updated data to server
//so server can hold on to it(list items)
//MAKE OPERATOR EQUAL TO DATA

function addInput(event){
    event.preventDefault();
//set inputs to var
const numOne = $('#inputOne').val()
const numTwo= $('#inputTwo').val()
//clear inputs
$('#inputOne').val('')
$('#inputTwo').val('')
    $.ajax({
        method: 'POST',
        url: '/operations',
        data: {
            numOne: numOne,
            operator: operator,
            numTwo: numTwo,
            answer: ''
        }
    }).then(function(response){ //when in post we dont need to worry about response
        console.log('yay it works')
        getInput() ///??
    }).catch(function(error){
        alert('error with client post');
        console.log('error with post', error)
    })
}
//RenderToDom: to display result history to dom 
function renderToDom(resultHistoryArray){ //??
    $('#resultHistory').empty();
    for (result of resultHistoryArray)
    $('#resultHistory').append(`<li>${result.numOne} ${result.operator} ${result.numTwo} = ${result.answer}</li> 
    `);
  console.log('answer is',`${result.answer}` )
  $('#recentAnswer').text(`${result.answer}`)


}
//this global variable will be updated with each btn function
let operator = ''
//any button in <form> will refresh when we press
//so we need to make sure we add event.prevent 
function Addition(event){
    event.preventDefault()
    operator = '+'
}

function Subtraction(event){
    event.preventDefault()
    operator = '-'
}
function Multiplication(event){
    event.preventDefault()
    operator = '*'
}

function Division(event){
    event.preventDefault()
    operator = '/'
}
//we need to request server to set the history array to 0
function Clear(event){
    event.preventDefault()
    $('#addInputForm').val('')
    
    
}

