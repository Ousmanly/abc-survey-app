const { connect } = require('./config/database');


async function createQuestion(question) {
  const db = await connect();
  const questions = db.collection('questions');
  
  const existingQuestion = await questions.findOne({ id: question.id });
  
  if (existingQuestion) {
    console.log(`Une question avec l'id ${question.id} existe déjà. Aucune réponse n'a été créée.`);
    return null;  
  } else {
    const result = await questions.insertOne(question);
    console.log(`Question créée avec l'id ${question.id}.`);
    return result.insertedId;
  }
}

async function getQuestion() {
  try {
    const db = await connect();
    const questions = db.collection('questions');
    const result = await questions.find({}).toArray();
    if (result.length === 0) {
      throw new Error('Aucune question trouvé');
    }
    console.log("Les questions trouvé :",result)
  
  } catch (error) {
    console.error(error.message);
  }
 
}

async function updateQuestion(id, update) {
  try {
    const db = await connect();
    const questions = db.collection('questions');
    const result = await questions.updateOne({ id }, { $set: update });
  
    const checkQuestionUpdate = await questions.findOne({ id: id });
    if (!checkQuestionUpdate) {
      throw new Error('Aucune réponse trouvée');
    }
    console.log(`La question de l'identifiant ${id} a été modifier avec succés`)
    return result.modifiedCount;
  } catch (error) {
    console.error(error.message)
  }
}

async function deleteQuestion(id) {
  try {
    const db = await connect();
    const questions = db.collection('questions');
    const result = await questions.deleteOne({ id });
    
   if (result.deletedCount === 0) {
      throw new Error('Aucune question trouvée.');
    }
    console.log(`La question de l'identifiant ${id} a été supprimé avec succés`)
    return result.deletedCount;
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = { createQuestion, getQuestion, updateQuestion, deleteQuestion };