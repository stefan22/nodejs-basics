var parser = require('node-markdown');

var html = parser.Markdown('Using **Markdown** to test this file blahb blahb ablha here');

console.log(html);