const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Página con Tabla</title>
    </head>
    <body>
      <h1>¡Hola, Mundo!</h1>
      <p>Esta es una página HTML simple.</p>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>País</th>
        </tr>
        <tr>
          <td>Pedro</td>
          <td>25</td>
          <td>Colombia</td>
        </tr>
        <tr>
          <td>Leonel</td>
          <td>30</td>
          <td>España</td>
        </tr>
        <tr>
          <td>Carlos</td>
          <td>28</td>
          <td>Alemania</td>
        </tr>
      </table>
    </body>
    </html>
  `);
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
