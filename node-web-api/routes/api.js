const about = require('./about/about.api');
const dashboard = require('./dashboard/dashboard.api');

module.exports = (app) => {
    about(app);
    dashboard(app);
};