const CONSTANTS = require('./constants');

module.exports = [{
    name: 'breakepointType',
    type: 'list',
    default: 'bootstrap',
    message: 'Pick up breakpoints type',
    choices: CONSTANTS.BREAKPOINTS_TYPES
}]