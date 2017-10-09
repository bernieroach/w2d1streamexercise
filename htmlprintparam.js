var https = require('https');
var requestOptions = {
  host : 'sytantris.github.io',
  path : '/http-examples/step3.html'
}
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

getAndPrintHTML(requestOptions);


