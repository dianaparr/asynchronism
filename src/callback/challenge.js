// AJAX - Server Response. src: https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

// 1. Instanciar o requerir en este doc xmlhttprequest el cual es un objeto de JS que uso para
// hacer peticiones.
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/'

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

// 2. Hacer las peticiones que se requieren

fetchData(API, function(err1, data1) {
    if (err1) return console.error(err1);
    fetchData(API + data1.results[0].id, function(err2, data2) {
        if (err2) return console.error(err2);
        fetchData(data2.origin.url, function(err3, data3) {
            if (err3) return console.error(err3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})
