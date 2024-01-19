import { CalcularOrcamentoUseCase } from "../../application/use-cases";
import { createMaterialRepository } from "../../infra/factories";
import { createGeometriaFactory } from "./geometriaFactory";

export function createCalcularOrcamentoUseCase() {
	return new CalcularOrcamentoUseCase(
		createMaterialRepository(),
		createGeometriaFactory(),
	);
}
