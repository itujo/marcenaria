import { HttpResponse } from 'uWebSockets.js';
import { ListarTiposGeometriaUseCase } from '../../application/use-cases';

export class ListarTiposGeometriaController {
  constructor(
    private readonly listarTiposGeometriaUseCase: ListarTiposGeometriaUseCase
  ) {}
  handle(res: HttpResponse): void {
    const tiposGeometria = this.listarTiposGeometriaUseCase.execute();
    res.writeHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(tiposGeometria));
  }
}
