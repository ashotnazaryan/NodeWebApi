// const app = express();
const about = require('./about/about.api');
const dashboard = require('./dashboard/dashboard.api');

// require('./about/about.api')(app); 
// require('./dashboard/dashboard.api')(app); 

module.exports = (app) => {
  about(app);
  dashboard(app);
};