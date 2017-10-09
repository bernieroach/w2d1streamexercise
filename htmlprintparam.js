var https = require('https');

var requestOptions = {
  host : 'sytantris.github.io',
  path : '/http-examples/step3.html'
};

function getAndPrintHTML(requestOptions){
 var httpsString = "";
https.get(requestOptions,function(response){
  response.on('data', function(data){
    response.setEncoding('utf8');

// append data to the return string
    httpsString += data;

  });
  response.on('end', function(){
// print at the end
    console.log(httpsString);
  });
});
}

// this is the actual call to do something.

getAndPrintHTML(requestOptions);

function whatToDoWithHTML(response){

  response.on('data', whatToDoOnData);
  response.on('end', whatToDoOnEnd);

};

function whatToDoOnData(data){

    response.setEncoding('utf8');

// append data to the return string
    httpsString += data;

};

function whatToDoOnEnd(){
  // print at the end
    console.log(httpsString);

};


function getAndPrintHTML2(requestOptions){
  var httpsString = "";
  https.get(requestOptions,whatToDoWithHTML);

}




