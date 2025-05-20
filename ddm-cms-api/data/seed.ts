import { db } from '../src/firestore';
import articles from './articles.json';

(async () => {
  for (const article of articles) {
    await db.collection('articles').doc(article.id).set(article);
  }
  console.log('✅ Seeding complete');
})();
