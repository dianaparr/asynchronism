// AJAX - Server Response. src: https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}
