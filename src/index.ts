import { Worker, isMainThread } from 'worker_threads';
import { cpus } from 'os';
import { App } from 'uWebSockets.js';
import { setupRoutes } from './interfaces/api/routes';

if (isMainThread) {
  for (const o of cpus()) {
    new Worker(__filename);
  }
} else {
  const app = App();

  setupRoutes(app);

  const port = 3000;
  app.listen(port, (token) => {
    if (token) {
      console.log(`[🚀]: Worker server running on port ${port}`, token);
    } else {
      console.log(`[❌]: Failed to start worker server on port ${port}`);
    }
  });
}
