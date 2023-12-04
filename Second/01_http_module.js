const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.url); // displays everytime when user tries to write something in URL

    if (req.url === '/') {  // '/' is the default route
        res.write('Hello From the Other Side...');
        res.end();
    }
    else if (req.url === '/products') {
        res.write(String([['Oranges', 700], ['Mangoes', 1000], ['Bananas', 1200], ['Apples', 500]]));
        res.end();
    }
    else if (req.url === '/about%20us') { // space in URL is written by %20
        res.write('talaviya_sanket@gmail.com' + " " + '9723540822');
        res.end();
    }
    else {  // if user tries to write URL that not defined above, will get an error message written below
        res.writeHead(404, { "Content-type": "text/html" }); // by adding this, we will get status code 404 & a red error in console also
        res.write("<h2>404 error pages. Page doesn't exist<h2>"); // this will be an HTML page
        res.end();
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Port is running on 3000');
});