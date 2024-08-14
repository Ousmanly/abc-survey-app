const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'enqueteDB';

let db;

async function connect() {
  if (db) return db;
  
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected to MongoDB');
  
  db = client.db(dbName);
  return db;
}

module.exports = { connect };