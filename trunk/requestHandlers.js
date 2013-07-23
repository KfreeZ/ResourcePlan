var fs = require("fs");

function start(response) {
  console.log("Request handler 'start' was called.");

  fs.readFile("./index.html", "binary", function (err, file) {
    if (err) {
      // return 500 if read file error
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end(err);
    } else {
      // write the file into http response
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(file, "binary");
      response.end();
    } //end of if(err) / else
  } //end of function (err, file)
  );

}

function pic(response) {
  console.log("Request handler 'pic' was called.");

  fs.readFile("./ne.jpg", "binary", function (err, file) {
    if (err) {
      // return 500 if read file error
      response.writeHead(500, {'Content-Type': 'image/jpeg'});
      response.end(err);
    } else {
      // write the file into http response
      response.writeHead(200, {'Content-Type': 'image/jpeg'});
      response.write(file, "binary");
      response.end();
    } //end of if(err) / else
  } 
  );
}

exports.start = start;
exports.pic = pic;