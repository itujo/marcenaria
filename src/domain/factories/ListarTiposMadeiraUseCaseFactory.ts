import { ListarTiposMadeiraUseCase } from "../../application/use-cases";
import { createMaterialRepository } from "../../infra/factories";

export function createListarTiposMadeiraUseCase() {
	return new ListarTiposMadeiraUseCase(createMaterialRepository());
}
