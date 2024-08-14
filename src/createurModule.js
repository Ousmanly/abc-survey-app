const { connect } = require('./config/database');


async function createCreateur(createur) {
  const db = await connect();
  const createurs = db.collection('createurs');
  
  // Vérifier si l'id existe déjà
  const existingCreateur = await createurs.findOne({ id: createur.id });
  
  if (existingCreateur) {
    console.log(`Une createur avec l'id ${createur.id} existe déjà. Aucune createur n'a été créée.`);
    return null;  // ou renvoyer un message ou une valeur spécifique si nécessaire
  } else {
    // Créer la nouvelle réponse si l'id n'existe pas
    const result = await createurs.insertOne(createur);
    console.log(`Createur créée avec l'id ${createur.id}.`);
    return result.insertedId;
  }
}
async function getCreateur() {
  const db = await connect();
  const createurs = db.collection('createurs');
  return await createurs.find({}).toArray();
}
async function updateCreateur(id, update) {
  const db = await connect();
  const createurs = db.collection('createurs');
  const result = await createurs.updateOne({ id }, { $set: update });
  return result.modifiedCount;
}

async function deleteCreateur(id) {
  const db = await connect();
  const createurs = db.collection('createurs');
  const result = await createurs.deleteOne({ id });
  return result.deletedCount;
}

module.exports = { createCreateur, getCreateur, updateCreateur, deleteCreateur };
