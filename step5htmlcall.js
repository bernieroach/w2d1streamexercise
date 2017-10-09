var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function whatToDoOnEnd(httpsString){
  // print at the end
    console.log(httpsString);

};

getHTML(requestOptions,whatToDoOnEnd);