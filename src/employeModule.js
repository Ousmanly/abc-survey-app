const { connect } = require('./config/database');


async function createEmploye(employe) {
  const db = await connect();
  const employes = db.collection('employes');
  
  const existingEmploye = await employes.findOne({ id: employe.id });
  
  if (existingEmploye) {
    console.log(`Une employe avec l'id ${employe.id} existe déjà. Aucune employe n'a été créée.`);
    return null;  
  } else {
    const result = await employes.insertOne(employe);
    console.log(`Employe créée avec l'id ${employe.id}.`);
    return result.insertedId;
  }
}
async function getEmploye() {
  const db = await connect();
  const employes = db.collection('employes');
  return await employes.find({}).toArray();
}
async function updateEmploye(id, update) {
  const db = await connect();
  const employes = db.collection('employes');
  const result = await employes.updateOne({ id }, { $set: update });
  return result.modifiedCount;
}

async function deleteEmploye(id) {
  const db = await connect();
  const employes = db.collection('employes');
  const result = await employes.deleteOne({ id });
  return result.deletedCount;
}

module.exports = { createEmploye, getEmploye, updateEmploye, deleteEmploye };
