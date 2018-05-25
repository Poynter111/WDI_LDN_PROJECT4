const port = process.env.PORT || 4000;
const env = process.env.NODE_EMV || 'dev';
const dbURI = process.env.MONGODB_URI ||
`mongodb://localhost/gameDay-${env}`;

const secret = process.env.SECRET || 'G6^sk*/>alexiscool';

module.exports = { port, dbURI, secret, env };
