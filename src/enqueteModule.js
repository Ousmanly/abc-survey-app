const { connect } = require('./config/database');

async function createEnquete(enquete) {
  const db = await connect();
  const enquetes = db.collection('enquetes');
  
  const existingEnquete = await enquetes.findOne({ id: enquete.id });
  
  if (existingEnquete) {
    console.log(`Un enquete avec l'id ${enquete.id} existe déjà. Aucun enquete n'a été créée.`);
    return null; 
  } else {
    const result = await enquetes.insertOne(enquete);
    console.log(`Enquete créée avec l'id ${enquete.id}.`);
    return result.insertedId;
  }
}

async function getEnquete() {
  const db = await connect();
  const enquetes = db.collection('enquetes');
  return await enquetes.find({}).toArray(); 
}

async function updateEnquete(id, update) {
  const db = await connect();
  const enquetes = db.collection('enquetes');
  const result = await enquetes.updateOne({ id }, { $set: update });
  return result.modifiedCount;
}

async function deleteEnquete(id) {
  const db = await connect();
  const enquetes = db.collection('enquetes');
  const result = await enquetes.deleteOne({ id });
  return result.deletedCount;
}

module.exports = { createEnquete, getEnquete, updateEnquete, deleteEnquete };
