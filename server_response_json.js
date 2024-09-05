const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Hola, Mundo!', status: 'success' }));
    } else if (req.url === '/about') {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Acerca de', info: 'Este es un servidor básico en Node.js' }));
    } else if (req.url === '/data') {
      res.statusCode = 200;
      res.end(JSON.stringify({
        users: [
          { name: 'Andres', age: 22, country: 'México' },
          { name: 'Yaddy', age: 32, country: 'Colombia' },
          { name: 'Alberto', age: 27, country: 'Francia' }
        ]
      }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Ruta no encontrada', status: 'fail' }));
    }
  } else if (req.method === 'POST') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Solicitud POST recibida', status: 'success' }));
  } 
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});