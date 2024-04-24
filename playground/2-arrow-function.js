const square = function(x) {
    return x * x;
}
console.log(square(3));

const arrowSquare = (x) => {
    return x * x;
}
console.log(arrowSquare(4));

const tunedArrowSquare = (x) =>  x * x;
console.log(tunedArrowSquare(5));

// object
const event = {
    name: "birthday party",
    guestList: ['Ashis', "Aheli"],
    printGuestList: function() {
        console.log('guest list for ', this.name);
        this.guestList.forEach ((guest) => { 
            console.log(guest);
        })
    }
}

event.printGuestList();