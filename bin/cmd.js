#!/usr/bin/env node

var top = require('../');
var servers = require('osrs-servers');

console.error("Downloading server list...");
servers(function(err, servers){
  if (err) return console.error(err);
  top(servers, { n: process.argv[2] });
});
