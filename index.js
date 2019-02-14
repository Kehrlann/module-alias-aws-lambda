require('module-alias/register');
const mod = require('@deep/module');

exports.handler = function (event, context, callback) {
  console.log("tracing ...");
  console.log(mod.message);
  callback(null, mod.message);
}
