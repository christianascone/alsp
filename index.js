#!/usr/bin/env node
var program = require('commander');

const http = require('http');
const { URL } = require('url');

const _request = url => new Promise((resolve, reject) => {
  http.get(url, (res) => {
    res.setEncoding('utf8');
    const { statusCode, headers } = res;

    let body = '';
    res.on('data', (chunk) => {
      body += chunk;
    }).on('end', () => {
      resolve({ statusCode, headers, body });
    });
  }).on('error', reject);
});

program
.option('-H, --host <host>', 'Set host (default 0.0.0.0)')
.option('-P, --port <port>', 'Set port (default 8997)')
.option('-e, --endpoint <endpoint>', 'Set endpoint (default http://localhost)')
.parse(process.argv);

options = {
  host: '0.0.0.0',
  port: 8997,
  server: 'http://localhost',
};

if(program.host) options.host = program.host;
if(program.port) options.port = program.port;
if(program.endpoint) options.server = program.endpoint;

console.info('Starting server...');

const server = http.createServer(async (req, res) => {
  console.info('Redirecting...');

  try {
    const url = new URL(req.url, options.server).toString();
    const { statusCode, headers, body } = await _request(url);

    res.writeHead(statusCode, headers);
    res.write(body);
    res.end();

    console.info('Ok');
  } catch (err) {
    console.error('Request error', err);

    res.writeHead(500, err.message);
    res.write(err.message);
    res.end();
  }
}).listen(options.port, options.host);

const stop = () => {
  console.info('Stopping server...');
  server.close(() => process.exit(0));

  setTimeout(() => {
    process.exit(0);
    }, 5000); // Force exit
};

server.on('listening', () => {
  console.info(`Redirecting requests to ${options.server}`);
  console.info(`Listening on http://${options.host}:${options.port} <- Use this url to be redirected to given endpoint`);
});

process.on('SIGTERM', stop);
process.on('SIGINT', stop);
