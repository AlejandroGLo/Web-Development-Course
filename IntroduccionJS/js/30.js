//Promises

const authUser = new Promise((resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('User Authenticated'); //Promise is met
    } else {
        reject('Cannot log in'); //Promise is met
    }
});

authUser 
    .then(result => console.log(result))
    .catch(error => console.log(error))

//There are 3 possible values in promises
// Pending: Not met but not rejected either
// Fullfilled: Promise is met
// Rejected: Rejected or could not be met