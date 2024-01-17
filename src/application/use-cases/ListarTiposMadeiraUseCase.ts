import { MaterialRepository } from "../../infra/repositories";

export class ListarTiposMadeiraUseCase {
	constructor(private materialRepository: MaterialRepository) {
		this.materialRepository = materialRepository;
	}

	execute() {
		return this.materialRepository.listarTodos();
	}
}
