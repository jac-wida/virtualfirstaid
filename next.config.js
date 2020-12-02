const withTM = require('next-transpile-modules')(['three']); // pass the modules you would like to see transpiled

module.exports = withTM();
