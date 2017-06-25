var fs = require('fs');

fs.writeFile('hn_stories_normolized.json', '');

var result = [];
var count = 0;

var files = ['hn_stories.001', 'hn_stories.002', 'hn_stories.003'];

files.forEach(function (file) {
  readFile(file);
});


function readFile(file) {
  fs.readFile(file, 'utf-8', function (err, data) {
    var arr = data.split('\n');
    result = result.concat(arr);

    count++;
    if (count === files.length - 1) {
      var num = 5;
      var step = result.length / num;
      for (var i = 0; i < num; i++) {
        console.log(i);
        var group = result.slice(i * step, (i + 1) * step);
        fs.appendFileSync('hn_stories_normolized.json', JSON.stringify(group));
      }
    }
  });
}