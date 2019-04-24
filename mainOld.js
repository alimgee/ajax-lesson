function getData(cb) {//cb is a function callback, in this case the printDataToConsole function is passed through 
                        // and does not run until called in the ready state function, this gets around the need for a timeout
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function() {// ready state function checks that the get url has loaded successfully - status 200 and ready state 4
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));//calling callback function once data is ready and loaded
        }//using json.parse to convert text to json object
    };
}

function printDataToConsole(data) {//call back function
    console.log(data);
}

getData(printDataToConsole);// callback function used to allow state 4 and status 200 occur otherwise data object will be empty