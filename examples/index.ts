import * as http from 'http'
import { Page } from './Page';

console.log(`web: starting http server on port 3333`)

http.createServer(function (_, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(Page());

}).listen(3333);
