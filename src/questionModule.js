const { connect } = require('./config/database');


async function createQuestion(question) {
  const db = await connect();
  const questions = db.collection('questions');
  
  const existingQuestion = await questions.findOne({ _id: question._id });
  
  if (existingQuestion) {
    console.log(`Une question avec l'id ${question._id} existe déjà. Aucune réponse n'a été créée.`);
    return null;  
  } else {
    const result = await questions.insertOne(question);
    console.log(`Question créée avec l'id ${question._id}.`);
    return result.insertedId;
  }
}

async function getQuestion() {
  const db = await connect();
  const questions = db.collection('questions');
  return await questions.find({}).toArray();
}
async function updateQuestion(_id, update) {
  const db = await connect();
  const questions = db.collection('questions');
  const result = await questions.updateOne({ _id }, { $set: update });
  return result.modifiedCount;
}

async function deleteQuestion(_id) {
  const db = await connect();
  const questions = db.collection('questions');
  const result = await questions.deleteOne({ _id });
  return result.deletedCount;
}

module.exports = { createQuestion, getQuestion, updateQuestion, deleteQuestion };