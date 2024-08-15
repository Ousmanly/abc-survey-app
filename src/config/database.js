const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'fiche_enquete';

let db;

async function connect() {
 try {
    if (db) return db;
    
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected to MongoDB');
    
    db = client.db(dbName);
    return db;
 } catch (error) {
  console.error('Not connected to MongoDB');
 }
}

module.exports = { connect };