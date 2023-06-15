const Handlebars = require('handlebars');

// Define the reverse helper
Handlebars.registerHelper('reverse', function(array) {
  return array.slice().reverse();
});

// Define the slice helper
Handlebars.registerHelper('slice', function(array, start, end) {
  return array.slice(start, end);
});

module.exports = {
  helpers: Handlebars,
};