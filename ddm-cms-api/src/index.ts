import Fastify from 'fastify';
import routes from './routes/index';

const app = Fastify({ logger: true });

app.register(routes);

const PORT = process.env.PORT || 3000;
app.listen({ port: Number(PORT) }, err => {
  if (err) throw err;
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
