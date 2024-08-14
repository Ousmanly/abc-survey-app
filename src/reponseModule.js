/**
 * De fichier est un exemple de module JS qui pourrqit une logique
 */
const { connect } = require('./config/database');


async function createReponse(reponse) {
  const db = await connect();
  const reponses = db.collection('reponses');
  
  // Vérifier si l'id existe déjà
  const existingReponse = await reponses.findOne({ id: reponse.id });
  
  if (existingReponse) {
    console.log(`Une réponse avec l'id ${reponse.id} existe déjà. Aucune réponse n'a été créée.`);
    return null;  // ou renvoyer un message ou une valeur spécifique si nécessaire
  } else {
    // Créer la nouvelle réponse si l'id n'existe pas
    const result = await reponses.insertOne(reponse);
    console.log(`Réponse créée avec l'id ${reponse.id}.`);
    return result.insertedId;
  }
}


async function getReponse() {
  const db = await connect();
  const reponses = db.collection('reponses');
  return await reponses.find({}).toArray();
}

async function updateReponse(id, update) {
  const db = await connect();
  const reponses = db.collection('reponses');
  const result = await reponses.updateOne({ id }, { $set: update });
  return result.modifiedCount;
}

async function deleteReponse(id) {
  const db = await connect();
  const reponses = db.collection('reponses');
  const result = await reponses.deleteOne({ id });
  return result.deletedCount;
}

module.exports = { createReponse, getReponse, updateReponse, deleteReponse };
