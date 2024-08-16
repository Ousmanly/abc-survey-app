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
  try {
    const db = await connect();
    const employes = db.collection('employes');
    const result = await employes.updateOne({ id }, { $set: update });
  
    const checkEmployeUpdate = await employes.findOne({ id: id });
    if (!checkEmployeUpdate) {
      throw new Error('Aucun employe trouvée');
    }
    console.log(`L'employe de l'identifiant ${id} a été modifier avec succés`)
    return result.modifiedCount;
  } catch (error) {
    console.error(error.message)
  }
}

async function deleteEmploye(id) {
  try {
    const db = await connect();
    const employes = db.collection('employes');
    const result = await employes.deleteOne({ id });
   if (result.deletedCount === 0) {
      throw new Error('Aucune employe trouvée.');
    }
    console.log(`L'employe de l'identifiant ${id} a été supprimé avec succés`)
    return result.deletedCount;
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = { createEmploye, getEmploye, updateEmploye, deleteEmploye };
