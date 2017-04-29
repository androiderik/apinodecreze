var creditosRoutes = require('./creditos/routes');

module.exports = function routes(app) {
    app.use('/creditos', creditosRoutes);
};