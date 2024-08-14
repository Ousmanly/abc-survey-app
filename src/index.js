const { createCreateur, getCreateur, updateCreateur, deleteCreateur } = require('./createurModule');
const { createQuestion, getQuestion, updateQuestion, deleteQuestion } = require('./questionModule');
const { createReponse, getReponse, updateReponse, deleteReponse } = require('./reponseModule');
const { createEnquete, getEnquete, updateEnquete, deleteEnquete } = require('./enqueteModule');

async function testCrud() {
  // Test CRUD pour Createur
  
//   const createurId = await createCreateur({ id: 17, nomEmploye: 'Ousmane Ly', roleEmploye :"charger de communication general" });
//   console.log('Createur Created:', createurId);
  
//   const createur = await getCreateur();
//   console.log('Createur Found:', createur);
  
//   await updateCreateur(17, { nomEmploye: 'aichetBBBBou Taher', roleEmploye :"charger de communication" });
//   console.log('Createur Updated');

//   await deleteCreateur(16);
//   console.log('Createur Deleted');
  // Test CRUD pour Question
//   const questionId = await createQuestion({ id: 3, enqueteId: 1, titre: 'Comment évalueriez-vous notre service ?', type: 'choix_multiple', options: ['Excellent', 'Bon', 'Moyen', 'Mauvais'] });
//   console.log('Question Created:', questionId);
  
//   const question = await getQuestion();
//   console.log('Question Found:', question);
  
//   await updateQuestion(3, { enqueteId: 32, titre: 'Comment évalueriez-vous notre service ?', type: 'choix_multiple', options: ['Excellent', 'Bon', 'Moyen', 'Mauvais'] } );
//   console.log('Question Updated');
  
//   await deleteQuestion(3);
//   console.log('Question Deleted');

  // Test CRUD pour Reponse
  
//   const reponseId = await createReponse({ id: 2, questionId: 3, titre: 'Bon' });
//   console.log('Reponse Created:', reponseId);
  
//   const reponse = await getReponse();
//   console.log('Reponse Found:', reponse);
  
//   await updateReponse(2, { questionId: 4, titre: 'Très Bon' });
//   console.log('Reponse Updated');
//   const reponse = await getReponse();
//   console.log('Reponse Found:', reponse);
//   await deleteReponse(6);
//   console.log('Reponse Deleted');
  // Test CRUD pour Enquete
//   const enqueteId = await createEnquete({ id:2, name: 'Satisfaction Client', description: 'This is a new fichier', date: '2025-08-25T08:00:00Z', createurId: 1, questionIds: [1], reponseIds: [1] });
//   console.log('Enquete Created:', enqueteId);

//   const enquetes = await getEnquete();
//   console.log('Enquetes Found:', enquetes);
  
//   await updateEnquete(2, { name: 'Satisfaction Client', description: 'This is a new fichier', date: '2025-08-25T08:00:00Z', createurId: 4, questionIds: [1], reponseIds: [1] });
//   console.log('Enquete Updated');
  
//   await deleteEnquete(10);
//   console.log('Enquete Deleted');
}

testCrud().catch(console.error);