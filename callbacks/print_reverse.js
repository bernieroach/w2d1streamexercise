var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};




function toUpperCase(httpsString){
  console.log(httpsString.toUpperCase());
};

function toLowerCase(httpsString){
  console.log(httpsString.toLowerCase());
};

function reverse(httpsString){
  console.log(httpsString.split("").reverse().join(""));
};

function 1337(httpsString){
  console.log("not implemented yet");
};




getHTML(requestOptions,reverse);