import { FastifyInstance } from 'fastify';
import { db } from '../firestore';
import { logEvent } from '../bigquery';

export default async function routes(app: FastifyInstance) {
  interface ArticleParams {
    id: string;
  }

  app.get('/articles', async (req, res) => {
    const snapshot = await db.collection('articles').limit(20).get();
    const articles = snapshot.docs.map(doc => doc.data());
    return articles;
  });


  app.get<{ Params: ArticleParams }>('/articles/:id', async (req, res) => {
    const { id } = req.params;
    const doc = await db.collection('articles').doc(id).get();

    if (!doc.exists) return res.code(404).send({ error: 'Not found' });

    await logEvent('view', id);
    return doc.data();
  });
}

