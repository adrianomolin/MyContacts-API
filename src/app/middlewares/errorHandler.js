module.exports = (error, request, response, next) => {
  console.log('#### error handler ###');
  console.error('ErrorHandler:', error);
  response.sendStatus(500);
};
