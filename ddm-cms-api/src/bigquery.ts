import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery();

export const logEvent = async (event: string, articleId: string) => {
  await bigquery
    .dataset('cms_events')
    .table('article_views')
    .insert([{ articleId, event, timestamp: new Date() }]);
};
