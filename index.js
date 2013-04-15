
var colors = require('colors');
var servers = require('osrs-servers');
var tab = require('tab');
var _ = require('underscore')._;

var columns = [
  { "label": "#"
  , "align": "right"
  , "width": 2
  }
,
  { "label": "COUNTRY"
  , "align": "left"
  , "width": 8
  }
,
  { "label": "SERVER"
  , "align": "left"
  , "width": 15
  }
,
  { "label": "POP"
  , "align": "right"
  , "width": 5
  }
,
  { "label": "LINK"
  , "align": "left"
  , "width": 35
  }
,
  { "label": "STATUS"
  , "align": "left"
  }
];

module.exports = function (servers, opts) {
  opts = opts || {};
  var n = opts.n || 10;
  servers = _(servers).chain()
                      .sortBy(function(s){ return -s.players; })
                      .first(n)
                      .value();
  var ind = 0;
  var rows = servers.map(function(s){
    var status = s.status === "online" ? s.status.green : s.status.red;
    var link = "http://"+ s.domain +".runescape.com/j1";
    return [++ind, s.countryCode, s.name, s.players, link, status];
  });

  tab.emitTable({
    'columns': columns,
    'rows': rows
  });
};

