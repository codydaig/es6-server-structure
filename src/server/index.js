import app from './lib/express';

require('./routes.js');

app.listen(3020, (err, data) => {
  if(err) {
    return console.error(err);
  }
  console.log('The party is jumping on port 3020.');
});
