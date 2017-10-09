var https = require('https');

var requestOptions = {
  host : 'sytantris.github.io',
  path : '/http-examples/step4.html'
};

function getHTML(requestOptions,callbackFunc){

 https.get(requestOptions,function(response){

  var httpsString = "";
  response.on('data', function(data){
    response.setEncoding('utf8');

// append data to the return string
    httpsString += data;
    console.log(httpsString);

  });
  response.on('end',function(){callbackFunc(httpsString)});

});

};


function whatToDoOnEnd(httpsString){
  // print at the end
    console.log(httpsString);

};


// this is the actual call to do something.
// this is the step 4 thing.
getHTML(requestOptions,whatToDoOnEnd);

