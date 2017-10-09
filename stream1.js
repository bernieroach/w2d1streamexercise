// https is built-in but it's a module so it has to be required
var https = require('https');
var requestOptions = {
  host : 'sytantris.github.io',
  path : '/http-examples/step1.html'
}
function getAndPrintHTMLChunks(requestOptions){
 var httpsString = "";
https.get(requestOptions,function(response){
  response.on('data', function(data){
    response.setEncoding('utf8');

// print data chunk and a new line
    console.log(data);
    httpsString += data;

  });
  response.on('end', function(){
    console.log("BOOM!. End of stream!");
    console.log("print the concatenated https chunks");
    console.log(httpsString);
  });
});
}


getAndPrintHTMLChunks(requestOptions);

