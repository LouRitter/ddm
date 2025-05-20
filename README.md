# Dotdash Meredith CMS Backend (Demo)

A headless CMS-style backend built with Fastify, Firestore, and BigQuery, inspired by Dotdash Meredith's editorial apps like the People Magazine app.

## 🛠 Tech Stack

- **Node.js + TypeScript**
- **Fastify** – High-performance API framework
- **Firestore** – Scalable NoSQL document database
- **BigQuery** – Analytics event logging
- **Docker + Kubernetes** – Containerized deployment
- **GitHub Actions** – CI/CD pipeline
- **Artillery** – Load testing

---

## 📦 Required NPM Packages

Install these dependencies:

```bash
npm install fastify firebase-admin @google-cloud/bigquery pino
npm install --save-dev typescript ts-node-dev @types/node
```

---

## 🚀 Getting Started

### 1. Clone the repo and install dependencies

```bash
npm install
```

### 2. Set up Google credentials

Create a service account key in GCP and export it:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=./secrets/credentials.json
```

### 3. Start the development server

```bash
npx ts-node-dev src/index.ts
```

### 4. Seed Firestore with sample article data

Add `articles.json` to the `data/` folder, then:

```bash
npx ts-node data/seed.ts
```

---

## 🧪 Load Testing

```bash
npx artillery run tests/artillery.yml
```

---

## ☁️ Deployment

### Docker

```bash
docker build -t cms-api .
docker run -p 3000:3000 cms-api
```

### Kubernetes

Update `k8s/deployment.yaml` with your GCP project ID, then:

```bash
kubectl apply -f k8s/
```

---

## 📈 BigQuery Event Logging

The route `/articles/:id` logs a `view` event to BigQuery. Make sure your dataset and table exist:

- Dataset: `cms_events`
- Table: `article_views`

Schema should include:
- `articleId: STRING`
- `event: STRING`
- `timestamp: TIMESTAMP`

---

## 🤝 Credits

Based on the [HuffPost News Dataset](https://www.kaggle.com/datasets/rmisra/news-category-dataset) for realistic editorial content simulation.

---

## 📬 Contact

For questions or collaboration, reach out via GitHub or LinkedIn.