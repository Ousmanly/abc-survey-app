const { connect } = require('./config/database');

async function createFichier(fichier) {
  const db = await connect();
  const fichiers = db.collection('fichiers');
  
  const existingFichier = await fichiers.findOne({ id: fichier.id });
  
  if (existingFichier) {
    console.log(`Un fichier avec l'id ${fichier.id} existe déjà. Aucun fichier n'a été créée.`);
    return null; 
  } else {
    const result = await fichiers.insertOne(fichier);
    console.log(`Fichier créée avec l'id ${fichier.id}.`);
    return result.insertedId;
  }
}

async function getFichier() {
  const db = await connect();
  const fichiers = db.collection('fichiers');
  return await fichiers.find({}).toArray(); 
}

async function updateFichier(id, update) {
  const db = await connect();
  const fichiers = db.collection('fichiers');
  const result = await fichiers.updateOne({ id }, { $set: update });
  return result.modifiedCount;
}

async function deleteFichier(id) {
  const db = await connect();
  const fichiers = db.collection('fichiers');
  const result = await fichiers.deleteOne({ id });
  return result.deletedCount;
}

module.exports = { createFichier, getFichier, updateFichier, deleteFichier };
