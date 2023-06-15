const Handlebars = require('handlebars');
const customHelpers = require('./custom_helpers');

// Register the custom handlebars helpers
Handlebars.registerHelper('reverse', customHelpers.reverse);
Handlebars.registerHelper('slice', customHelpers.slice);

// Include the existing helpers
const formatTime = (date) => {
  return date.toLocaleTimeString();
};

const formatDate = (date) => {
  return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
    new Date(date).getFullYear() + 5
  }`;
};

module.exports = {
  ...customHelpers,
  format_time: formatTime,
  format_date: formatDate,
};
