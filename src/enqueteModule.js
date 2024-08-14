/**
 * De fichier est un exemple de module JS qui pourrqit une logique
 */
const { connect } = require('./config/database');

async function createEnquete(enquete) {
  const db = await connect();
  const enquetes = db.collection('enquetes');
  
  // Vérifier si l'id existe déjà
  const existingEnquete = await enquetes.findOne({ id: enquete.id });
  
  if (existingEnquete) {
    console.log(`Un enquete avec l'id ${enquete.id} existe déjà. Aucun enquete n'a été créée.`);
    return null;  // ou renvoyer un message ou une valeur spécifique si nécessaire
  } else {
    // Créer la nouvelle réponse si l'id n'existe pas
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
