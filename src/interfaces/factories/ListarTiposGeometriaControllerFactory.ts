import { createListarTiposGeometriaUseCase } from '../../domain/factories';
import { ListarTiposGeometriaController } from '../controllers';

export function createListarTiposGeometriaController() {
  return new ListarTiposGeometriaController(
    createListarTiposGeometriaUseCase()
  );
}
