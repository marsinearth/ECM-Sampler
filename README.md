# ECM Music Sampler
_A kiosk app for sample music from [ECM Records](https://www.ecmrecords.com)_

## This is under construction now

## Plan:
1. make express backend / create-react-app & redux & react-router front-end servers. (followed [this](https://daveceddia.com/create-react-app-express-backend/) and [this. (for setting proxy on AWS EC2 server)](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#invalid-host-header-errors-after-configuring-proxy))
2. Scrape ECM's angular-based page with [Nightmare.js](https://www.npmjs.com/package/nightmare) with other helping libraries, [vo](https://www.npmjs.com/package/vo) and [xvfb](https://www.npmjs.com/package/xvfb) on backend express server, especially for optimization for Amazon AWS EC2 Server. It was not simple to set up on AWS EC2 Server so I followed mainly [this instruction.](https://gist.github.com/dimkir/f4afde77366ff041b66d2252b45a13db)
3. Save the scraped data to [redis.io.](https://www.npmjs.com/package/redis)
4. Show the data from redis to the front-end client server, with search & filter functionalities with some beauty with design perks. 