// Async / await

function downloadNewClients(){
    return new Promise (resolve => {
        console.log('downloading clients, wait');

        setTimeout(() => {
            resolve('clients have been downloaded');
        }, 5000);


    });
}

async function app() {
    try {
        const result = await downloadNewClients();
        // console.log('this code does get blocked');
        console.log(result);
    } catch(error) {
        console.log(error)
    }
}

app();

// console.log('this code doesnt get blocked');


/*setTimeout( function() {
    console.log('set timeout')
}, 5000);*/

/*setInterval(function() {
    console.log('set timeout')
}, 5000);*/
