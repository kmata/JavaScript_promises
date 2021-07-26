// A promise is an asynchronous action that may complete at some point in the future and produce a value
// It notifies the user when its value is available
// Promises provide a robust way to wrap the result of asynchronous work, overcoming the problem of deeply nested callbacks 
// Definition by SimpliLearn 

//States: 
// Pending: Underlying operation has not yet completed 
// Fullfilled: The operation has finished and the promise is fulfilled with a value
// Rejected: An error has ocurred during the operation and the promise is rejected with a reason


// then(callback) - Used to attach a callback when the promise is resolved/fulfilled
// catch(callback) - Used to attach a callback when the promise is rejected

//Example 1 
let car = new Promise(function(resolve, reject){
    fullTank = false;
    if (fullTank)
    resolve()
    else
    reject()
});

car.then(function(){
    document.write("The tank is full. Happy Driving")
}).catch(function(){
    document.write("The tank is not empty")
})


//Example 2
const inventory = {
    paper: -1,
    pencil: 3,
    gums: 2
  };
  
  const myCheck = (resolve, reject) => {
    if (inventory.paper > 0) {
        resolve('Paper order processed.');
    } else {
        reject('That item is sold out.'); 
    }
  };
  
  const orderPaper = () => {
    return new Promise(myCheck);
  };
  
  const checkInventory = orderPaper();
  
  console.log(checkInventory);          
  
//Example 3
let numbers = {
    negative: -6,
    tens: 100,
    units: 26
  };
  
let numberCheck = new Promise(function(resolve, reject){
    if (numbers.tens <= 0) {
        resolve()
    } else {
        reject() 
    }
  })
  
numberCheck.then(function(){
    document.write('Number is equal or less than 0.')
}).catch(function(){
    document.write('Number is higher than 0.')
})