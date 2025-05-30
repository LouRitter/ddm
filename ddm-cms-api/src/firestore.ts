import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: process.env.GCLOUD_PROJECT,
});

export const db = admin.firestore();

if (process.env.FIRESTORE_EMULATOR_HOST) {
  db.settings({ host: 'localhost:8080', ssl: false });
}