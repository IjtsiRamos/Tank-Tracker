module.exports = {
    reverse: function(array) {
      return array.slice().reverse();
    },
    slice: function(array, start, end) {
      return array.slice(start, end);
    },
    // Other non-handlebars helpers...
  };