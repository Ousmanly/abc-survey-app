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
  try {
    const db = await connect();
    const fichiers = db.collection('fichiers');
    const result = await fichiers.find({}).toArray();
    if (result.length === 0) {
      throw new Error('Aucun fichier trouvée');
    }
    console.log("Les fichiers trouvé :",result)
  
  } catch (error) {
    console.error(error.message);
  }
 
}
async function updateFichier(id, update) {
  try {
    const db = await connect();
    const fichiers = db.collection('fichiers');
    const result = await fichiers.updateOne({ id }, { $set: update });
  
    const checkFichierUpdate = await fichiers.findOne({ id: id });
    if (!checkFichierUpdate) {
      throw new Error('Aucun fichier trouvée');
    }
    console.log(`Le fichier de l'identifiant ${id} a été modifier avec succés`)
    return result.modifiedCount;
  } catch (error) {
    console.error(error.message)
  }
}

async function deleteFichier(id) {
  try {
    const db = await connect();
    const fichiers = db.collection('fichiers');
    const result = await fichiers.deleteOne({ id });
   if (result.deletedCount === 0) {
      throw new Error('Aucun fichier trouvée.');
    }
    console.log(`Le fichier de l'identifiant ${id} a été supprimé avec succés`)
    return result.deletedCount;
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = { createFichier, getFichier, updateFichier, deleteFichier };
