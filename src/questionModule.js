/**
 * De fichier est un exemple de module JS qui pourrqit une logique
 */
const { connect } = require('./config/database');


async function createQuestion(question) {
  const db = await connect();
  const questions = db.collection('questions');
  
  // Vérifier si l'id existe déjà
  const existingQuestion = await questions.findOne({ id: question.id });
  
  if (existingQuestion) {
    console.log(`Une question avec l'id ${question.id} existe déjà. Aucune réponse n'a été créée.`);
    return null;  // ou renvoyer un message ou une valeur spécifique si nécessaire
  } else {
    // Créer la nouvelle réponse si l'id n'existe pas
    const result = await questions.insertOne(question);
    console.log(`Question créée avec l'id ${question.id}.`);
    return result.insertedId;
  }
}

async function getQuestion() {
  const db = await connect();
  const questions = db.collection('questions');
  return await questions.find({}).toArray();
}
async function updateQuestion(id, update) {
  const db = await connect();
  const questions = db.collection('questions');
  const result = await questions.updateOne({ id }, { $set: update });
  return result.modifiedCount;
}

async function deleteQuestion(id) {
  const db = await connect();
  const questions = db.collection('questions');
  const result = await questions.deleteOne({ id });
  return result.deletedCount;
}

module.exports = { createQuestion, getQuestion, updateQuestion, deleteQuestion };