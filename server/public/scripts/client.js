$(document).ready(onReady);
function onReady() {
    console.log('dom is ready')

// event listener:
    $('#addInputForm').on('submit', addInput);
    $('#plusBtn').on('click', Addition);
    $('#minusBtn').on('click', Subtraction);
    $('#multBtn').on('click', Multiplication)
    $('#divisionBtn').on('click', Division)
    getInput();
}

//Get function
//client is making a request for data from server
//by getfunction through ajax



//RenderToDom: to display html 



//Add function which holds post in it
//Client is posting updated data to server
//so server can hold on to it(list items)