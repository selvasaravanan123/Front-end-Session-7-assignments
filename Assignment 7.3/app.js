// Counter Starts from here.

var counter = 0;

// It will add next incremented value.

function add() {
    return counter += 1;
}

//It is used to print output on browser.

function myFunction(){
    document.getElementById("count").innerHTML = add();
}