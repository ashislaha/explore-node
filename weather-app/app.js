console.log('starting');

setTimeout(() => {
    console.log('after 2 sec');

}, 2000 /* ms */);

setTimeout(() => {
    console.log('0 sec time');
}, 0);

console.log('stopping');