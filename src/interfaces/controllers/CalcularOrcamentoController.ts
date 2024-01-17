import { HttpResponse, HttpRequest } from "uWebSockets.js";
import { createCalcularOrcamentoUseCaseFactory } from "../../domain/factories/CalcularOrcamentoUseCaseFactory";
import { readJson, sanitizeData } from "../../infra/utils";
import { createValidarRequisicaoOrcamentoUseCase } from "../../domain/factories";

export class CalcularOrcamentoController {
	async handle(res: HttpResponse, req: HttpRequest): Promise<void> {
		const calcularOrcamentoUseCase = createCalcularOrcamentoUseCaseFactory();
		const validarRequisicaoUseCase = createValidarRequisicaoOrcamentoUseCase();

		const dadosMovel = await readJson(res);

		const sanitizedData = sanitizeData(dadosMovel);

		const validacao = validarRequisicaoUseCase.execute(sanitizedData);

		if (!validacao.success) {
			res.writeStatus("400 Bad Request");
			res.writeHeader("Content-Type", "application/json");
			res.end(
				JSON.stringify({
					error: "Erro de validação",
					details: validacao.error,
				}),
			);
			return;
		}

		const orcamento = calcularOrcamentoUseCase.execute(sanitizedData);
		res.writeHeader("Content-Type", "application/json");
		res.end(JSON.stringify(orcamento));
	}
}
