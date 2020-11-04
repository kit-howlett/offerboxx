const moment = require('moment');

module.exports = value => moment(value).format('Do MMMM YYYY [|] HH:mm');