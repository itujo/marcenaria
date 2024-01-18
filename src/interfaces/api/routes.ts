import { TemplatedApp } from 'uWebSockets.js';
import {
  createCalcularOrcamentoController,
  createListarTiposGeometriaController,
} from '../factories';

export function setupRoutes(app: TemplatedApp) {
  app.get('/geometrias', (res, _req) => {
    createListarTiposGeometriaController().handle(res);
  });

  app.post('/orcamento', (res, req) => {
    createCalcularOrcamentoController().handle(res, req);
  });
}
