#!/usr/bin/env node

var top = require('../');
var servers = require('osrs-servers');
var argv = require('optimist').argv;

console.error("Downloading server list...");
servers(function(err, servers){
  if (err) return console.error(err);
  top(servers, {
    n: argv.n || argv._[0],
    reverse: !!argv.r
  });
});
