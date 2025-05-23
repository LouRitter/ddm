import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  projectId: process.env.GOOGLE_CLOUD_PROJECT,
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

export const logEvent = async (event: string, articleId: string) => {
  await bigquery
    .dataset('cms_events')
    .table('article_views')
    .insert([{ articleId, event, timestamp: new Date() }]);
};
