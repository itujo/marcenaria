import { HttpResponse, HttpRequest } from 'uWebSockets.js';
import { readJson, sanitizeData } from '../../infra/utils';
import {
  CalcularOrcamentoUseCase,
  ValidarRequisicaoOrcamentoUseCase,
} from '../../application/use-cases';

export class CalcularOrcamentoController {
  constructor(
    private readonly calcularOrcamentoUseCase: CalcularOrcamentoUseCase,
    private readonly validarRequisicaoUseCase: ValidarRequisicaoOrcamentoUseCase
  ) {}
  async handle(res: HttpResponse, req: HttpRequest): Promise<void> {
    const dadosMovel = await readJson(res);

    const sanitizedData = sanitizeData(dadosMovel);

    const validacao = this.validarRequisicaoUseCase.execute(sanitizedData);

    if (!validacao.success) {
      res.writeStatus('400 Bad Request');
      res.writeHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          error: 'Erro de validação',
          details: validacao.error,
        })
      );
      return;
    }

    const orcamento = this.calcularOrcamentoUseCase.execute(sanitizedData);
    res.writeHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(orcamento));
  }
}
