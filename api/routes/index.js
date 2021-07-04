module.exports = function (app) {
  require('./property')(app);
  require('./user')(app);
}