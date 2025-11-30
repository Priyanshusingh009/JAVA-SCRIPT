// Step 1: Create a Promise
let myPromise = new Promise(function (resolve, reject) {

    let success = true;   // try changing this to false

    // simulate a delay (like server response)
    setTimeout(function () {
        if (success) {
            resolve(" Data received successfully!");
        } else {
            reject(" Error: Data not received!");
        }
    }, 2000);   // 2 seconds delay
});


// Step 2: Consume the Promise
myPromise
.then(function (message) {
    console.log(message);   // when promise is resolved
})
.catch(function (error) {
    console.log(error);     // when promise is rejected
});
