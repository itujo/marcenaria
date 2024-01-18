import {
  createCalcularOrcamentoUseCase,
  createValidarRequisicaoOrcamentoUseCase,
} from '../../domain/factories';
import { CalcularOrcamentoController } from '../controllers';

export function createCalcularOrcamentoController() {
  return new CalcularOrcamentoController(
    createCalcularOrcamentoUseCase(),
    createValidarRequisicaoOrcamentoUseCase()
  );
}
