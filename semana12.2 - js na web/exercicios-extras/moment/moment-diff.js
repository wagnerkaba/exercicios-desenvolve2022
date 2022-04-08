var moment = require('moment');

var a = moment([2007, 0, 29]);
var b = moment([2007, 0, 28]);
console.log(a.diff(b)); // 86400000 is the difference in milliseconds


var c = moment([2007, 0, 29]);
var d = moment([2007, 0, 29]);
console.log(c.diff(d)); 