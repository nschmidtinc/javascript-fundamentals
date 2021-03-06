

function first(arr) {
    // Throw an exception if the array has no elements
    // Otherwise return the first element
    if (arr[0] === undefined) {
        throw "error";
    } else { return arr[0];   
      
    }
      
}
// console.log(first(arr1));
function detective(i) {
    function suspect(i) {
        if(i * 7 % 3 === 0) {throw new Error("Bad i!")};
    } 
    
    try {
        suspect(i);
    }
    catch(err) { 
        return "something fishy";
    } 
    
    return "everything ok"
}

    
    // detective checks to see if the suspect throws an exception on input i.
    // Returns "everything ok" if the suspect doesn't. 
    // Returns "something fishy" if the suspect does.


function assignFlight(name) {
    var flightNumber = ((name.length * 7) % 20) + "0";
    var terrorSuspects = ["bob", "eric", "susie"];
    // if the name is a terror suspect, throw an exception
    // Otherwise, return the flight number
    if (name == "bob" || name == "eric" || name == "susie") {throw new Error ("terrorist!");
    }
    try {
        assignFlight(name); 
    }
    catch(err) {
        return "terrorist!";
    }
    return flightNumber
}

module.exports = {first, detective, assignFlight}