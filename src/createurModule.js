const { connect } = require('./config/database');


async function createCreateur(createur) {
  const db = await connect();
  const createurs = db.collection('createurs');
  
  const existingCreateur = await createurs.findOne({ _id: createur._id });
  
  if (existingCreateur) {
    console.log(`Une createur avec l'id ${createur._id} existe déjà. Aucune createur n'a été créée.`);
    return null;  
  } else {
    const result = await createurs.insertOne(createur);
    console.log(`Createur créée avec l'id ${createur._id}.`);
    return result.insertedId;
  }
}
async function getCreateur() {
  const db = await connect();
  const createurs = db.collection('createurs');
  return await createurs.find({}).toArray();
}
async function updateCreateur(_id, update) {
  const db = await connect();
  const createurs = db.collection('createurs');
  const result = await createurs.updateOne({ _id }, { $set: update });
  return result.modifiedCount;
}

async function deleteCreateur(_id) {
  const db = await connect();
  const createurs = db.collection('createurs');
  const result = await createurs.deleteOne({ _id });
  return result.deletedCount;
}

module.exports = { createCreateur, getCreateur, updateCreateur, deleteCreateur };
