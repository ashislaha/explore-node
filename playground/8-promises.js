// let's create a function with callback before moving to promises

const doWorkWithCallback = (callback) => {
    setTimeout(() => {
        callback('This is an error', undefined)
        //callback(undefined, [100, 200, 300, 400])
    }, 2000);
}

// call the function
doWorkWithCallback((error, data) => {
    if (error) {
        return console.log(error)
    }
    console.log(data)
})

// Now do the above job using promises

const promiseFunction = (resolve, reject) => {
    setTimeout(() => {
        resolve([2, 3, 4, 5])
        //reject('there is an error')
    }, 2000);
}
const doWorkWithPromise = new Promise(promiseFunction)

doWorkWithPromise
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((rejectError) => {
        console.log(rejectError)
    })


