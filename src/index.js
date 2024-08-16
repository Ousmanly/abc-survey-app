const { createEmploye, getEmploye, updateEmploye, deleteEmploye } = require('./employeModule');
const { createQuestion, getQuestion, updateQuestion, deleteQuestion } = require('./questionModule');
const { createReponse, getReponse, updateReponse, deleteReponse } = require('./reponseModule');
const { createFichier, getFichier, updateFichier, deleteFichier } = require('./fichierModule');

async function testCrud() {
  // Test CRUD pour Employe
  
  await createEmploye({ id: 2, nomEmploye: 'Ousmane Ly', roleEmploye :"charger de communication general" });
  
  await getEmploye();
  
  await updateEmploye(2, { nomEmploye: 'aichetou Taher', roleEmploye :"charger de communication" });

  await deleteEmploye(1);

  // Test CRUD pour Question

  await createQuestion({ id: 1, fichierId: 1, titre: 'Comment évalueriez-vous notre service ?', type: 'choix_multiple', options: ['Excellent', 'Bon', 'Moyen', 'Mauvais'] });
  
  await getQuestion();
  
  await updateQuestion(2, { fichierId: 32, titre: 'Comment évalueriez-vous notre service ?', type: 'choix_multiple', options: ['Excellent', 'Bon', 'Moyen', 'Mauvais'] } );
 
  await deleteQuestion(1);

  // // Test CRUD pour Reponse
  
  await createReponse({ id: 2, questionId: 3, titre: 'Bon' });
  
  await getReponse();
  
  await updateReponse(2, { questionId: 6, titre: 'Très Bon' });

  await deleteReponse(2);

  // // Test CRUD pour Fichier

  await createFichier({ id:1, name: 'Satisfaction Client', description: 'This is a new fichier', date: '2025-08-25T08:00:00Z', employeId: 1, questionIds: [1], reponseIds: [1] });

  await getFichier();
  
  await updateFichier(3, { name: 'Satisfaction Client Amadou', description: 'This is a new fichier', date: '2025-08-25T08:00:00Z', createurId: 4, questionIds: [1], reponseIds: [1] });

  await deleteFichier(1);
}

testCrud().catch(console.error);