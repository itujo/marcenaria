import { CalcularOrcamentoUseCase } from "../../application/use-cases";
import { createMaterialRepository } from "../../infra/factories";
import { GeometriaFactory } from "./GeometriaFactory";

export function createCalcularOrcamentoUseCaseFactory() {
	return new CalcularOrcamentoUseCase(
		createMaterialRepository(),
		new GeometriaFactory(),
	);
}
