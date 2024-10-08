const { connect } = require('./config/database');


async function createReponse(reponse) {
  const db = await connect();
  const reponses = db.collection('reponses');
  
  const existingReponse = await reponses.findOne({ id: reponse.id });
  
  if (existingReponse) {
    console.log(`Une réponse avec l'id ${reponse.id} existe déjà. Aucune réponse n'a été créée.`);
    return null; 
  } else {
    const result = await reponses.insertOne(reponse);
    console.log(`Réponse créée avec l'id ${reponse.id}.`);
    return result.insertedId;
  }
}


async function getReponse() {
  try {
    const db = await connect();
    const reponses = db.collection('reponses');
    const result = await reponses.find({}).toArray();
    if (result.length === 0) {
      throw new Error('Aucune réponse trouvée');
    }
    console.log("Les reponses trouvé :",result)
  
  } catch (error) {
    console.error(error.message);
  }
 
}

async function updateReponse(id, update) {
  try {
    const db = await connect();
    const reponses = db.collection('reponses');
    await reponses.updateOne({ id }, { $set: update });
  
    const checkReponseUpdate = await reponses.findOne({ id: id });
    if (!checkReponseUpdate) {
      throw new Error('Aucune réponse trouvée');
    }
    console.log(`La reponse de l'identifiant ${id} a été modifier avec succés`)
  } catch (error) {
    console.error(error.message)
  }
}


async function deleteReponse(id) {
  try {
    const db = await connect();
    const reponses = db.collection('reponses');
    const result = await reponses.deleteOne({ id });
   if (result.deletedCount === 0) {
      throw new Error('Aucune réponse trouvée.');
    }
    console.log(`La reponse de l'identifiant ${id} a été supprimé avec succés`)
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = { createReponse, getReponse, updateReponse, deleteReponse };
