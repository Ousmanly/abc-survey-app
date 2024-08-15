const { createEmploye, getEmploye, updateEmploye, deleteEmploye } = require('./employeModule');
const { createQuestion, getQuestion, updateQuestion, deleteQuestion } = require('./questionModule');
const { createReponse, getReponse, updateReponse, deleteReponse } = require('./reponseModule');
const { createFichier, getFichier, updateFichier, deleteFichier } = require('./fichierModule');

async function testCrud() {
  // Test CRUD pour Createur
  
  // const employeId = await createEmploye({ id: 1, nomEmploye: 'Ousmane Ly', roleEmploye :"charger de communication general" });
  // console.log('Employe Created:', employeId);
  
  // const employe = await getEmploye();
  // console.log('Employe Found:', employe);
  
  // await updateEmploye(3, { nomEmploye: 'aichetou Taher', roleEmploye :"charger de communication" });
  // console.log('Employe Updated');

  // await deleteEmploye(3);
  // console.log('Employe Deleted');

  // Test CRUD pour Question

  // const questionId = await createQuestion({ id: 2, enqueteId: 1, titre: 'Comment évalueriez-vous notre service ?', type: 'choix_multiple', options: ['Excellent', 'Bon', 'Moyen', 'Mauvais'] });
  // console.log('Question Created:', questionId);
  
  // const question = await getQuestion();
  // console.log('Question Found:', question);
  
  // await updateQuestion(2, { enqueteId: 32, titre: 'Comment évalueriez-vous notre service ?', type: 'choix_multiple', options: ['Excellent', 'Bon', 'Moyen', 'Mauvais'] } );
  // console.log('Question Updated');
  
  // await deleteQuestion(2);
  // console.log('Question Deleted');

  // // Test CRUD pour Reponse
  
  // const reponseId = await createReponse({ id: 2, questionId: 3, titre: 'Bon' });
  // console.log('Reponse Created:', reponseId);
  
  // const reponse = await getReponse();
  // console.log('Reponse Found:', reponse);
  
  // await updateReponse(2, { questionId: 4, titre: 'Très Bon' });
  // console.log('Reponse Updated');

  // await deleteReponse(2);
  // console.log('Reponse Deleted');

  // // Test CRUD pour Enquete

  // const fichierId = await createFichier({ id:2, name: 'Satisfaction Client', description: 'This is a new fichier', date: '2025-08-25T08:00:00Z', employeId: 1, questionIds: [1], reponseIds: [1] });
  // console.log('Fichier Created:', fichierId);

  // const fichiers = await getFichier();
  // console.log('Fichier Found:', fichiers);
  
  // await updateFichier(2, { name: 'Satisfaction Client Amadou', description: 'This is a new fichier', date: '2025-08-25T08:00:00Z', createurId: 4, questionIds: [1], reponseIds: [1] });
  // console.log('Fichier Updated');

  // await deleteFichier(2);
  // console.log('Fichier Deleted');
}

testCrud().catch(console.error);