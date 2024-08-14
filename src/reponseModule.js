const { connect } = require('./config/database');


async function createReponse(reponse) {
  const db = await connect();
  const reponses = db.collection('reponses');
  
  const existingReponse = await reponses.findOne({ _id: reponse._id });
  
  if (existingReponse) {
    console.log(`Une réponse avec l'id ${reponse._id} existe déjà. Aucune réponse n'a été créée.`);
    return null; 
  } else {
    const result = await reponses.insertOne(reponse);
    console.log(`Réponse créée avec l'id ${reponse._id}.`);
    return result.insertedId;
  }
}


async function getReponse() {
  const db = await connect();
  const reponses = db.collection('reponses');
  return await reponses.find({}).toArray();
}

async function updateReponse(_id, update) {
  const db = await connect();
  const reponses = db.collection('reponses');
  const result = await reponses.updateOne({ _id }, { $set: update });
  return result.modifiedCount;
}

async function deleteReponse(_id) {
  const db = await connect();
  const reponses = db.collection('reponses');
  const result = await reponses.deleteOne({ _id });
  return result.deletedCount;
}

module.exports = { createReponse, getReponse, updateReponse, deleteReponse };
