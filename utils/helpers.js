const customHelpers = require('./custom_helpers');

module.exports = {
  ...customHelpers.helpers, // Accessing the 'helpers' object inside customHelpers
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
};