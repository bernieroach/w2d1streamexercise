var https = require('https');

var requestOptions = {
  host : 'sytantris.github.io',
  path : '/http-examples/step4.html'
};




function whatToDoOnEnd(httpsString){
  // print at the end
    console.log(httpsString);

};

module.exports = function getHTML(requestOptions,callbackFunc){

 https.get(requestOptions,function(response){

  var httpsString = "";
  response.on('data', function(data){
    response.setEncoding('utf8');

// append data to the return string
    httpsString += data;

  });
  response.on('end',function(){callbackFunc(httpsString)});

});

};


