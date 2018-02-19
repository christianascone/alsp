
# alsp - Active Local Server Proxy

[![Maintainability](https://api.codeclimate.com/v1/badges/c7d5f7e0335906e314bc/maintainability)](https://codeclimate.com/github/christianascone/alsp/maintainability)
[![dependencies Status](https://david-dm.org/christianascone/alsp/status.svg)](https://david-dm.org/christianascone/alsp)
[![devDependency Status](https://david-dm.org/christianascone/alsp/dev-status.svg)](https://david-dm.org/christianascone/alsp#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/alsp.svg)](https://www.npmjs.com/package/alsp)
[![npm version](https://badge.fury.io/js/alsp.svg)](https://badge.fury.io/js/alsp)

`alsp` is an active proxy that redirects a call from localhost to given endpoint.
This project is **strongly** inspired by a [rodrigogs](https://github.com/rodrigogs)' repository (Thank you).


### Install
**node 7.6 > required**
> `$ npm install alsp -g`


### Usage
> `$ alsp --help`
```
  Usage: alsp [options]

  Options:

    -V, --version          output the version number
    -h, --host <host>      hostname to listen on (default: 0.0.0.0)
    -p, --port <port>      port to listen on (default: 8997)
    -s, --server <server>  license server url (default: http://localhost)
    -h, --help             output usage information
```

> `$ alsp`
```
Starting server...
Redirecting requests to http://localhost
Listening on http://0.0.0.0:8997 <- Use this url to be redirected to given endpoint
```


### Disclaimer

Citing the original author:
"I don't really give a fuck about disclaimers, intellectual property or code of conduct for open source projects(mainly), so... just use it as you want to."

### Note

In case of problems, try using [ngrok](https://ngrok.com/download). Download it and then run:
> ```$ ngrok http 8997```

You will see the following:
![ngrok](https://i.imgur.com/dh1TeEq.png)

Use the underlined ip.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/christianascone/alsp/blob/master/LICENSE) © Christian Ascone
