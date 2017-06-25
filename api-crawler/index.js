var request = require('request');
var fs = require('fs');

var TOTAL = 1000;
var START = 1;

var LOCK = 0;

var arr = new Array(TOTAL);
arr.fill(1);
arr = arr.map(function (ele, index) {
  var item = index + START;
  return "https://hacker-news.firebaseio.com/v0/item/" + item + ".json";
  // return "https://hacker-news.firebaseio.com/v0/item/" + item + ".json?print=pretty";
});

var result = [];
var count = 0;
arr.forEach(function (url, index) {
  request(url, function (error, res, html) {
    if (error) {
      console.log('response error', error);
    } else if (res !== undefined) {
      result.push(res.body);

      if (result.length === TOTAL) {

        console.log(result);
        fs.writeFile('data.json', result, function (err) {
          if (err) {
            console.log('err', err);
          } else {
            console.log('write done!');
          }
        });
      }
    }

  }); //request

}); //foreach