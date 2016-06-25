import app from './lib/express';
import core from './controllers/core';

app.get('/', core.helloWorld);
