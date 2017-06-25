var fs = require('fs');
var _ = require('underscore');

fs.readFile('1_5000.txt', 'utf-8', function (err, data) {
  var text = data.replace(/\}\{/g, '},{');
  text = '[' + text + ']';

  var arr = JSON.parse(text);

  var comments = arr.filter(function (ele) {
    return ele.type === 'comment';
  });

  var stories = arr.filter(function (ele) {
    return ele.type === 'story';
  });

  console.log('stories',stories.length);

  // console.log(arr);
  console.log('comments', comments);

  var types = _.unique(_.pluck(arr, 'type'));

  // console.log('types', types);
});