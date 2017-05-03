var creditosRoutes = require('./creditos/api');

module.exports = function routes(app) {
    app.use('/api', creditosRoutes);

};